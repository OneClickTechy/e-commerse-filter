// ProductList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBagShopping } from "react-icons/fa6";
import {
  fetchProducts,
  getAllProducts,
  getPostsStatus,
  getPostsError,
} from "../../../../features/productSlice"; // Adjust the import path
import { AiFillStar } from "react-icons/ai";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="p-4 divide-x divide-y divide-gray-500">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <section className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className="flex flex-col justify-between items-center border border-gray-500 rounded-xl p-4"
            >
              <img
                src={product.img}
                alt={product.title}
                width={200}
                height={100}
                className="grow"
                loading="lazy"
              />
              <h1>{product.title}</h1>
              <div className="flex flex-nowrap">
                <span className="text-gold-dark flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </span>
                <span>{product.reviews}</span>
              </div>
              <div className="flex justify-around items-center w-full">
                <span>
                  <span className="line-through">{product.prevPrice}</span>
                  <span>${product.newPrice}</span>
                </span>
                <FaBagShopping />
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};

export default ProductList;
