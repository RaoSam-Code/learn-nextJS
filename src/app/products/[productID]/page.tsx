import { Metadata } from "next";

type Props ={
    params: Promise<{productID: string}>
}
export const generateMetadata = async ({params,}:Props): Promise<Metadata> => {
        const id = (await params).productID;
        return{
            title: `Product ${id}`
        }
    }

// Example of exportting meta data

export default async function ProductDetails({params,}:{params: Promise<{productID: string}>}){
    const productID = (await params).productID
    return <h1>Details about product {productID}</h1>
}