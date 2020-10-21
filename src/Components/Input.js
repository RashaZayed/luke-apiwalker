import React, { useEffect, useState } from "react";
import axios from "axios";

const Input = (props) => {
  const apiurl = "https://swapi.dev/api/";
  const { state, setState } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [errorText, setErrorText] = useState(false);

  console.log(errorText)

  useEffect(() => {
    if(isSubmitted){

    axios
      .get(apiurl + state.category + "/" + state.id + "/")

      .then((response) => {
        setData({...response.data });
      })
      

      .catch((reject) => setErrorText(true));
     
    }
  }, [isSubmitted]);
  console.log(data);
  console.log(errorText)

  const onClickHandler = (e) => { //set the change value in search field as a state.category
    e.preventDefault();

    setState({
      ...state,
      category: e.target.value,
    });
  };
  

  const idHandler = (e) => {    //set the change in id field as a state.id
    console.log(state);
    e.preventDefault();
    setState({
      ...state,
      id: e.target.value,
    });
  

  };

  const startSearching = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  var displayResults;
  

 if (state.category == {} ){
      displayResults = <div></div>
  } else if (state.category == 'people' && isSubmitted== true) {
      displayResults = 
      <div>
      <h1>{data.name}</h1>
      <p>
        <span>Height:</span> {data.height}
      </p>
      <p>
        <span>Hair Color:</span> {data.hair_color}
      </p>
      <p>
        <span>Eye Color: </span>
        {data.eye_color}
      </p>
      <p>
        <span>Skin Color:</span> {data.skin_color}
      </p>
    </div>
  } else if (state.category =='planets' && isSubmitted== true) {
     
      displayResults = 
      <div>
      <h1>{data.name}</h1>
      <p>
        <span>Climate:</span> {data.climate}
      </p>
      <p>
        <span>Terrain:</span> {data.terrain}
      </p>
      <p>
        <span>Surface Water: </span>
        {data.surface_water}
      </p>
      <p>
        <span>Population:</span> {data.population}
      </p>
    </div>
  
  }
  var displayErrorText;
  if (errorText ==false){
    displayErrorText = <div></div>;
} else if (errorText == true && isSubmitted==true){
    displayErrorText = <div className='error'>Ooops, You might entered wrong name or id please make sure the name is people or planets, and the id is a number!</div>
    
};




  return (
    <div>
      <form>
        <div>
          <label>Search for:</label>
          <input onChange={onClickHandler} type="text" />
        </div>
        <div>
          <label>ID:</label>
          <input onChange={idHandler} type="text" />
        </div>
        <input
          className="search"
          onClick={startSearching}
          type="submit"
          value="Search"
        />
      </form>
      <div className="display">

       
      
       {displayResults}
       
       {displayErrorText}
       

      </div>
    </div>
  );
};
export default Input;
