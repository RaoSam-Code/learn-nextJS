import Link from "next/link"
export const metadata ={
    title: "About Satyam"
}


export default function About(){

    return (
        <>
        <h1>Profile About me</h1>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
        <Link href="/articles/breaking-news-123?lang=fn">read in french</Link>
    
    
    
        </>
    )
}