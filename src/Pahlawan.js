import React, { useState, useEffect } from "react";
import axios from "axios";

const Pahlawan = () => {
  const [data, listState] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/heroes/get";

    axios.get(url).then((res) => {
    
      listState(res.data.data);
    });
  }, []);
  const showData = data.map((item,index) => 
  <ul key={index}>
    <li>{item.fullname}</li>
    <li>{item.born}</li>
    <li>{item.dead}</li>
    <li>{item.description}</li> 
    <li>{item.establishment}</li>
  </ul>
  );
  return <div>{showData}</div>;
};

export default Pahlawan;
