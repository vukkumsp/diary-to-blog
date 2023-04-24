import React, { useState, useEffect } from 'react';

import Post from './../../components/post/post';
import DBService from '../../services/db/dbService';

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
    </div>
  );
}

export default Body;