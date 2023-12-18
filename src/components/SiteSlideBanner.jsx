import React from 'react';

const SiteSlideBanner = () => {
    return (
        <div>
            <div
                className="hero bg-cover bg-center"
                style={{
                    backgroundImage: 'url(http://www.brta.gov.bd/sites/default/files/files/brta.portal.gov.bd/top_banner/8c5e6131_a56c_4bb1_a60a_c444a818515d/pm_pic_banner3.jpg)',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-5">
                        <h1 className="mb-5 text-5xl font-bold">বাংলাদেশ নিরাপদ সড়ক পরিবহন </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteSlideBanner;
