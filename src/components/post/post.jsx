import React from 'react';

function Post({value}) {
    console.log(value);
  return (
    <div>
      <div className="card p-2 m-2">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.content}</p>
      </div>
    </div>
  );
}


export default Post;