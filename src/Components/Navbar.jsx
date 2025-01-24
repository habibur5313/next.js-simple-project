// // import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
// // import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className=" navbar  px-2 md:px-6 xl:px-10  flex items-center border fixed container mx-auto text-white bg-black bg-opacity-20 z-50 rounded-xl  ">
//    {/* <div>
//     <h1>HEllO</h1>
//    </div>
//    <div>
//     <ul>
//       <li><Link>Home</Link></li>
//       <li><Link></Link></li>
//     </ul>
//    </div>
//    <div>
//     <button><RegisterLink>Sign Up</RegisterLink></button>?
//     <button><LoginLink>Sign Out</LoginLink></button>
//    </div> */}
//     </div>
//   );
// };
// export default Navbar;

import Link from 'next/link';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const { getUser } = getKindeServerSession();
const user = getUser();

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between px-8">
        <h1 className="text-lg font-bold">
          <Link href="/">Siam</Link>
        </h1>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* {user ? ( */}
            {/* <div className="flex items-center gap-4">
              <Link href="/profile" className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Profile
              </Link>
              <LogoutLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Log out
              </LogoutLink>
            </div> */}
          {/* ) : ( */}
            <div className="flex items-center gap-4">
              <LoginLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Sign in
              </LoginLink>
              <RegisterLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">
                Sign up
              </RegisterLink>
            </div>
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




