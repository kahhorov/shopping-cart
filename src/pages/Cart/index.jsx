import { useDispatch, useSelector } from "react-redux";
// icons
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import {
  amountMinus,
  amountPlus,
  deleteProduct,
} from "../../features/productsSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
// router-dom
import { Link, useNavigate } from "react-router-dom";
// mui
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { GoHome } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import UseGetApi from "../../hooks/UseGet";
import { MdDeleteOutline } from "react-icons/md";

function Cart() {
  const navigate = useNavigate();
  const productsCart = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { loading } = UseGetApi();
  // functions
  const handleAddAmount = (product) => {
    dispatch(amountPlus({ ...product }));
  };

  const handleMinus = (product) => {
    dispatch(amountMinus({ ...product }));
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  function handleDeleteCart(product) {
    dispatch(deleteProduct(product));
  }

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex justify-between items-center container my-5 rounded-lg bg-blue-400/10 inset-ring inset-ring-blue-400/20">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to={"/"}
            className="text-xs sm:text-sm cursor-pointer hover:underline text-gray-500 flex items-center gap-2 select-none"
          >
            <GoHome /> Home
          </Link>
          <Link
            to={"/cart"}
            className="text-xs sm:text-sm cursor-pointer hover:underline text-gray-500 flex items-center gap-2 select-none"
          >
            <PiShoppingCartLight /> Cart
          </Link>
        </Breadcrumbs>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ display: "flex", alignItems: "center" }}
          className="group"
        >
          <IoIosArrowRoundBack className="text-sm sm:text-2xl group-hover:-translate-x-3 transition-transform duration-150 ease-in" />
          <div className="text-xs">Back Home</div>
        </Button>
      </div>
      <ul
        className={
          productsCart.length > 0
            ? "flex flex-col gap-5 border border-gray-300 p-5  rounded-xl"
            : "border border-gray-300 p-5 rounded-xl w-full h-100"
        }
      >
        {productsCart.length > 0 && (
          <span className="w-full inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-4 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
            There are {productsCart.length} Products
          </span>
        )}

        {productsCart.length > 0 ? (
          productsCart.map((product) => {
            return (
              <li
                key={product.id}
                className="select-none flex gap-5 items-center w-full relative py-10 sm:py-5 not-first:border-gray-200 not-first:border-t"
              >
                <img
                  src={product.image}
                  alt={
                    product.title.length > 18
                      ? product.title.slice(0, 18) + "..."
                      : product.title
                  }
                  className="w-28 h-28 object-contain"
                />
                <div>
                  <h3
                    onClick={() => handleClick(product.id)}
                    className="cursor-pointer text-sm sm:text-xl font-bold sm:font-semibold"
                  >
                    {product.title.length > 18
                      ? product.title.slice(0, 18) + "..."
                      : product.title}
                  </h3>
                  <p
                    onClick={() => handleClick(product.id)}
                    className="text-xs sm:text-sm text-gray select-none cursor-pointer"
                  >
                    {product.description.length > 40
                      ? product.description.slice(0, 40) + "..."
                      : product.description}
                  </p>
                  <div className="flex items-center ml-auto gap-4 absolute bottom-0 translate-y-3.5 right-0 max-sm:w-full justify-between">
                    <Tooltip title="Delete">
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteCart(product)}
                        sx={{ fontSize: "20px" }}
                      >
                        <MdDeleteOutline />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Max 100 count">
                      <div className="flex items-center justify-center text-xl gap-4 border border-gray-300 text-gray-600 rounded-md py-1 px-2">
                        <button
                          className="disabled:text-gray-200"
                          onClick={() => {
                            handleMinus(product);
                          }}
                          disabled={product.amount < 2}
                        >
                          <FaMinus />
                        </button>
                        <p className="select-none">{product.amount}</p>
                        <button
                          className="disabled:text-gray-200"
                          onClick={() => {
                            handleAddAmount(product);
                          }}
                          disabled={product.amount > 99}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </Tooltip>
                    <p className="flex items-center text-xl font-medium text-primary select-none">
                      {Math.round(product.price) * product.amount}
                      <MdAttachMoney />
                    </p>
                  </div>
                </div>
              </li>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="select-none rounded-md bg-red-400/10 px-2 py-2 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20 text-center">
              Cart is empty
            </span>
            <p className="text-xl mt-10 py-4 font-mono text-center">
              Add products from the main page
            </p>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate("/")}
              sx={{ display: "flex", alignItems: "center" }}
              className="group"
            >
              <IoIosArrowRoundBack className="text-2xl group-hover:-translate-x-3 transition-transform duration-150 ease-in" />
              Back Home
            </Button>
          </div>
        )}
      </ul>
    </>
  );
}

export default Cart;
