import { useRouter } from "next/router"

export default function CartDetails(){

    const router = useRouter();
    const {query} = router;
    const {carDetails} = query

    return(
        <div style={{margin:'50px'}}>
            <h1>Cart Details Page</h1>
            <p>This is cart details page for the item and the id of the item is{carDetails} </p>
        </div>
    )
}