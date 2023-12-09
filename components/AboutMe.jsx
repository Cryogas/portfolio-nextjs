import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                    <li>HTML</li>
                    <li>CSS & Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2">
                <li>Solana Hyperdrive</li>
                <li>APUBCC Sparkathon</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                    <li>Asia Pacific University</li>
                    <li>Chong Hwa Independent High School</li>
            </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-32 md:px-10 py-24 xl-gap-16 items-start">
                <div>
                    <img src="/AboutMe.png" alt="About Me" className="ml-auto mr-auto"  width={450} height={450} style={{ borderRadius: "25px"}}/>
                </div>
                <div className="mt-4 mb-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-7xl md:text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">About Me</h1>
                    <p className="text-base font-semibold lg:text-lg mt-2">- Currently a CyberSecurity Student.</p>
                    <p className="text-lg font-semibold md:text-m text-justified lg:text-lg mt-8">- Started with <span className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-blue-300 to-yellow-200">zero</span> knowledge in coding 
                    but I have gained a lot of frontend developer skills by attending events and lots of hands-on practices.</p>
                    <p className="text-base text-center lg:text-lg"></p>
                    <p className="text-base text-center lg:text-lg"></p>
                    <div className="flex flex-row mt-16">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;