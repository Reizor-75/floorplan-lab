import './App.css'
// import Floorplan from "./FloorPlan"
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingrRoom'

function App() {
  return (
    <div>
      <Bedroom bedroomNum = {1} />
      <Kitchen kitchenStuffs = {["Oven", "Sink"]}/>
      <Bath size="Full"/>
      <Bedroom bedroomNum = {2} />
      <LivingRoom />
      <Bath size="Half"/>
      <Bedroom bedroomNum = {3} />
    </div>
  )
}

export default App
