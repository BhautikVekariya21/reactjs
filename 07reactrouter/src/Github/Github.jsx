import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();

    return (
        <div className='flex items-center justify-center bg-pink-500 p-4 space-x-4 max-w-md mx-auto rounded-lg'>
            <div className='flex-shrink-0'>
                <img 
                    src={data.avatar_url} 
                    alt="GitHub avatar" 
                    className='w-24 h-24 rounded-full shadow-md'
                />
            </div>
            <div className='text-white text-2xl'>
                <p className='font-semibold'>Github followers: {data.followers}</p>
            </div>
        </div>
    );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};
