import Link from "next/link";
import ProductCard from "./Components/ProductCard";


export default function Home() {
  return (
   <main>
    <h1>world</h1>
    <Link href="/users">users</Link>
    <ProductCard/>
   </main>
  );
}
