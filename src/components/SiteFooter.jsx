import Link from 'next/link'
import React from 'react'

const SiteFooter = () => {
    return (
        <div>

            <footer className="footer p-10 bg-base-content text-base-100 justify-between items-start">
                <nav>
                    <header className="footer-title">Contact</header>
                    <Link href='' className="link link-hover">
                        <h1 className='text-2xl font-semibold'>LOGO</h1>
                        <div className="mt-1">Location, Dhaka</div>
                    </Link>
                </nav>

                <nav>
                    <header className="footer-title">links</header>
                    <Link href='' className="link link-hover">Home</Link>
                    <Link href='' className="link link-hover">License</Link>
                    <Link href='' className="link link-hover">About</Link>
                </nav>

                <form>
                    <header className="footer-title">Subscribe</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item text-black" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>

        </div>
    )
}

export default SiteFooter