function isCastVote(age) {
    if (age >= 18) {
        console.log("You are eligible for a vote");
    } else {
        console.log("You are not eligible for a vote");
    }
}

isCastVote(16);