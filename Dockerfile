# [---- Base image ----]
# Set the version of node used as a base template
FROM node:18-alpine AS base
LABEL maintainer="Ignacio Gómez <jgnaciogomez@gmail.com>"
LABEL build_date="25-05-2023"
LABEL description="\
Dockerfile to containerize nextjs applications \
in production environments."
# --------------------------------------------------

# [---- Dependencies image ----]
FROM base AS deps
# Install libc6-compat, to set compatibility to musl
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
# Install dependencies if a package-lock.json found
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci --only=production; \
  else echo "Lockfile not found." && exit 1; \
  fi
# --------------------------------------------------

# [---- Build image ----]
# Rebuild the source code only when needed
FROM base AS build
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
# Nextjs collects completely anonymous telemetry data about general usage,
# this env variable set to 1 disable the data collection.
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
# --------------------------------------------------

# [---- The production image ----]
# Copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app
# Set a production enviroment
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
# Add users
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy all files required
COPY --from=build /usr/src/app/public ./public
# Automatically leverage output traces to reduce image size
COPY --from=build --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# Install pm2 (production process manager for node.js)
RUN npm install pm2@latest -g

# Sets the user to "nextjs", which is a non-root user for better security.
USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["pm2-runtime", "server.js"]
