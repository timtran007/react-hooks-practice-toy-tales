import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {

  const toysToDisplay = toys.map(toy =>{
    return( 
      <ToyCard key={toy.id} toy={toy}/>
    )
  })
  return (
    <div id="toy-collection">
      {toysToDisplay}
    </div>
  );
}

export default ToyContainer;
