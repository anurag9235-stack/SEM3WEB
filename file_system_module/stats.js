import fs from "fs";

fs.stat("notes.txt", (err, stats) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Information of [notes.txt]", stats);

    // File size
    console.log("Size of the file:", stats.size, "bytes");

    // Creation time
    console.log(
        "Creation time of the file:",
        stats.birthtime.toISOString().split("T")[0]
    );

    // Modification time
    console.log(
        "Modification time of the file:",
        stats.mtime.toISOString()
    );

    // Access time
    console.log(
        "Access time of the file:",
        stats.atime.toISOString()
    );

    // Change time
    console.log(
        "Change time of the file:",
        stats.ctime.toISOString()
    );
     
    //is this a file or directory
    console.log("Is this a file: ", stats.isFile()
    
    );

    //is this a directory
    console.log("Is this a directory: ", stats.isDirectory()
    
    );

});