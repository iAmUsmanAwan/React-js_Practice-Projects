import React from 'react'
import {Link} from 'react-router-dom';

export default function Contact() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://cdn.pixabay.com/photo/2018/04/22/05/29/star-3340185_640.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Contact me on Gmail or Github</h1>
        </div>
    );
}