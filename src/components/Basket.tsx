import { Link } from "react-router-dom";
import _ from "lodash";
import { BasketProps } from "../types";

export default function Basket({ basket }: BasketProps) {
  const groupedItems = _.groupBy(basket, "id");

  function handleIncreaseClick() {}
  function handleDecreaseClick() {}

  return (
    <ul>
      {Object.keys(groupedItems).map((id) => (
        <li key={`basket-item-${id}`}>
          <Link to={`../products/${id}`}>
            <p>{groupedItems[id][0].name}</p>
            <p>£{groupedItems[id][0].price}</p>
          </Link>
          <p>Quantity: {groupedItems[id].length}</p>
          <button onClick={handleIncreaseClick}>+</button>
          <button onClick={handleDecreaseClick}>-</button>
        </li>
      ))}
    </ul>
  );
}
