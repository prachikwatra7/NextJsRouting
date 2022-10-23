import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <></>{" "}
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <button
        onClick={() => {
          console.log("placing your order");
          router.push("/product");
        }}
      >
        Place order
      </button>
    </div>
  );
}

export default Home;
