const Bedroom = (props) => {
  return (  
    <>
    <div className="Bedroom" id={`bed-${props.bedroomNum}`}> Bedroom {props.bedroomNum} </div>
    </>
  );
}

export default Bedroom;