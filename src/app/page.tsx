import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import SingleProductPage from './product/[id]/page'
import Price from '@/components/Price'

export default function Home() {
  return (
    <main>
      <Slider/>
      
      <Featured/>
      <Offer/>
      <SingleProductPage/>
      <Price price={0} id={0} />
      
      
      
      

    </main>
  )
}
