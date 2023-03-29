import { useRouter } from "next/router"

export default function ProductDetails(){
    const router = useRouter();
      function handleBack(){
        router.back()
      }
    return(
        <div style={{margin:'50px'}}>
            <button onClick={handleBack}>Back to List</button>
            <h1>Product Details page</h1>
        </div>
    )
}