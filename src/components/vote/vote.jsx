import React from 'react';
import { useState } from 'react';
import DBService from '../../services/db/dbService';

function Vote({ postValue, voters, user }) {
    // const voters = postValue.voters;
    // const user = postValue.user;
    const [upVoters, setUpVoters] = useState(voters.upVoters);
    const [downVoters, setDownVoters] = useState(voters.downVoters);
    // const [votersData, setVoters] = useState(voters); 
    //keeping the whole json as a state is not working

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
        // console.log(voters, user, result);
        return result;
    }

    function upVote(postValue, voters, user) {
        voters.upVoters = upVoters.concat(user);
        setUpVoters(voters.upVoters);
        voters.downVoters = downVoters.filter(votedUser =>
            votedUser !== user
        );
        setDownVoters(voters.downVoters);

        postValue.voters.upVoters = voters.upVoters;
        postValue.voters.downVoters = voters.downVoters;

        DBService.updatePost(postValue.id, postValue, console.log);

        // setVoters(voters);
        // console.log("upVote for " + user, voters);
    }

    function downVote(postValue, voters, user) {
        voters.downVoters = downVoters.concat(user);
        setDownVoters(voters.downVoters);
        voters.upVoters = upVoters.filter(votedUser =>
            votedUser !== user
        );
        setUpVoters(voters.upVoters);

        postValue.voters.upVoters = voters.upVoters;
        postValue.voters.downVoters = voters.downVoters;

        DBService.updatePost(postValue.id, postValue, console.log);

        // setVoters(voters);
        // console.log("downVote for " + user, voters);
    }
}

export default Vote;