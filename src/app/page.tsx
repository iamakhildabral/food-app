import Link from "next/link";

export default function Home(){
    return (
      <>
        <h1>Welcome to our Homepage</h1>
        <Link href="/blogs">Blog Page</Link>
        <br /><br />
        <Link href="/about">ABOUT Page</Link>
        <br /><br />
        <Link href="/docs">Docs Page</Link>
        <br /><br />
        <Link href="/products">Products Page</Link>
      </>
    );
    
}