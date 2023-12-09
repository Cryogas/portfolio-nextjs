import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
//write project card first then only go Projects write the data inside []
// put parameters inside the function
const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
    return(
        <div>
            {/* <Image src={imgUrl} height={208} width={1000} className="md:h-72 hover:opacity-30 object-contain bg-no-repeat bg-center rounded-t-xl"/> */}
            <div
            className="rounded-xl relative group center center bg-no-repeat transition duration-1000 hover:border-2 border-sky-400 h-64 sm:h-80 md:h-52 md:w-96 lg:h-72 lg:w-auto xl:h-80 xl:w-auto 2xl:w-auto 2xl:h-64"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>

                <div className="overlay rounded-xl items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link
                        target="blank"
                        href={gitUrl}
                        className="h-16 w-16 border-4 relative rounded-full border-[#ADB7BE] transition duration-300 hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform transition duration-1000 -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            
            <div className="text-white">
                <h5 className="font-semibold text-xl mb-2 mt-4 text-center">{title}</h5>
                <p className="text-center mb-4">{description}</p>
            </div>

        </div>
    );    
};

export default ProjectCard;



// import React from "react";
// import { CodeBracketIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
//     return (
//         <div>
//         <div
//             className="h-64 rounded-xl relative group center center bg-cover bg-no-repeat hover:bg-white"
//             style={{ backgroundImage: `url(${imgUrl})` }}
//         >
//             <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden transition duration-1500 group-hover:flex group-hover:bg-opacity-70">
//             <Link
//                 target="blank"
//                 href={gitUrl}
//                 className="h-16 w-16 border-4 relative rounded-full border-[#ADB7BE]  hover:border-white group/link"
//             >
//                 <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform transition duration-300 -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//             </Link>
//             </div>
//         </div>

//         <div className="text-white">
//             <h5 className="font-semibold text-xl mt-2 mb-2 text-center">{title}</h5>
//             <p className="text-center">{description}</p>
//         </div>
//         </div>
//     );
// };

// export default ProjectCard;
