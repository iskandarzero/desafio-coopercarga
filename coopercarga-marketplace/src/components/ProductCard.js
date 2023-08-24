export default function ProductCard(props) {
  let product = props.product;

  return (
    <div>
      <img src={product.image_url} alt={product.type} />
      <h3>{product.name}</h3>
      <span>{product.price}</span>
    </div>
  );
}