import React, { } from 'react';
import { IoStarHalfSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    // const data = use(bookPromise);
    // console.log(data);

    // const data = use(singleBook)
    // console.log(singleBook);

    const { author, bookName, image, category, rating, tags, bookId } = singleBook;


    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-[374px] shadow-sm p-6 border-1 border-slate-400 rounded-xl mx-auto">
            <div className='w-[326px] h-[230px] bg-slate-100 rounded-xl flex justify-center items-center'>
            <figure className='w-[134px] h-[166px] rounded-lg'> 
                <img src={image} alt="books" />
            </figure>
            </div>
            <div className='flex justify-start items-center gap-3'>
                {
                    tags.map(tag => <button className='bg-green-50 text-green-500 font-semibold mt-4 rounded-3xl px-3 py-1'>{tag}</button>)
                }
            </div>
            <div className=" space-y-3 mt-2">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p className='border-b-2 border-dashed border-slate-300 pb-3'>{author}</p>

                <div className="card-actions flex justify-between items-center ">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <IoStarHalfSharp /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;