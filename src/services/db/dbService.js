const DBService = {


    getData: function(callback) {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch("http://localhost:5000/data", requestOptions)
        .then((response) => response.json())
        .then((result) => callback(result))
        .catch((error) => console.log("error", error))
    },

    updatePost: function(postId, postBody, callback) {
        const requestOptions = {
            method: "PUT",
            body: postBody,
            redirect: "follow"
        };
        fetch("http://localhost:5000/data/"+postId, requestOptions)
        .then((response) => response.json())
        .then((result) => callback(result))
        .catch((error) => console.log("error", error))
    }
};

export default DBService;