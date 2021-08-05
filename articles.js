import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './article.css';

export default function ArticleList() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=skoda&&hitsPerPage=1000'
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
  }, []);

  const compareBookTitle = (a, b) => {
    if (a !== undefined || b !== undefined) return;
    return a.title.localeCompare(b.title);

    /* Expected Returns:

  0:  exact match
  -1:  string_a < string_b
  1:  string_a > string_b
 */
    return a - b;
  };

  return (
    <div>
      <h1>Cześć!</h1>
      {data.hits && (
        <>
          <h2>Masz nieprzeczytanych wiadomości {data.hits.length} </h2>
          {data.hits
            .filter(item =>
              ' ' !== String.prototype.trim(item.title) ? item.title : ' '
            )
            .sort(compareBookTitle)
            .map((item, idx) => {
              return (
                <li key={item.objectID}>
                  <a href={item.url}>
                    {/* {idx + 1} + " " +{item.created_at} */}[{idx + 1}]&nbsp;
                    {item.title}
                  </a>
                </li>
              );
            })}
        </>
      )}
    </div>
  );
}
