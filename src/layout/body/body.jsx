import React from 'react';

import Post from './../components/post';

let posts=[
    {
        title: "Hello Diary",
        description: "How are you doing ?"
    },
    {
        title: "Hello Diary #2",
        description: "How are you doing ? again"
    }
];
let postsList=posts.map((item,index)=>{
    return <Post value={item}></Post>
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