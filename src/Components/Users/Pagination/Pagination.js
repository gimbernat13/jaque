import React from "react";

export const Pagination = ({ totalUsers, usersPerPage, paginate }) => {
  const pageNumbers = [];

for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers)
    
}

  return (
    <div>
      dis is de nomber of peiges
      <ul>
        {pageNumbers.map(number => {
          console.log(number)
          return (
            <li key={number}>
              <h1 onClick={() => paginate(number)} >{number}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
