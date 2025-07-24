import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <from className="flex flex-col gap-4 ">
        <input type="text" placeholder='username' id='username' className='border border-slate-200 p-3 rounded-lg bg-white'/>
        <input type="email" placeholder='email' id='email' className='border border-slate-200 p-3 rounded-lg bg-white'/>
        <input type="password" placeholder='password' id='password' className='border border-slate-200 p-3 rounded-lg bg-white'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase cursor-pointer hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </from>
      <div className="flex gap-2 mt-5"><p>Have an account?</p> <Link to={"/sign-in"}><span className="text-blue-700">Sign in</span></Link></div>
    </div>
  )
}
