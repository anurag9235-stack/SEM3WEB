const fs = require("fs");

// 1. Create / write the file
fs.writeFile("notes.txt", "FS module started", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File written successfully");

    // 2. Read the file
    fs.readFile("notes.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File data:", data);

        // 3. Append to the file
        fs.appendFile("notes.txt", "\nThis data is appended at the end", (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Data appended successfully");

            // 4. Delete the file asynchronously
            fs.rm("notes.txt", (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("File deleted successfully");
            });
        });
    });
});