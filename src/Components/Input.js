import React, { useEffect, useState } from "react";
import axios from "axios";

const Input = (props) => {
  const apiurl = "https://swapi.dev/api/";
  const { state, setState } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [errorText, setErrorText] = useState({});

  useEffect(() => {
    axios
      .get(apiurl + state.category + "/" + state.id + "/")

      .then((response) => {
        setData({ ...data, ...response.data });
      })
      // .then (response => console.log(response.data))

      .catch((reject) => console.log("error"));
  }, [isSubmitted]);
  console.log(data);

  const onClickHandler = (e) => {
    e.preventDefault();

    setState({
      ...state,
      category: e.target.value,
    });
  };

  const idHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      id: e.target.value,
    });
    console.log(state.id);
  };

  const startSearching = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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
        {state.category == "people" ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};
export default Input;
