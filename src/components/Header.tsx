import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <p>Logo</p>
      <Link to="/">Home</Link>
      <Link to="basket">Basket</Link>
      <Outlet />
    </div>
  );
}
