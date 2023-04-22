import React from 'react';

function Vote({ voters, user }) {
    return (
        <div>
            {isUserVoted(voters.upVoters, user) ? (
                <span className="btn btn-primary disabled">
                    <i className="bi bi-arrow-up-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-primary">
                    <i className="bi bi-arrow-up-circle"></i>
                </span>

            )}

            <span> {voters.upVoters.length} </span>
 
            {isUserVoted(voters.downVoters, user) ? (
                <span className="btn btn-danger disabled">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-danger">
                    <i className="bi bi-arrow-down-circle"></i>
                </span>

            )}

            <span> {voters.downVoters.length} </span>
        </div>
    );
}


function isUserVoted(voters, user) {
    let result = voters.find(voter => voter.valueOf() === user.valueOf());
    console.log(voters, user, result);
    return result;
}

function upVote() {
    
}

function downVote() {

}


export default Vote;