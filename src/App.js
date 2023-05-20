import React, {useState, useEffect} from 'react';
import './App.css';
import Tile from './components/Tile';
import { data } from './data/data';

function App() {
  const [mood, setMood] = useState("");
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(true);
  const [index, setIndex] = useState(0);
  const [randomImg, setRandomImg] = useState("https://source.unsplash.com/1600x900/?nature,technology,pets")
  
  // let result = {};

  // const myIndex = (indexFromChild) => {
  //   setIndex(indexFromChild)
  // }

  const handleClick = (e) =>{
    console.log(e.target.name);
    setPaused(true);
    setMood(e.target.name)
  }

 
  const play = () => {
    setPaused(false);
    document.getElementById("mood-img").classList.add("fade-in-image")
  };
  // const resume = () => {
  //   setPaused(false);
  // };
  const pause = () => {
    setPaused(true);
    document.getElementById("mood-img").classList.remove("fade-in-image")
  };
  const reset = () => {
    setCurrent(0);
    setPaused(true);
  };

  // useEffect(
  //   function () {
  //     var timeout;
  //     if (!paused) {
  //       timeout = setTimeout(function () {
  //         const next = current < data[index].pic.length - 1 ? current + 1 : 0;
  //         const randomNumber = Math.floor(Math.random() * data[index].pic.length) + 0
  //         setCurrent(randomNumber);
  //         console.log(randomNumber)
  //       }, 5000);
  //     }
  //     return function () {
  //       clearTimeout(timeout);
  //     };
  //   },
  //   [paused, current, index, randomImage]
  // );

  useEffect(
    function () {
      var timeout;
      if (!paused) {
        timeout = setTimeout( async function () {
         // const randomImage = "https://source.unsplash.com/1600x900/?nature,technology,pets"
         let randomImage;
         if(mood === "calm"){
            randomImage = await fetch("https://source.unsplash.com/1600x900/?nature")
         }else if(mood === "club"){
            randomImage = await fetch("https://source.unsplash.com/1600x900/?party")
         }else if(mood === "dance"){
            randomImage = await fetch("https://source.unsplash.com/1600x900/?dance")
         }else if(mood === "think"){
            randomImage = await fetch("https://source.unsplash.com/1300x700/?ocean")
         }
          //const randomImage = await fetch("https://source.unsplash.com/1600x900/?nature,technology,pets")
         setRandomImg(randomImage.url);
         console.log(randomImg)
        }, 20000);
      }
      return function () {   
        clearTimeout(timeout);
      };
    },
    [randomImg, paused, mood]
  );

  return (
    <div className="App">
      <h1 className='header'>Mood App</h1>
      <br style={{border:"2px solid black", width:"10px", height:"20px"}} />
      <div style={{display:"flex"}} className="main-container"  >
          <div className="controls-container">
                <div>
                  <p>Mood types</p>
                </div>
               
                <div className='mood-container'>
                  <button onClick={handleClick} name="calm" className='mood-btn' >Calm</button>
                  <button onClick={handleClick} name="club" className='mood-btn'>Club</button>
                  <button onClick={handleClick} name="dance" className='mood-btn'>Dance</button>
                  <button onClick={handleClick} name="think" className='mood-btn'>Think</button>
                </div>
                <div>
                    {data.map((moodSet, i)=>(
                      moodSet.name === mood  &&  (
                        <div>
                          {/* <Tile name={moodSet.name} index={i} pic={moodSet.pic} sound={moodSet.sound} current={current}  randomImg={randomImg} style={{position: "absolute"}}/> */}
                          <audio controls  loop className="audio-control">
                            <source src={moodSet.sound} type="audio/wav" />
                            <source src={moodSet.sound} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                          </audio>

                        </div>
                        )               
                      
                    ))}
                </div>
          
                
          </div>

          <div  style={{backgroundImage: `url(${randomImg})`}} className="img-container animate">

          </div>
      </div>
     
      
      <div className="control-btn-container">
        <button onClick={()=> play()} name="play" className='control-btn'>Play Slideshow</button>
        <button onClick={()=> pause()} name="pause" className='control-btn'>Pause Slideshow</button>
        <button onClick={()=> reset()} name="reset" className='control-btn'>Reset</button>
      </div>
      
            

     </div>
  );
}

export default App;



//  {data.filter((moodSet)=>{ return(
//                         moodSet.name === mood && 
//                        <div>
//                          <h3>{moodSet.name}</h3>
//                          <img alt='mood-pic' src={moodSet.pic} />
//                        </div>)
//               })} */}

  //           * <h3>{result.name}</h3>
  // <img alt="mood-pic" src={result.pic}  /> 

  //  moodSet.name === mood  && ( 
                         
  //                       <div >
                        
  //                           <div>{i}</div>
  //                           <div>hello {moodSet.name}</div>
                        

  //                         <img alt='mood-pic' src={moodSet.pic[current]} style={{width:"400px"}} id="mood-img"/>
  //                         <audio controls  loop>
  //                         <source src={moodSet.sound} type="audio/wav" />
  //                         <source src={moodSet.sound} type="audio/mpeg" />
                            
  //                           Your browser does not support the audio tag.
  //                       </audio>
                        


  //                       </div>) 