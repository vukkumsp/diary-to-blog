import React from 'react';
import { useState, useEffect } from "react";

import Post from './../../components/post/post';

import DATA from './../../assets/data/DATA';

// let posts = DATA();

function Body() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:5000/data", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  let postsList = posts.map((item, index) => {
    return <Post value={item}>index</Post>
  });

  return (
    <div>
      {postsList}
    </div>
  );
}


export default Body;