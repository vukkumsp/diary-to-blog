import React from 'react';

import Vote from './../vote/vote';

const user = "asdfsdaf";

function Post({ value }) {
  // console.log(value);
  return (
    <div onClick={()=>console.log(value)}>
      <div className="card p-2 m-2 shadow-sm bg-white rounded">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h6 className="card-title">{value.title}</h6>
          </li>
          <li class="list-group-item">
            <p className="card-text">{value.content}</p>
          </li>
          <li class="list-group-item">
            <Vote voters={value.voters} user={user}></Vote>
          </li>
        </ul>

      </div>
    </div>
  );
}


export default Post;