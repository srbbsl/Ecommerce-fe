import { Hero } from "../Components/Layout/Hero"
import { GenderCollection } from "../Components/Products/GenderCollection"
import { NewArrivals } from "../Components/Products/NewArrivals"

export const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />
    </div>
  )
}
