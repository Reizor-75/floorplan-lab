import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return ( 
    <>
      <div className="Kitchen">Kitchen
        <Oven />
        <Sink />
      </div>
    </>
  );
}

export default Kitchen;