import {notFound} from "next/navigation"

export default async function ProductReview({params,}:{params: Promise<{productID:string; reveiwID: string}>}){
    const {productID, reveiwID} = await params
    if(parseInt(reveiwID)> 1000){
        notFound();
    }
    return <h1>Reveiw {reveiwID} for product {productID}</h1>
}