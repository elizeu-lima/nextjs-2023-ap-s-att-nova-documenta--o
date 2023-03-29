import { useRouter, withRouter } from "next/router"

const cartItems = [
    {
        id:'1',
        label:'Cart Item 1'
    },
    {
        id:'2',
        label:'Cart Item 2'
    },
    {
        id:'3',
        label:'Cart Item 3'
    }
]

function Cart(){

    const router = useRouter();

    function handleNavigateToDetailsPage(getCurrentId){
        router.push(`/cart/${getCurrentId}`)
    }

    return(
        <div style={{margin:'50px'}}>
            <h1>Cart Page</h1>
            <button onClick={()=> router.back()}>Go to Homepage</button>
            <div style={{display:'flex', marginTop:'50px', flexDirection:'column', gap:'25px'}}>
               {
                cartItems.map(item=> <div style={{padding:'20px', border:'1px solid #fff'}} key={item.id}>
                    <p>{item.label}</p>
                    <button onClick={()=>handleNavigateToDetailsPage(item.id)}>Navigate to Details Page</button>
                </div>)
               }
            </div>
        </div>
    )
}

export default withRouter(Cart);