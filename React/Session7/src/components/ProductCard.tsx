// import type { Product } from "../hooks/useProduct";
// type ProductCardPropType={
//     products:Product[];
//     isInCart: (id: number) => boolean;
//     addToCart:(product:Product)=>void;
//     removeFromCart:(id:number)=>void;
// }
// export default function ProductCard({products,isInCart,removeFromCart,addToCart}:ProductCardPropType){

//     return(
//         <>
//          <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "75px",

//             justifyContent: "space-between",
//           }}
//         >
//           {products.map((item:Product) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid #ccc",
//                 borderRadius: "10px",
//                 padding: "15px",
//                 width: "250px",
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                 textAlign: "center",
//               }}
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//               <h3>{item.title}</h3>
//               <p>
//                 <b>Category:</b> {item.category}
//               </p>
//               <p>
//                 <b>Price:</b> ₹{item.price}
//               </p>
//               <p>
//                 <b>Rating:</b> ⭐ {item.rating}
//               </p>
//               <p>
//                 <b>Stock:</b> {item.stock}
//               </p>
//               {isInCart(item.id) ? (
//                 <button onClick={() => removeFromCart(item.id)}>
//                   Remove from Cart
//                 </button>
//               ) : (
//                 <button onClick={() => addToCart(item)}>Add to cart</button>
//               )}
//             </div>
//           ))}
//         </div>

//         </>
//     )
// }

import type { Product } from "../hooks/useProduct";
import React from "react";
type ProductCardProps = {
  item: Product;
  isInCart: (id: number) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

function ProductCard({
  item,
  isInCart,
  addToCart,
  removeFromCart,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}>
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{item.title}</h3>
      <p>
        <b>Category:</b> {item.category}
      </p>
      <p>
        <b>Price:</b> ₹{item.price}
      </p>
      <p>
        <b>Rating:</b> ⭐ {item.rating}
      </p>
      <p>
        <b>Stock:</b> {item.stock}
      </p>

      {isInCart(item.id) ? (
        <button onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart(item)}>Add to cart</button>
      )}
    </div>
  );
}
export default React.memo(ProductCard);
