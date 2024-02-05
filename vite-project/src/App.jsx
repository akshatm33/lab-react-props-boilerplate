import './App.css';
import elephant from "./images/elephant.jpeg";
import imageData from './components/DataComponent';
function App() {
  // code here

  const images=imageData.map((item)=>{
    return <img  key={item.id} id={item.id} className="images" src={item.img}></img>
  })
 return <>
        <div className="h1Container"><h1>Kalvium gallary</h1></div>
        <div className="imagesContainer">{images}</div>
        </>
 
}

export default App;