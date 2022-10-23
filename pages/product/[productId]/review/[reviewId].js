import { useRouter } from "next/router";

function ProductReviewDetails() {
  const router = useRouter();
  const productId = router?.query?.productId;
  const reviewId = router?.query?.reviewId;

  return (
    <div>
      <h1>Product Detail {productId}</h1> <h1>Review Detail {reviewId}</h1>
    </div>
  );
}

export default ProductReviewDetails;
