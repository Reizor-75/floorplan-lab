import './App.css'
// import Floorplan from "./FloorPlan"
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingrRoom'

function App() {
  return (
    <div className='FloorPlan'>
      <span className='upper'>
        <span className='Upper-Left'>
          <Bedroom bedroomNum = {1} />      
          <Bath size="Full"/>
        </span>
        <LivingRoom />
        <Kitchen kitchenStuffs = {["Oven", "Sink"]}/>
      </span>
      <span className='bottom'>
        <Bedroom bedroomNum = {2} />
        <Bath size="Half"/>
        <Bedroom bedroomNum = {3} />
      </span>
    </div>
  )
}

export default App
