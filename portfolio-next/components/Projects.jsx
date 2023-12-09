import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Business Card",
        description: "My First FrontEnd project.",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/Cryogas/business-card"

    },
    // {
    //     id: 2,
    //     title: "ClubDAO",
    //     description: "This is a project.",
    //     image: "/projects/clubdao.png",
    //     gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
    // },
    // {
    //     id: 3,
    //     title: "FundChat",
    //     description: "This is a project for APUBCC Sparkathon & Solana Hyperdrive.",
    //     image: "/projects/FundChat.png",
    //     gitUrl: "https://github.com/cheongyeechian/fundchat"
    // },
    // {
    //     id: 4,
    //     title: "Megamask",
    //     description: "This is a project for ETH Online.",
    //     image: "/projects/megamask.png",
    //     gitUrl: "https://github.com/megamask"
    // }, 
    // {
    //     id: 5,
    //     title: "zkJom",
    //     description: "This is a project fro ETHKL.",
    //     image: "/projects/zkJom.png",
    //     gitUrl: "https://github.com/trlau/zkJ0M"
    // }, {
    //     id: 6,
    //     title: "Attest Me",
    //     description: "This is a project for ETH Global Superhack.",
    //     image: "/projects/attestme.png",
    //     gitUrl: "https://github.com/0xBenjamintan/attestMe"
    // }, 

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8 transition duration-700 hover:text-cyan-300 ">My Project(s)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-x-8 gap-y-12 md:gap-12 lg:grid-cols-2 lg:gap-x-7 xl:grid-cols-2 xl:gap-10 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-20">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl} 
                    />))}
            </div>
        </div>
    );
};

export default Projects;
