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
    var sortedNutrients = {};

    for (let index = 0; index < fileData.length; index++) {

        let nutrientList = fileData[index].nutrients;
        
        for (var nutr_Index = 0; nutr_Index< nutrientList.length; nutr_Index++){
            //console.log(nutrientList[nutr_Index].name)
            key = nutrientList[nutr_Index].name;
            if (!sortedNutrients[key]){
                sortedNutrients[key] = true;
                wordcount++
            }
        }
    }

    console.log(sortedNutrients);

    // fs.writeFile(process.argv[3], JSON.stringify(outlog), function (err) {
    //     if (err) throw err;
    //     console.log(`Saved file ${process.argv[3]}`);
    //     console.log('wordcount', wordcount);
    // });

});


