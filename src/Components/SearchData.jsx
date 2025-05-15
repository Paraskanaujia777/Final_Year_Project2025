import React from 'react';

const SearchedData = ({ result }) => {
    // if (!result || result.length === 0) {
    //     return <p>No results found</p>;
    // }
    return (
        <div className="d-flex justify-content-between pt-5 flex-wrap mx-4">

            {result.map((item, index) => (
                <div key={index} className="card m-2 mb-4 " style={{ width: "20rem", height: "auto" }}>
                    <img src={item.image} className="card-img-top p-3" style={{ width: "20rem", height: "15rem" }} alt="..." />
                    <div className="card-body">
                        {/* <p className="card-title"> <b>Category :</b>{item.category}</p> */}
                        <p><b>Product Desciption :</b> {item.title}</p>
                        <p><b>Price :</b> {item.price}</p>
                        <p><b>Rating :</b> {item.stars}</p>

                        <a href={item.url} className="btn  bg-primary-subtle">Shop</a>
                    </div>
                </div>
            ))}

        </div>
    );
};



export default SearchedData;
