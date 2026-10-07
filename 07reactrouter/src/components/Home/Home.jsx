import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 hover:opacity-90 rounded-lg"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://w3.org"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                viewBox="0 0 24 24"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-14.243 6.8c-.465.223-.746-.192-.746-.192zm22.429-11.664c0 .455-.279.888-.744 1.116l-4.166 2.012-4.004-3.993 4.004-3.993 4.166 2.013c.465.227.744.661.744 1.117zm-23.185-11.758c0-.05.021-.091.045-.133.023-.016.059-.028.088-.041.077-.033.16-.046.242-.046.218 0 .432.091.597.171l14.244 6.8-3.713 3.702-10.531-10.502c-.672-.672-.972-1.951-.972-1.951zm15.421 7.822l4.053 4.048-15.421 7.394c-.465.223-.746-.192-.746-.192l12.114-11.25z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-80 w-full sm:my-20 sm:pt-1 pt-12 h-full max-w-xl">
                    <img 
                        className="w-200" 
                        src="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg" 
                        alt="image1" 
                    />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img 
                    className="sm:w-100 w-50" 
                    src="https://images.pexels.com/photos/296649/pexels-photo-296649.jpeg" 
                    alt="image2" 
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}