import Link from 'next/link'
import React from 'react'

const SiteNavbar = () => {
    return (
        <div className='bg-base-content text-white'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link className='' href='/'>Home</Link></li>
                            <li><Link className='' href='/'>About</Link></li>
                            <li><Link className='' href='/'>Contact</Link></li>

                        </ul>
                    </div>
                    <Link href='/' className="text-2xl font-semibold">
                        <h1 className='text-3xl font-semibold '>BRTA</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='' href='/'>Home</Link></li>
                        <li><Link className='' href='/'>About</Link></li>
                        <li><Link className='' href='/'>Contact</Link></li>
                    </ul>

                </div>
                <div className="navbar-end">
                    <Link href='/login' className="btn btn-primary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SiteNavbar