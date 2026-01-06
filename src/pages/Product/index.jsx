import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import UseGetApi from "../../hooks/useGet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// icons
import { AiOutlineProduct } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok",
  3.5: "Ok+",
  3.9: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function Product() {
  const { id } = useParams();
  const { data, loading, error } = UseGetApi(id);
  const navigate = useNavigate();
  const [value, setValue] = useState(data && data.rating?.rate);
  const [hover, setHover] = useState(-1);
  useEffect(() => {
    if (data?.rating?.rate) {
      setValue(data.rating.rate);
    }
  }, [data]);

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
            to={"/product/" + id}
            className="text-xs sm:text-sm cursor-pointer hover:underline text-gray-500 flex items-center gap-2 select-none"
          >
            <AiOutlineProduct /> Product
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
          <div className="text-[10px]">Back Home</div>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-gray-900/10 inset-ring inset-ring-gray-700/10 py-10 px-5">
        <img
          src={data?.image}
          alt={
            data?.title.length > 18
              ? data?.title.slice(0, 18) + "..."
              : data?.title
          }
          className="w-80 h-80 object-contain select-none"
        />
        <h3 className="text-xl font-bold text-start select-none">
          {data?.title}
        </h3>
        <p className="text-lg font-medium text-gray-700 text-start select-none">
          Category: {data?.category}
        </p>
        <p className="text-sm text-gray-500 text-start select-none">
          {data?.description}
        </p>
        <div className="flex justify-between select-none">
          <p className="text-primary font-bold select-none flex items-center">
            {data?.price} <MdAttachMoney className="text-lg" />
          </p>
        </div>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate("/cart")}
          sx={{ display: "flex", alignItems: "center" }}
          className="group"
        >
          <IoIosArrowRoundBack className="text-lg sm:text-2xl group-hover:-translate-x-3 transition-transform duration-150 ease-in" />
          <span className="text-xs">Back Cart</span>
        </Button>
      </div>
    </>
  );
}
