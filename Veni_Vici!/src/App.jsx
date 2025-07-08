import { useState, useEffect } from 'react'
import './App.css'
import PreviousCats from './components/PreviousCats';
import BanCats from './components/BanCats';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  // State variables for current image, previous images, and ban images
  const [banList, setBanList] = useState({life_span:[], origin: [], weight:[]});
  const [catInfo, setCatInfo]= useState({image: "",life_span:"", origin: "", weight:""})
  const [prevInfo, setPrevInfo]= useState([])
 

// Function to fetch data from the API
 const callAPI = async (query) => {
    try {
      const response = await fetch(query, {
        headers:{
          'x-api-key':ACCESS_KEY
        }
      });
      const json = await response.json();
      const data = json[0];
      console.log(json)
      console.log(json[0].breeds[0].life_span)
      console.log(json[0].breeds[0].origin)
      console.log(json[0].breeds[0].weight.metric)

      console.log("url:"+json[0].url);
      console.log("name:"+json[0].name);

      if (!json[0]||!json[0].url) {
        alert("Oops! Something went wrong with that query, let's try again!");
      } else {
        // setCurrentImage(json[0].url);
        // setPrevImages((images) => [...images, json[0].url]);
        setCatInfo({image: json[0].url, life_span: json[0].breeds[0].life_span, origin: json[0].breeds[0].origin, weight:json[0].breeds[0].weight.metric });
        setPrevInfo((info) => [...info, {image: json[0].url, life_span: json[0].breeds[0].life_span, origin: json[0].breeds[0].origin, weight:json[0].breeds[0].weight.metric }]);
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
      alert("An error occurred while fetching data. Please try again.");
    }
  }

  // Function to make query to the API
  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?has_breeds=1`;
    callAPI(query).catch(console.error);
  }

  const banAttribute =(type, value)=>{
    setBanList(prev=>{
      const existing = prev[type]||[];
      if(existing.includes(value)){
        return prev;
      }
      return{
        ...prev,
        [type]: [...existing, value]
      };
    });
  };

  useEffect(()=>{
    console.log("updated ban list", banList);
  },[banList]);

  


  return (
    <>
      
      <h1>cats, Cats, & more CATS!!!</h1>
      <h3>View cats of all types, some in funny situations</h3>
      
      {catInfo.image ? (
        <img
          className="catImage"
          src={catInfo.image}
          alt="Screenshot returned"
        />
      ) : (
        <div> </div>
      )}
      <div className='info'>
        <strong>Life Span: </strong><button onClick={()=>banAttribute("life_span", catInfo.life_span)}>{catInfo.life_span}</button>
        <strong>Origin: </strong><button onClick={()=>banAttribute("origin", catInfo.origin)}>{catInfo.origin}</button>
        <strong>Weight: </strong><button onClick ={()=>banAttribute("weight", catInfo.weight)}>{catInfo.weight}</button>
      </div>

      <button type='submit' className='button' onClick={makeQuery}>Show that cat! 😺</button>
    
      <div className="container">
        <PreviousCats catInfo={prevInfo} />
        <BanCats banList={banList} setBanList={setBanList}/>
      </div>
    </>
  )
}

export default App
