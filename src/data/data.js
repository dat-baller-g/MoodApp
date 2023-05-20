// import React from 'react'

// function data() {
//   return (
//     <div>data</div>
//   )
// }

// export default data
import umbrella from "./umbrella.jpg"; 
import thunderbolt from "./thunderbolt.png"; 
import rain from "./rain.jpg"; 
import tree from "./tree.jpg";
import theSound from "./birds.wav";
import rainSound from "./rain.wav"; 
import pondSound from "./pond.wav"; 
import spaceSound from "./space.wav"; 

export const data = [
    {
        name: "calm",
        pic: [umbrella, thunderbolt],        
        sound: theSound

    },
    {
        name: "club",
        pic: [rain, tree],
        sound: rainSound

    },
    {
        name: "dance",
        pic: [umbrella, thunderbolt, rain, tree],
        sound: pondSound

    },
    {
        name: "think",
        pic: [umbrella, thunderbolt, rain, tree],
        sound: spaceSound

    }
]