import Link from "next/link";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MdMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
const Navbar = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    //     <div className="navbar  px-2 md:px-6 xl:px-10  flex items-center border fixed container mx-auto text-white bg-black bg-opacity-20 z-50 rounded-b-xl  ">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor">
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16" />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
    //         <li>
    //              <Link href="/">Home</Link>
    //            </li>
    //              <li>
    //                <Link href="/blogs">Blogs</Link>
    //          </li>
    //              <li>
    //                <Link href="/contact">Contact</Link>
    //              </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //     <li>
    //              <Link href="/">Home</Link>
    //            </li>
    //              <li>
    //              <Link href="/blogs">Blogs</Link>
    //          </li>
    //              <li>
    //                <Link href="/contact">Contact</Link>
    //              </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //   {user ? (
    //             <div className="flex items-center gap-4">
    //               <Link
    //                 href="/profile"
    //                 className="btn bg-[#FFA500] px-4 py-2 rounded-xl"
    //               >
    //                 Profile
    //               </Link>
    //               <LogoutLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
    //                 Log out
    //               </LogoutLink>
    //             </div>
    //           ) : (
    //             <div className="flex items-center gap-4">
    //               <LoginLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
    //                 Sign in
    //               </LoginLink>
    //               <RegisterLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
    //                 Sign up
    //               </RegisterLink>
    //             </div>
    //           )}
    //   </div>
    // </div>
    <div className="flex justify-between items-center w-11/12 mx-auto py-10 border-b">
      <div>
        <Link className="text-4xl font-bold" href={"/"}>
          Mamun
        </Link>
      </div>
      <div className="hidden sm:block">
        <ul className="text-xl font-medium flex gap-3">
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
              <li><RegisterLink className="flex items-center gap-1">
              <CiLogin />Sign up
            </RegisterLink></li>
          )}
        </ul>
      </div>
      <div className="dropdown dropdown-end sm:hidden">
  <div tabIndex={0} role="button" className="text-3xl font-semibold mr-4"><MdMenu /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-xl font-medium">
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
              <li><RegisterLink className="flex items-center gap-1">
              <CiLogin />Sign up
            </RegisterLink></li>
          )}
  </ul>
</div>
    </div>
  );
};

export default Navbar;
