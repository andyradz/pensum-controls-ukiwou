import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoffeeDetails = () => {
  let params = useParams();
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const fetchData = async () => {
    fetch(`https://api.sampleapis.com/coffee/${params.type}/${params.id}`)
      //fetch(`https://api.sampleapis.com/coffee/hot/1`)
      .then(data => data.json())
      .then(data => {
        setData(data);
        setIngredients(data.ingredients);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <p>ingredients</p>
      {ingredients.map(item => (
        <p>{item}</p>
      ))}
    </>
  );
};
export default CoffeeDetails;
