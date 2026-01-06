import Badge from "@mui/material/Badge";
import { PiShoppingCartLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const productsCart = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <nav className="shadow-sm flex justify-between h-24 fixed top-0 bg-white/90 z-10 w-full">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-[120px] -translate-x-10"
          />
        </Link>
        <button type="button" onClick={() => navigate("/cart")}>
          <Badge badgeContent={productsCart.length} color="primary">
            <PiShoppingCartLight className="text-2xl" />
          </Badge>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
