import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";


const HeroSection = () => {
  return (
    <main className="py-16 mt-16 md-flex md:shrink-0 ">
        <div className="grid grid-cols-1 md:grid-cols-12 ">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-8 md:gap-x-24 place-self-center justify-self-start"
            >
                <h1 className="font-extrabold">
                {/* span text seperator -- for design*/}
                <span className="text-white text-8xl md:text-6xl 2xl:text-9xl">
                    Hello, I'm{" "} 
                    {/* <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Hock Guan
                    </span> */}
                </span>
                <br></br>
                <span className="text-7xl xl:9xl 2xl:text-8xl">
                <TypeWritter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .typeString`<span style="background: linear-gradient(to left,#2196F3, #00BCD4, #4CAF50); -webkit-background-clip: text; color: transparent">Hock Guan.</span>`
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString`<span style="background: linear-gradient(to right, #2196F3, #E91E63 ); -webkit-background-clip: text; color: transparent">a FrontEnd Dev.</span>`
                        .pauseFor(1500)
                        .deleteAll()
                        .start();

                    }}
                ></TypeWritter>
                </span>
                </h1>
                <p className="text-gray-300 pt-8 text-base sm:text-lg mt-12 mb-6 lg:text-xl">
                Slide down to know more about me! 
                </p>
                <Link
                    href="#projects" 
                    className="px-12 mb-4 inline-block py-3 rounded-lg mr-4 border-solid border-2 border-indigo-600 transition duration-500 hover:bg-violet-950">
                    <span className="text-xl text-gray-400 transistion duration-500 hover:text-white">Projects</span>
                </Link>

                {/* <Link
                    href="https://drive.google.com/file/d/1ajOJwhrua1lElHtbVjzOv12ySXn8xPBa/view?usp=sharing"
                    className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-pink-500 hover:bg-pink-400">
                    <span className="text-xl text-white">View my Resume</span>
                </Link> */}
            </motion.div>
            <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
            <div className="w-[400px] h-[400px] relative z-0 mr-6 xl:mr-32 xl:ml-2">
                <img
                src="/Hero-Section1.png"
                alt="hero section"
                className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-80 md:w-64 lg:w-96"
                // width={250}
                // height={450}
                />
            </div>
            </motion.div>
            </div>
        </div>
        </main>
    );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});