export default async function ProductReview({params,}:{params: Promise<{productID:string; reveiwID: string}>}){
    const {productID, reveiwID} = await params
    return <h1>Reveiw {reveiwID} for product {productID}</h1>
}