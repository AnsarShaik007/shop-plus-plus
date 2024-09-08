import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: ".",
  },
  {
    name: "shirt",
  },

  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admindashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}

        <div className="login_Form  px-8 py-6 border border-black rounded-xl shadow-md">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-black ">
              Add Product
            </h2>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className=" border text-black  border-black  px-2 py-2 w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="border text-black  border-black  px-2 py-2 w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="border text-black  border-black  px-2 py-2 w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="border text-black  border-black  px-2 py-2 w-96 rounded-md outline-none "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className=" border text-black  border-black  px-2 py-2 w-96 rounded-md outline-none "
            ></textarea>
          </div>

          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type="button"
              className="bg-black  w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
