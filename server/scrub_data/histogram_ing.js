//to run: node histogram_ing.js (inFilename, targetFile)
//gives you a histogram of the ingredient words

var fs = require('fs');

console.log(`parsing file: `, process.argv[2]);
const fileName = process.argv[2];
let fileData;

let wordcount = 0;
let sortObj = {};
let outlog = [];

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(`something is wrong, maybe file does not exist!`);
    }
    fileData = JSON.parse(data);
    for (let index = 0; index < fileData.length; index++) {

        let keyName = fileData[index].ingredients;

        //let regexp = keyName.replace(/[\[\(]/gi,`, `);
        //regexp = regexp.replace(/[\[\]\*\).]/gi,``);
        //const splitArr = regexp.split(",");
        const splitArr = keyName.split(",");
        for (let words =0; words < splitArr.length; words++){
            splitArr[words] = splitArr[words].trim();

            if (sortObj[splitArr[words]] === undefined){
                sortObj[splitArr[words]] =1;
                wordcount++;
            } else {
                sortObj[splitArr[words]] = sortObj[splitArr[words]] +1;
                wordcount++;
            }
        }
    }


    for (let keyName in sortObj){
        outlog.push([keyName, sortObj[keyName]]);
    }
    outlog.sort(function(a,b){
        return b[1] - a[1];
    });

    fs.writeFile(process.argv[3], JSON.stringify(outlog), function (err) {
        if (err) throw err;
        console.log(`Saved file ${process.argv[3]}`);
        console.log('Total words:', wordcount);
        console.log('different ingredients: ', outlog.length);
    });

});


