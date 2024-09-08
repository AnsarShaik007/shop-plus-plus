import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };
  const cartItems = useSelector((state) => state.cart);

  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li className="text-xl">
        <Link to={"/"}>Home</Link>
      </li>

      <li className="text-xl ">
        <Link to={"/allproduct"}>Products</Link>
      </li>

      <li className="text-xl ">
        <Link to={"/cart"}>Cart {cartItems.length}</Link>
      </li>

      {!user ? (
        <li className="border border-white px-3 rounded text-xl">
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li className=" text-xl border border-white px-4 rounded">
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role === "user" && (
        <li className="text-xl">
          <Link to={"/userdashboard"}>Orders</Link>
        </li>
      )}

      {user?.role === "admin" && (
        <li className="text-xl">
          <Link to={"/admindashboard"}>{user?.name}</Link>
        </li>
      )}

      {user && (
        <li
          className=" cursor-pointer text-xl  border border-white px-4 rounded "
          onClick={logout}
        >
          LogOut
        </li>
      )}
    </ul>
  );
  return (
    <nav className="bg-black sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              Shop-Plus-Plus
            </h2>
          </Link>
        </div>

        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
