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
        {Object.keys(groupedItems)
          .sort()
          .map((name, index) => (
            <S.ListItem key={`basket-item-${index}`}>
              <S.ListLink to={`../products/${groupedItems[name][0].id}`}>
                <p>{groupedItems[name][0].name}</p>
                <p>£{groupedItems[name][0].price}</p>
              </S.ListLink>
              <S.BasketButtons>
                <S.QuantityButton
                  onClick={() => handleDecreaseClick(groupedItems[name][0])}
                >
                  -
                </S.QuantityButton>
                <S.BasketQuantity>
                  Quantity: {groupedItems[name].length}
                </S.BasketQuantity>
                <S.QuantityButton
                  onClick={() => handleIncreaseClick(groupedItems[name][0])}
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
