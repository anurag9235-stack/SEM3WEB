import fs from 'fs'

fs.watchFile("notes.txt", (prev, curr) => {

    console.log("Previous size:", prev.size)
    console.log("Current size:", curr.size)

})