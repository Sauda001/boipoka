import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center gap-6 my-8 space-y-4 mb-10'>
            <div className='lg:w-1/2'>
                <h1 className='text-6xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary mt-8'>View The List</button>
            </div>
            <div className='lg:w-1/2'>
                <img src={bookImage} alt="" className='rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;