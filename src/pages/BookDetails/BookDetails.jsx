import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id)
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId)
    // console.log(singleBook);
    
    const { author, bookName, category, image, review, tags, totalPages, yearOfPublishing, publisher, rating } = singleBook;

    return (
        <div className='lg:flex justify-center items-center gap-9 my-18'>
            <div className='w-1/2 flex justify-center items-center bg-slate-100 rounded-2xl h-full'>
                <div className='p-20'>
                <img className='rounded-xl' src={image} alt="book" />
                </div>
            </div>
            <div className='w-1/2 space-y-4 h-full'>
                <h1 className='text-4xl'>{bookName}</h1>
                <h4 className='font-semibold text-gray-600'>{author}</h4>
                <div className='border-1 border-slate-100'></div>
                <button className='font-semibold text-gray-500'>{category}</button>
                <div className='border-1 border-slate-100'></div>
                <p className='text-gray-500'><span className='font-bold text-black'>Review:</span> {review}</p>
                <div className='flex justify-start items-center gap-4 font-semibold'>
                    <p className=''>Tag: </p>
                    <div>
                    {
                        tags.map(tag => <button className='bg-green-50 text-green-500 px-3 py-2 rounded-2xl ml-3'>#{tag}</button>)
                    }
                </div>
                </div>
                <div className='border-1 border-slate-100'></div>
                <div className='flex justify-start items-center gap-20'>
                    <div className='space-y-3 text-gray-500'>
                        <h1>Number of Pages:</h1>
                        <h1>Publisher:</h1>
                        <h1>Year of Publishing:</h1>
                        <h1>Rating:</h1>
                    </div>
                    <div className='space-y-3 font-bold'>
                        <h1>{totalPages}</h1>
                        <h1>{publisher}</h1>
                        <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                    </div>
                </div>
                <div className='mt-10'>
                <button className="btn btn-outline">Read</button>
                <button className='btn btn-active btn-primary ml-3'>Whishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;