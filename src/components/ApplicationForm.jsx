import React from 'react'

const ApplicationForm = () => {
    return (
        <div>
            <h1 className='text-5xl text-center my-5 '>Please fill this application</h1>
            <div className="card shrink-0 w-full max-w-5xl mx-auto py-20 shadow-2xl bg-base-100">
                <form className="card-body">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address</span>
                            </label>
                            <input type="prsaddress" placeholder="Present Address" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Permanent Address</span>
                            </label>
                            <input type="paddress" placeholder="Permanent Address" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NID</span>
                            </label>
                            <input type="nid" placeholder="NID" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Vehicle No.</span>
                            </label>
                            <input type="vehicle" placeholder="Vehicle Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chess No.</span>
                            </label>
                            <input type="chess" placeholder="Chess Number" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NID Soft copy</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo <span className='text-gray-600'>
                                    200 * 200 (passport size)
                                </span> </span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                    </div>

                    <div className="form-control mt-6 w-60 justify-center mx-auto">
                        <button className="btn btn-accent">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplicationForm