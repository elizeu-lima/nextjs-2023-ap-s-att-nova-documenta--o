import Link from "next/link";
export function Navbar(){
    return(
        <ul 
        style={{
         display: 'flex', 
         gap:'20px', 
         listStyle:'none',
         marginTop:'30px',
         marginLeft:'30px', 
         margin:'50px' 
         }}>
         <li style={{fontSize:'20px'}}><Link href={'/'}>Home</Link></li>
         <li style={{fontSize:'20px'}}><Link href={'/products'}>Products</Link></li>
         <li style={{fontSize:'20px'}}><Link href={'/cart'}>Cart</Link></li>

        </ul>
    )
}