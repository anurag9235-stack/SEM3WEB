import fs from 'fs';

function sizeChecker(fileName) {

    const stats = fs.statSync(fileName);

    const limit = 2 * 1024 * 1024; // 2 MB

    // Check the file size
    if (stats.size > limit) {
        console.log("File should be less than 2 MB");
    } else {
        console.log("File has been submitted successfully");
    }
}

sizeChecker("content.txt");  