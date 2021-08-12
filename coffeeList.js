import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CoffeeList = () => {
  let params = useParams();
  const [data, setData] = useState([]);

  const fetchData = () => {
    //fetch(`https://api.sampleapis.com/coffee/hot`)
    fetch(`https://api.sampleapis.com/coffee/${params.type}`)
      .then(data => data.json())
      .then(data => {
        console.log(params);
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(params);
  }, [params.type]);

  return (
    <>
      {data.map(item => (
        <p key={item.id}>
          <Link to={`/coffee/${params.type}/${item.id}`}>
            {item.id} {item.title}
          </Link>
        </p>
      ))}
    </>
  );
};

export default CoffeeList;
