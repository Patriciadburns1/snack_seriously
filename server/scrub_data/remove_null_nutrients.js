//to run: node remove_null_nutrients.js (inFilename, targetFile, removedFile)
//removes null nutrient list from the record puts it in removedFile
//also converts all nutrient list to ALLCAPS

var fs = require('fs');

console.log(`parsing file: `, process.argv[2]);
const fileName = process.argv[2];
let fileData;

let wordcount = 0;
let removelog = [];
let outlog = [];

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(`something is wrong, maybe file does not exist!`);
    }
    fileData = JSON.parse(data);
    for (let index = 0; index < fileData.length; index++) {

        let keyName = fileData[index].ingredients;
        if (keyName){
            keyName = keyName.toUpperCase();
            outlog.push(fileData[index]);
        }
        else {
            wordcount++;
            removelog.push(fileData[index]);
            };
    }

    fs.writeFile(process.argv[3], JSON.stringify(outlog), function (err) {
        if (err) throw err;
        console.log(`Saved file ${process.argv[3]}`);
        console.log(`Found ${wordcount} many null nutrients and removed them`);
    });

    fs.writeFile(process.argv[4], JSON.stringify(removelog), function (err) {
        if (err) throw err;
        console.log(`Saved file ${process.argv[4]}`);
    });
});


