import React from 'react';

function Post({value}) {
    console.log(value);
  return (
    <div>
        <h3>{value.title}</h3>
        <p>{value.content}</p>
    </div>
  );
}


export default Post;