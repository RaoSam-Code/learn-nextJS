import Link from 'next/link'
export default function Home(){
    return(
        <>
        <h1>Welcome Home User</h1>
        <Link href="/counter">Counter</Link><br/>
        <Link href="/products">Products</Link>

        </>
    )

}