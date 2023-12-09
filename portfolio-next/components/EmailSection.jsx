import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => { 


    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="">
                <h5 className="text-4xl font-bold text-white my-2 underline decoration-solid ">Links</h5>
                <h4 className="pb-3 mt-10">Let's get in touch!</h4>
                <h4 className="pb-3 mt-2">For collabs or </h4>
                <div className=" flex flex-row gap-6 mt-10">
                    <Link href="https://github.com/Cryogas" target="-blank">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hg-lim-925ab3271/" target="blank" className="invert">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="h-12 w-auto"/>
                    </Link>
                    <Link href="https://www.instagram.com/h_g.lim/" target="blank"  className="mt-1 invert">
                        <Image src={InstagramIcon} className="h-10 w-auto"/>
                    </Link>
                    <Link href="mailto:hgthelim@gmail.com" className="mt-0 ml-1">
                        <Image src={GmailIcon} />
                    </Link>

                </div>
            </div>
        </main>
    );
};

export default EmailSection;