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
import {
  selectCategory,
  selectPrice,
  selectColor,
  selectSearch,
  selectRecommended,
} from "../../../filterSlice";

const ProductList = () => {
  const category = useSelector(selectCategory);
  const price = useSelector(selectPrice); //allprice,0-50,50-100,100-150,150+
  const color = useSelector(selectColor);
  const search = useSelector(selectSearch);
  const recommended = useSelector(selectRecommended);

  const dispatch = useDispatch();

  const products = useSelector(getAllProducts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  const categoryFilter = products.filter((product) =>
    category !== "allcategory"
      ? product.category.toLowerCase().includes(category.toLowerCase())
      : product
  );
  console.log(categoryFilter);
  const priceFilter = categoryFilter.filter((product) => {
    const productPrice = Number(product.newPrice);
    if (price === "allprice") {
      return product;
    } else if (price === "0-50") {
      if (productPrice >= 0 && productPrice <= 50) {
        return product;
      }
    } else if (price === "50-100") {
      if (productPrice > 50 && productPrice <= 100) {
        return product;
      }
    } else if (price === "100-150") {
      if (productPrice > 100 && productPrice <= 150) {
        return product;
      }
    } else if (price === "150+") {
      if (productPrice > 150) {
        return product;
      }
    }
  });
  console.log(priceFilter);
  const colorFilter = priceFilter.filter((product) =>
    color === "allcolors"
      ? product
      : color.toLowerCase() === product.color.toLowerCase()
  );

  console.log(colorFilter);
  const recommendedFilter = colorFilter.filter((product) =>
    recommended === "allProduct"
      ? product
      : product.company.toLowerCase() === recommended.toLowerCase()
  );
  console.log(recommendedFilter);
  const searchFilter = recommendedFilter.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.newPrice.toLowerCase().includes(search.toLowerCase()) ||
      product.company.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchFilter)
  const finalProducts = searchFilter;
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
          {finalProducts.map((product, index) => (
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
