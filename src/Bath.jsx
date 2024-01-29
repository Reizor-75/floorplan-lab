const Bath = (props) => {
  return ( 
    <>
      <div className="Bath" id={`Bath-${props.size}`}>{props.size} Bath</div>
    </>
  );
}

export default Bath;