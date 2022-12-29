function Product(props) {
  return (
    <div className="card" >
      <h2>{props.product.title}</h2>
      <p>{props.product.description}</p>
      <img src={props.product.image} />
      <p> Price: {props.product.price}</p>
    </div>
  );
}

export default Product;
