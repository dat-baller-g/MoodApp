import React from "react";


const Tile = ({name, sound, current, pic, index, myIndex, randomImg }) => {

    
//   myIndex(index)
  return (  
                         
    <div >
            <div>hello {name}</div>
            <img alt='mood-pic' src={randomImg} style={{width:"200px"}} id="mood-img"/>
                            
   </div>
 )
}

export default Tile