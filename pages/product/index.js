import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <div>
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>
        <Link href={`/product/3`} replace>
          <a>Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a>Product {productId}</a>
        </Link>
      </h1>
    </div>
  );
}

export default ProductList;
