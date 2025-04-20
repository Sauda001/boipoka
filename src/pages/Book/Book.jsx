import React, { } from 'react';

const Book = ({ singleBook }) => {

    // const data = use(bookPromise);
    // console.log(data);

    // const data = use(singleBook)
    // console.log(singleBook);

    const { author, bookName, image, category, rating } = singleBook;


    return (
        <div className="card bg-base-100 w-[374px] shadow-sm h-[482px] p-6 border-1 border-slate-400 rounded-xl mx-auto">
            <div className='w-[326px] h-[230px] bg-slate-100 rounded-xl flex justify-center items-center'>
            <figure className='w-[134px] h-[126px] rounded-xl'> 
                <img src={image} alt="books" />
            </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>{author}</p>
                <div className="card-actions flex justify-around items-center">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;