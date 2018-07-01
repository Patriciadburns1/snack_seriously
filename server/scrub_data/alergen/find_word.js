//to run: node find_word.js (inFilename, targetFile, searchword)
//gives you a list of the ingredient words found

var fs = require('fs');

console.log(`parsing file: `, process.argv[2]);
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(`something is wrong, maybe file does not exist!`);
    }
    let fileData;
    let wordcount = 0;
    let outlog = [];
    let regex = new RegExp(process.argv[4],"gi");
    fileData = JSON.parse(data);
    for (let index = 0; index < fileData.length; index++) {
        if(regex.test(fileData[index][0])){
            wordcount++;
            outlog.push(fileData[index]);
        }
    }

    fs.writeFile(process.argv[3], JSON.stringify(outlog), function (err) {
        if (err) throw err;
        console.log(`Saved file ${process.argv[3]}`);
        console.log('Total words:', wordcount);
        console.log('checked ingredient: ', process.argv[4]);
    });

});


