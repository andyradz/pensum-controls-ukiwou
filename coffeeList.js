import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CoffeeList = props => {
  let params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(params);
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://api.sampleapis.com/coffee/${params.type}`
        );
        setData(result.data);
      } catch (error) {
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
      }
    };

    fetchData();
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
