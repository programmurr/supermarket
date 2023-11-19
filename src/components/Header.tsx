import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { BasketContextType } from "../types";

export default function Header() {
  const { roundedTotal } = useContext(BasketContext) as BasketContextType;
  return (
    <div>
      <p>Logo</p>
      <Link to="/">Home</Link>
      <Link to="basket">Basket</Link>
      <p>£{roundedTotal}</p>
      <Outlet />
    </div>
  );
}
