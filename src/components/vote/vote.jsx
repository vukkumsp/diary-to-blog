import React, { useState } from 'react';
import DBService from '../../services/db/dbService';

function Vote({ postValue, voters, user }) {
    const [upVoters, setUpVoters] = useState(voters.upVoters);
    const [downVoters, setDownVoters] = useState(voters.downVoters);

    return (
        <div>
            {isUserVoted(voters.upVoters, user) ? (
                <span className="btn btn-primary disabled">
                    <i className="bi bi-arrow-up-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-primary" onClick={() => upVote(postValue, voters, user)}>
                    <i className="bi bi-arrow-up-circle"></i>
                </span>

            )}

            <span> {upVoters.length} </span>

            {isUserVoted(voters.downVoters, user) ? (
                <span className="btn btn-danger disabled">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-danger" onClick={() => downVote(postValue, voters, user)}>
                    <i className="bi bi-arrow-down-circle"></i>
                </span>

            )}

            <span> {voters.downVoters.length} </span>
        </div>
    );


    function isUserVoted(voters, user) {
        let result = voters.find(voter => voter.valueOf() === user.valueOf());
        return result;
    }

    function upVote(postValue, voters, user) {
        console.log("upVote", postValue);
        voters.upVoters = upVoters.concat(user);
        setUpVoters(voters.upVoters);
        voters.downVoters = downVoters.filter(votedUser =>
            votedUser !== user
        );
        setDownVoters(voters.downVoters);

        postValue.voters.upVoters = voters.upVoters;
        postValue.voters.downVoters = voters.downVoters;

        DBService.updatePost(postValue.id, postValue, console.log);
    }

    function downVote(postValue, voters, user) {
        console.log("downVote", postValue);
        voters.downVoters = downVoters.concat(user);
        setDownVoters(voters.downVoters);
        voters.upVoters = upVoters.filter(votedUser =>
            votedUser !== user
        );
        setUpVoters(voters.upVoters);

        postValue.voters.upVoters = voters.upVoters;
        postValue.voters.downVoters = voters.downVoters;

        DBService.updatePost(postValue.id, postValue, console.log);
    }
}

export default Vote;