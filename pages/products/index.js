import Link from "next/link";
import { useRouter } from "next/router";

export default function Products(){
    const router = useRouter();
    return(
        <div style={{margin:'50px'}}>
            <h1>Products Pages</h1>

            <button onClick={()=> router.back()}>Back to list page</button>
            <div style={{display:'flex', flexDirection:'column', gap:'25px'}}>
                <div>
                    <p><Link href={'/products/1'}>Product 1</Link></p>
                </div>
                <div>
                    <p><Link href={'/products/2'}>Product 2</Link></p>
                </div>
                <div>
                    <p><Link href={'/products/3'}>Product 3</Link></p>
                </div>
            </div>
        </div>
    )
}