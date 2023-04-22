import React from 'react';
import { useState } from 'react';

function Vote({ voters, user }) {
    const [upVoters, setUpVoters] = useState(voters.upVoters);
    const [downVoters, setDownVoters] = useState(voters.downVoters);
    const [votersData, setVoters] = useState(voters);

    return (
        <div>
            {isUserVoted(voters.upVoters, user) ? (
                <span className="btn btn-primary disabled">
                    <i className="bi bi-arrow-up-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-primary" onClick={() => upVote(voters, user)}>
                    <i className="bi bi-arrow-up-circle"></i>
                </span>

            )}

            <span> {upVoters.length} </span>

            {isUserVoted(voters.downVoters, user) ? (
                <span className="btn btn-danger disabled">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </span>

            ) : (
                <span className="btn btn-danger" onClick={() => downVote(voters, user)}>
                    <i className="bi bi-arrow-down-circle"></i>
                </span>

            )}

            <span> {voters.downVoters.length} </span>
        </div>
    );


    function isUserVoted(voters, user) {
        let result = voters.find(voter => voter.valueOf() === user.valueOf());
        console.log(voters, user, result);
        return result;
    }

    function removeVote(selectedVoters, user) {
        const index = selectedVoters.indexOf(user);
        if (index > -1) { // only splice array when item is found
            selectedVoters.splice(index, 1); // 2nd parameter means remove one item only
        }

        selectedVoters.filter(votedUser =>
            votedUser !== user
        )
    }

    function upVote(voters, user) {
        voters.upVoters = upVoters.concat(user);
        setUpVoters(voters.upVoters);
        
        voters.downVoters = downVoters.filter(votedUser =>
            votedUser !== user
        );
        // removeVote(voters.downVoters, user);
        setDownVoters(voters.downVoters);
        setVoters(voters);
        console.log("upVote for " + user, voters);
    }

    function downVote(voters, user) {
        // voters.downVoters.push(user);
        voters.downVoters = downVoters.concat(user);
        setDownVoters(voters.downVoters);
        // voters.downVoters = votersData.downVoters.concat(user);
        
        // removeVote(voters.upVoters, user);
        voters.upVoters = upVoters.filter(votedUser =>
            votedUser !== user
        );
        setUpVoters(voters.upVoters);

        setVoters(voters);
        console.log("downVote for " + user, voters);
    }
}

export default Vote;