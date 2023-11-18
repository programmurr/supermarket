import { Link } from "react-router-dom";
import _ from "lodash";
import { BasketProps, Product } from "../types";

export default function Basket({ basket, setBasket }: BasketProps) {
  const groupedItems = _.groupBy(basket, "id");
  const total: number = basket.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);

  function handleIncreaseClick(item: Product) {
    setBasket((oldBasket) => [...oldBasket, item]);
  }
  function handleDecreaseClick(item: Product) {
    setBasket((oldBasket) => {
      const index = oldBasket.findIndex(
        (basketItem) => basketItem.id === item.id
      );
      if (index > -1) {
        return [...oldBasket.slice(0, index), ...oldBasket.slice(index + 1)];
      }
      return oldBasket;
    });
  }

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
