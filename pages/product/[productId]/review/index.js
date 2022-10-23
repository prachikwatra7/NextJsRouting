import { useRouter } from "next/router";

function ProductReviewsList() {
  const router = useRouter();
  const id = router?.query?.productId;
  return (
    <div>
      <h1>Product {id} Review 1</h1>
      <h1>Product {id} Review 2</h1>
      <h1>Product {id} Review 3</h1>
    </div>
  );
}

export default ProductReviewsList;
