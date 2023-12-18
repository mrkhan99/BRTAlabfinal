import Link from 'next/link';
import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Notice = () => {
    return (
        <div className="max-w-5xl mx-auto my-10">
            <div className="card bg-base-100 shadow-xl p-10 grid grid-cols-2 justify-between items-center">
                <div className="">
                    <h1 className="text-xl font-semibold mb-5">ড্রাইভিং লাইসেন্স গ্রহণ প্রকিরিয়া</h1>
                    <div className="flex flex-col gap-2">
                        <Link className='' href="/">
                            <p className='flex gap-5 items-center '> <FaArrowRightFromBracket />
                                ড্রাইভিং লাইসেন্স </p>
                        </Link>
                        <Link className='' href="/">
                            <p className='flex gap-5 items-center '> <FaArrowRightFromBracket />
                                ড্রাইভিং লাইসেন্সের আবেদন প্রক্রিয়া </p>
                        </Link>
                        <Link className='' href="/">
                            <p className='flex gap-5 items-center '> <FaArrowRightFromBracket />
                                ড্রাইভিং লাইসেন্স নবায়ন </p>
                        </Link>
                        <Link className='' href="/">
                            <p className='flex gap-5 items-center '> <FaArrowRightFromBracket />
                                ড্রাইভিং কম্পিটেন্সি টেস্ট বোর্ডের ফলাফল </p>
                        </Link>
                        <Link className='' href="/">
                            <p className='flex gap-5 items-center '> <FaArrowRightFromBracket />
                                ড্রাইভিং পরীক্ষার নমুনা প্রশ্নোত্তর </p>
                        </Link>
                    </div>
                    <Link href='/application'>
                        <button className='btn btn-success mt-5'> Apply Now </button>
                    </Link>
                </div>
                <div className="">
                    <img src="https://i.pinimg.com/736x/58/7b/1e/587b1e114bff4b853fb157717d2e2e0b.jpg" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Notice;
