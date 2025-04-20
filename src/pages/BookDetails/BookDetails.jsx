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
            <div className='w-1/2 flex justify-center items-center bg-slate-100 rounded-2xl'>
                <div className='p-20'>
                <img className='rounded-xl' src={image} alt="book" />
                </div>
            </div>
            <div className='w-1/2'>
                <h1>{bookName}</h1>
                <h4>{author}</h4>
                <button>{category}</button>
                <p>Review: {review}</p>
                <div>
                    {
                        tags.map(tag => <button>{tag}</button>)
                    }
                </div>
                <div className='flex justify-start items-center'>
                    <div>
                        <h1>Number of Pages</h1>
                        <h1>Publisher</h1>
                        <h1>Year of Publishing</h1>
                        <h1>Rating</h1>
                    </div>
                    <div>
                        <h1>{totalPages}</h1>
                        <h1>{publisher}</h1>
                        <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                    </div>
                </div>
                <button className='btn'>Read</button>
                <button className='btn ml-3'>Whishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;