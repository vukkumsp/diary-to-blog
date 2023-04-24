import React, { useState, useEffect } from 'react';

import Post from './../../components/post/post';
import DBService from '../../services/db/dbService';
import AddPostButton from '../../components/add-post-button/add-post-button';

import './body.css';

function Body() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    DBService.getData(setPosts);
  }, []);

  let postsList = posts.map((item, index) => {
    return <Post postData={item}></Post>
  });

  return (
    <div>
      {postsList}
      <div className="AddButton">
        <AddPostButton></AddPostButton>
      </div>
    </div>
  );
}

export default Body;