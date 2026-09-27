function getUser(id, callback) {
    setTimeout(() => {
        const user = {
            id: id,
            name: "John"
        };

        callback(user);
    }, 1000);
}

getUser(1, (user) => {
    console.log("User Fetched:", user);
});