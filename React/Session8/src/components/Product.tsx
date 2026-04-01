import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../types/ProductType";
import type { RootState } from "../redux/store";
import { addToCart, removeToCart } from "../redux/cartActions";
import type { CartType } from "../types/CartType";

export default function Product({ product }: { product: Product }) {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const dispatch = useDispatch();

  return (
    <div key={product.id} className="card">
      <img src={product.thumbnail} className="image" />

      <div className="card-body">
        <h4>{product.title}</h4>
        <p className="meta">{product.price}</p>
        <p className="meta">{product.category}</p>
        <p className="meta">Rating: {product.rating}</p>
        <p className="meta">Stock: {product.stock}</p>
        {carts.find((cart: CartType) => cart.id === product.id) ? (
          <button
            className="btn"
            onClick={() => dispatch(removeToCart(product.id))}>
            Remove From Cart
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  qty: 1,
                  thumbnail: product.thumbnail,
                }),
              )
            }>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
