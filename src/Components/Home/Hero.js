import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Hero = () => {
    return (
        <div className="relative">
            <div class="hero h-screen lg:h-[60vh] mt-16 bg-accent">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos-duration="900" data-aos="fade-right">Best Quality</p>
                        <h1 data-aos-duration="1000"
                            data-aos="fade-right"
                            class=" text-5xl font-bold max-w-xl"
                        >
                            Professional Cleaning Service
                        </h1>
                        <p data-aos-duration="1100" data-aos="fade-right" class=" py-6 max-w-xl">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                        </p>
                        <button
                        data-aos-duration="1200"
                            data-aos="fade-right"
                            class=" btn btn-primary rounded-none"
                        >
                            Get Started <span className="pl-4">❯</span>
                        </button>
                    </div>
                    <div className="h-[60vh]  shrink-0">
                        <img src={BucketGirl} class="max-w-lg h-full" alt="" />
                    </div>
                </div>
            </div>
            <div className=" mx-auto mt-[-50px] relative z-20 bg-base-200 shadow-xl p-10 w-5/6">
                <h1 className="text-2xl mb-5 text-primary">
                    Get Free Estimate
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of Cleaning"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of Cleaning"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Number of bedrooms"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Frequency of Cleaning"
                        class="input rounded-none input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of Cleaning"
                        class="input rounded-none input-bordered w-full"
                    />
                </div>
                <button className="btn btn-primary mt-5 rounded-none px-8 text-base-100">
                    Get a Quote
                </button>
            </div>
        </div>
    );
};

export default Hero;
