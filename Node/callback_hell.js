function getUser(id, callback) {
    setTimeout(() => {
        console.log("id,name");

        const user = {
            id:101,
            name: "Anurag"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(userId, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        const profile = {
            userId: userId,
            username: "anurag123"
        };

        callback(null, profile);
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts fetched");

        const posts = [
            "JavaScript",
            "Node.js",
            "React"
        ];

        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {

    if (error) {
        console.error(error);
        return;
    }
    getProfile(user.id, function (error, profile) {

        if (error) {
            console.error(error);
            return;
        }
        getPosts(profile.username, function (error, posts) {

            if (error) {
                console.error(error);
                return;
            }

            console.log(`Posts fetched: ${posts}`);
        });
    });
});