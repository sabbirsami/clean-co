import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Hero = () => {
    return (
        <div>
            <div class="hero h-screen lg:h-[60vh] mt-16 bg-accent">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p>Best Quality</p>
                        <h1 class="text-5xl font-bold">
                            Professional Cleaning Service
                        </h1>
                        <p class="py-6 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className="h-[60vh]  shrink-0">
                        <img src={BucketGirl} class="max-w-lg h-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
