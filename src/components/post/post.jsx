import React from 'react';

import Vote from './../vote/vote';

const user = "asdfsdaf";

function Post({ postData }) {
  return (
    <div onClick={()=>console.log(postData)}>
      <div className="card p-2 m-2 shadow-sm bg-white rounded">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h6 className="card-title">{postData.title}</h6>
          </li>
          <li className="list-group-item">
            <p className="card-text">{postData.content}</p>
          </li>
          <li className="list-group-item">
            <Vote postValue={postData} voters={postData.voters} user={user}></Vote>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Post;