import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { BasketContextType } from "../types";
import * as ProductListStyles from "../styles/ProductList";
import * as BasketStyles from "../styles/Basket";
const S = { ...ProductListStyles, ...BasketStyles };

export default function Basket() {
  const { groupedItems, handleIncreaseClick, handleDecreaseClick } = useContext(
    BasketContext
  ) as BasketContextType;

  return (
    <div>
      <S.List>
        {Object.keys(groupedItems).map((id) => (
          <S.ListItem key={`basket-item-${id}`}>
            <S.ListLink to={`../products/${id}`}>
              <p>{groupedItems[id][0].name}</p>
              <p>£{groupedItems[id][0].price}</p>
            </S.ListLink>
            <S.BasketButtons>
              <S.QuantityButton
                onClick={() => handleDecreaseClick(groupedItems[id][0])}
              >
                -
              </S.QuantityButton>
              <S.BasketQuantity>
                Quantity: {groupedItems[id].length}
              </S.BasketQuantity>
              <S.QuantityButton
                onClick={() => handleIncreaseClick(groupedItems[id][0])}
              >
                +
              </S.QuantityButton>
            </S.BasketButtons>
          </S.ListItem>
        ))}
      </S.List>
    </div>
  );
}
