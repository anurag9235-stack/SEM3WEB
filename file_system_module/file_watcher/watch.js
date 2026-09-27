import fs from "fs";

fs.watch("notes.txt", (eventType, filename) => {

    console.log("Event:", eventType);
    console.log("File:", filename);

});