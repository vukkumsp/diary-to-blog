
import React from 'react';

export default function Header() {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
        .then((response) => response.json())
        .then((result) => setPosts(result))
        .catch((error) => console.log("error", error));
};