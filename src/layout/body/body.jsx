import React from 'react';

import Post from './../../components/post/post';

import DATA from './../../assets/data/DATA';

let posts = DATA();
let postsList=posts.map((item,index)=>{
    return <Post value={item}>index</Post>
  });

function Body() {
  return (
      <div>
        {postsList}
      </div>
  );
}


export default Body;