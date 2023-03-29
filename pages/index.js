import { useRouter } from "next/router"


export default function Home() {

  const router = useRouter();

  function handleNavigateToProductPage(){
    router.push('products')
  }

  function handleNavigateToCartPage(){
    router.push('cart')

  }

  function handleReloadPage(){
    router.reload()
  }

  return (
   <div style={{margin:'50px'}}>
    <h1>hello new nextjs!</h1>
    <div style={{display:'flex', gap:'30px'}}>
      <button onClick={handleNavigateToProductPage}>Navigate to product page</button>
      <button onClick={handleNavigateToCartPage}>Navigate to cart page</button>
      <button onClick={handleReloadPage}>Reload this page</button>
    </div>
   </div>
  )
}
