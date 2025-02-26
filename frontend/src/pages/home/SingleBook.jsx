import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import { BsCartPlus } from "react-icons/bs";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error happending to load book info</div>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-lg shadow-md p-5 bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">{book.title}</h1>

        <div className="text-center">
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8 mx-auto"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            {/* <strong>Author:</strong> {book.author || "admin"} */}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-[#FF9D23] px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-[#0D0842] hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-1"
          >
            <BsCartPlus />
            <span>Masukkan Keranjang</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
