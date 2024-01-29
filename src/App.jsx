import './App.css'
import Floorplan from "./FloorPlan"
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'

function App() {
  return (
    <div>
      <Bedroom bedroomNum = {1} />
      <Kitchen kitchenStuffs = {["Oven", "Sink"]}/>

      <Bedroom bedroomNum = {2} />
      <Bedroom bedroomNum = {3} />
    </div>
  )
}

export default App
