import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return ( 
    <>
      <div className="Kitchen">
        <span className="appliances">
          <Oven />
          <Sink />
        </span>
        <span className="Kitchen-title">Kitchen</span>
      </div>
    </>
  );
}

export default Kitchen;