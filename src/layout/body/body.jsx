import React from 'react';
import { useState, useEffect } from "react";

import Post from './../../components/post/post';

import DBService from '../../services/db/dbService';

// import DATA from './../../assets/data/DATA';

// let posts = DATA();

function Body() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getData();
    DBService.getData(setPosts);
  }, []);

  let postsList = posts.map((item, index) => {
    return <Post value={item}></Post>
  });

  return (
    <div>
      {postsList}
    </div>
  );
}


export default Body;