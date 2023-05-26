import Image from "next/image"

export function Hero() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src="/images/hero_image.jpg"
                    className="mask mask-parallelogram-3 max-w-sm rounded-lg shadow-2xl"
                    alt="Abstract form"
                    width={500}
                    height={500}
                />
                <div>
                    <h1 className="text-5xl font-bold">Next.js Application on <span className="font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-700 via-red-300 to-indigo-500 animate-text">Google App Engine</span> !</h1>
                    <p className="py-6 w-3/4">The web application is deployed on a Google Cloud App Engine instance, utilizing a Docker container that hosts a Next.js application.</p>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Check out my Github repository</h2>
                            <p className=" font-light text-gray-400">/jgnacio/landing_app_engine/</p>
                            <a href="https://github.com/jgnacio/landing_app_engine" target="_blank" rel="noreferrer"><button className="btn btn-outline"><span className="p-1">Github</span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></button></a>
                        </div>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}