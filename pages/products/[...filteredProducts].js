import { useRouter } from "next/router";


export default function FiltredProducts(){

    const router = useRouter();
    const {query} = router; 
    const {filteredProducts} = query;

    return(
        <div style={{margin:'50px'}}>
            <h1>This is a catch all router</h1>
            {
                filteredProducts && filteredProducts.length > 0 ?
                filteredProducts.map(item=> <p key={item}>{item}</p>) : null 
            }
        </div>
    )
}