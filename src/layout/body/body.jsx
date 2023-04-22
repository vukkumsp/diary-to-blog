import React from 'react';

import Post from './../../components/post/post';

let posts=[
    {
        title: "Hello Diary",
        content: "How are you doing ?"
    },
    {
        title: "Hello Diary #2",
        content: "How are you doing ? again"
    }
];
let postsList=posts.map((item,index)=>{
    return <Post value={item}>index</Post>
  });

function Body() {
  return (
      <div>
          <ul>
              {postsList}
          </ul>
      </div>
  );
}


export default Body;