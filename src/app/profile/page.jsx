import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const metadata = {
  title: "Blogger.com || Profile",
};
const Profile = async() => {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    
  return (
   <>
   <h1 className='text-2xl mt-10 mb-5 text-purple-500 font-semibold text-center uppercase'>Hello,{user?.given_name} {user?.family_name} welcome to you profile</h1>
    <div className='border shadow-xl max-w-2xl mx-auto  py-20 flex flex-col md:flex-row gap-4 justify-center items-center'>
      <img className='w-20 md:w-32 rounded-full' src={user?.picture} alt="user image" />
      <div className='md:text-2xl md:font-semibold sm:text-xl sm:font-medium flex flex-col space-y-3'>
        <h1>Name: {user?.given_name} {user?.family_name} </h1>
        <h1>Email: {user?.email} </h1>
        <div>
        <button className='btn text-xl font-medium btn-accent text-white'>Edit Profile</button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Profile