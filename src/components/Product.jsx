import "../styling/Product.css";
import AddToCard from "./AddToCard";
import PhotoSlider from "./PhotoSlider";

function Product({ cartCount, setCartCount, totalCount, setTotalCount }) {
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const handleIncrease = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrease = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const handleAddToCart = () => {
    setTotalCount(totalCount + cartCount);
  };
  let price = 250;
  let discount = 50;
  let finalPrice = price - (price * discount) / 100;
  return (
    <div className="product-component-container">
      <div className="product-photo">
        <PhotoSlider images={images} />
      </div>
      <div className="product-description">
        <p className="the-product-company">SNEAKER COMPANY</p>
        <h2 className="the-product-name">Fall Limited Addition Sneakers</h2>
        <p className="the-product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos culpa
          accusamus cum facilis architecto alias. Expedita, id accusamus,
          asperiores consectetur eum voluptas facilis cupiditate saepe,
          aspernatur nisi harum accusantium?
        </p>

        <div>
          <div className="price-container">
            <p className="product-final-price">${finalPrice.toFixed(2)}</p>
            <p className="product-discount">{discount.toFixed(0)}%</p>
          </div>

          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        <AddToCard
          cartCount={cartCount}
          setCartCount={setCartCount}
          totalCount={totalCount}
          setTotalCount={setTotalCount}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default Product;
