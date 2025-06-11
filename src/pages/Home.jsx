import { BestSeller } from "../Components/Layout/BestSeller"
import { Hero } from "../Components/Layout/Hero"
import { FeaturedCollection } from "../Components/Products/FeaturedCollection"
import { GenderCollection } from "../Components/Products/GenderCollection"
import { NewArrivals } from "../Components/Products/NewArrivals"
import { TopWearsWomen } from "../Components/Products/TopWearsWomen"

export const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />
        <BestSeller />
        <TopWearsWomen />
        <FeaturedCollection />
    </div>
  )
}
