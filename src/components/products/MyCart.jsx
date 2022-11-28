import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const MyCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="px-2">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Qty</th>
            <th scope="col">Product</th>
            <th scope="col" className="text-end">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <CartItemRow cartItem={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CartItemRow = ({ cartItem }) => {
  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{cartItem.product.name}</td>
      <td className="text-end">{cartItem.totalPrice}</td>
    </tr>
  );
};
