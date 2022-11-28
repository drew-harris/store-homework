import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const MyCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="px-2">
      <table className="table mt-4 border-top">
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
          {cart.items.map((item, index) => (
            <CartItemRow cartItem={item} index={index} key={item.id} />
          ))}
          <tr>
            <td></td>
            <td></td>
            <td className="text-end">{cart.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const CartItemRow = ({ cartItem, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-secondary bg-opacity-25" : undefined}>
      <td>{cartItem.quantity}</td>
      <td>
        <span>{cartItem.product.name} - </span>
        <span className="text-secondary">${cartItem.product.price}/each</span>
      </td>
      <td className="text-end">{cartItem.totalPrice}</td>
    </tr>
  );
};
