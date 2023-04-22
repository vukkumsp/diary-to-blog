import React from 'react';

function Post({value}) {
    console.log(value);
  return (
    <div>
      <div className="card p-2 m-2">
        <h6 className="card-title">{value.title}</h6>
        <p className="card-text">{value.content}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}


export default Post;