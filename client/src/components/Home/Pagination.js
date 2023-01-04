import React from 'react'
import './pagination.css';

const Pagination = ({ prodPerPage, totalProd, paginate}) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalProd / prodPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>
            <div className="py-2">
                <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-nowrap" >
                        {pageNumber.map(number =>
                            <li key={number}>
                                <a onClick={() => paginate(number)}  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 text-dark  bg-pink-500" style={{ cursor: 'pointer' }}>
                                    {number}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination