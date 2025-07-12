"use client";
import { usePathname } from "next/navigation"; // use pathName is a hook and to use hooks in nextjs we have to tell server that it is 
                                            //   client sde component , because by default all components are server side components
export default function NotFound(){
    const pathname = usePathname()
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h2>Reveiw {reviewId} not found for {productId}</h2>
        </div>
    )
}