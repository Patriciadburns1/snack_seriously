var axios = require('axios');
var fs = require('fs');

//change according to store.
var jsonData = require('../upcCodes/wholefoodsUPC.json');
var emptyCounter = 0;
var totalItems = 0;

var credentials = require('../config/imdataCred.json');

async function callServer(){

    for(var i=5; i<10 ;i++){
        let success = true;
        let upcNum = jsonData[i].sku;
        let upcStr = upcNum.toString();

        try{
            var resp = await axios.get('https://www.iamdata.co/v1/products',{
                params: {
                    client_id: credentials.client_id,
                    client_secret: credentials.client_secret,
                    product_identifier: upcStr
                }
            });
        }

        catch(error){
            emptyCounter++;
            success = false;
        }

        if(success){

            let jsonString = JSON.stringify(resp.data.result);
            let cleanedStr = jsonString.substring(1,jsonString.length-1)+',';
            fs.appendFile('../imdataWrite/testCreds.json', cleanedStr , function (err) {
                if (err) throw err;
            });
            totalItems++;
        }

        //track where i am in the list.
        if(i%25 === 0){
            console.log('current index',i);
        }
    }
    console.log("full list length: ",jsonData.length);
    console.log("emptyCounter: ",emptyCounter);
    console.log("totalItems: ",totalItems);
}

//REMEMBER TO CHANGE FILE NAME.
callServer();
