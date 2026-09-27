import fs from "fs";

// 1. Create the directory
fs.mkdir("./myfolder1", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Directory created successfully");

    // 2. Create a file inside the directory
    fs.writeFile("./myfolder1/script.js", "Hello", (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File created successfully");

        // 3. Read the directory
        fs.readdir("./myfolder1", (err, files) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Files:", files);
        });
    });
});