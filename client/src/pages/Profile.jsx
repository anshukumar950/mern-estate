import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector ((state)=> state.user)
  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className='text-center font-semibold my-7 text-3xl'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt="profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2" />
      <input type="text" id="username" placeholder="username" className="rounded-lg border-none p-3 bg-white"/>
<input type="email" id="email" placeholder="email" className="rounded-lg border-none p-3 bg-white"/>
<input type="password" id="password" placeholder="password" className="rounded-lg border-none p-3 bg-white"/>
     <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:hover:opacity-80">update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span  className="text-red-700 cursor-pointer">Delete account</span>
        <span  className="text-red-700 cursor-pointer">Sign out</span>
      </div>
      </div>
  )
}
