import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";

const Footer = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  return (
    <div style={{backgroundColor: 'black', color: 'white'}} className=" py-20 mt-10 flex flex-col items-center justify-center space-y-3">
      <Link
        className="md:text-4xl text-3xl font-semibold md:font-bold uppercase"
        href={"/"}
      >
        Blogger.com
      </Link>
      <ul className="text-xl font-medium flex flex-wrap mt-3 justify-center items-center ">
        <li>
          <Link className="flex items-center gap-1" href="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-1 ml-3" href="/blogs">
            <TbBrandBlogger />
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1 ml-3"
            href={`${user ? "/profile" : "/api/auth/login"}`}
          >
            <CgProfile />
            Profile
          </Link>
        </li>
      </ul>
      <div className="border-t-2 container mx-auto">
        <p className="text-xl font-medium text-center mt-2">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Blogger.com{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
