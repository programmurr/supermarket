import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { BasketContextType } from "../types";

export default function Basket() {
  const {
    groupedItems,
    handleIncreaseClick,
    handleDecreaseClick,
    roundedTotal,
  } = useContext(BasketContext) as BasketContextType;

  return (
    <div>
      <ul>
        {Object.keys(groupedItems).map((id) => (
          <li key={`basket-item-${id}`}>
            <Link to={`../products/${id}`}>
              <p>{groupedItems[id][0].name}</p>
              <p>£{groupedItems[id][0].price}</p>
            </Link>
            <p>Quantity: {groupedItems[id].length}</p>
            <button onClick={() => handleIncreaseClick(groupedItems[id][0])}>
              +
            </button>
            <button onClick={() => handleDecreaseClick(groupedItems[id][0])}>
              -
            </button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total: £{roundedTotal}</p>
      </div>
    </div>
  );
}
