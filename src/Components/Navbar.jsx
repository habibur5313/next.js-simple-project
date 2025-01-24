import Link from "next/link";
import {
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FaHome } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
const Navbar = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col sm:flex-row  justify-between items-center w-11/12 mx-auto py-5 border-b">
      <div>
        <Link className="md:text-4xl text-3xl font-semibold md:font-bold uppercase" href={"/"}>
          Blogger.com
        </Link>
      </div>
      <>
        <ul className="text-xl font-medium flex flex-wrap mt-3 justify-center items-center gap-3">
          <li>
            <Link className="flex items-center gap-1" href="/"><FaHome />Home</Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href="/blogs"><TbBrandBlogger />Blogs</Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href={`${user ? "/profile" : "/api/auth/login"}`}>
            <CgProfile />Profile
            </Link>
          </li>
          {user ? (
            <li>
              <LogoutLink className="flex items-center gap-1">
              <AiOutlineLogout />Log out
              </LogoutLink>
            </li>
          ) : (
              <li><LoginLink className="flex items-center gap-1">
              <CiLogin />Login
            </LoginLink></li>
          )}
        </ul>
      </>
    </div>
  );
};

export default Navbar;
