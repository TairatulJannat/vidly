import React, { Component } from 'react';
import _ from 'lodash'; //javascript libary
import PropTypes from 'prop-types';

const Pagination = props => {

    const {itemCount , pageSize , currentPage, onPageChange} = props; //object destructuring
    const pageCount = Math.ceil(itemCount/pageSize);
    console.log(currentPage);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount+1);
    return (
     
        <nav>
        <ul className="pagination">
            {pages.map(page =>(
                <li key={page} className= {page == currentPage ? 'page-item active' : 'page-item'}>
                < a className="page-link" style={{ cursor:"pointer" }} onClick={()=> onPageChange(page)}>{page}</a>
               </li>

            ))}
            
        </ul>
        </nav>
       
    );
}

// Pagination.PropTypes = {
//     itemCount:PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired

// };
 
export default Pagination;