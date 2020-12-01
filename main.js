console.log(process.env.BUILD_NUMBER);   

let fs = require('fs'),
    path = require("path"),
    util = require("util");

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 
// function fileHandler(){

//     fs.open('./test1/testFile.js', 'w', (err) => {
//         if(err) throw err;
//         console.log('File created');
//     });
    
// }
// fileHandler();

// function fileHandler2(){

//     fs.appendFile('testFile.js', ' This line is beyond the end. \n', (err) => {
//         if(err) throw err;
//         console.log('Data has been added!1');
//     });

// }
// fileHandler2();


// let qwe = path.join(__dirname, "helpers", "../../../jobs/analytics/builds/"+process.env.BUILD_NUMBER+"/log");
// data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
//       if (err) {
//         throw err;
//       }
// });

let qwe = path.join(__dirname, "helpers", "../../consoleText1.txt");
data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
      if (err) {
        throw err;
      }
});
  
  console.log("_______________________________ 2 ");
  // console.log(data);

   // let text ="{"+ data.split("}'==")[0].split("=='{")[1] +"}" ;

     let text ="{"+ data.split("] }\n ")[0].split("│ {")[1] +" ] }" ;
     // console.log(text);
               // sleep(5000);

     // console.log(text);
  
  console.log("_______________________________ 2.0 ");

  function replaceAll(str, find1, replace1) {
      return str.replace(new RegExp(find1, 'g'), replace1);
                     // sleep(5000);
    }

     text = replaceAll(text,'│',"");
                    // sleep(5000);

     text = replaceAll(text,"'",'"');
               // sleep(5000);
     text = replaceAll(text,'n\n   d',"nd");
               // sleep(5000);
     text = replaceAll(text,'\n   ',"");
               // sleep(5000);
     text = replaceAll(text,' ',"");
               // sleep(5000);
     text = replaceAll(text,' ',"");
      // text = replaceAll(text,'{URL:',"\n{URL:");
     // text = replaceAll(text,'},,'," ");


     // console.log(JSON.stringify(text));
     // console.log(text);
  console.log("_______________________________ 2.01 ");
   // console.log(text);
  console.log("_______________________________ 2.02 ");
      
      // sleep(5000);
      //  text = eval('(' + text + ')');
      // sleep(5000);

     // text = eval(text);
      // dataAll = JSON.stringify(text);
           
         // sleep(2000);

      dataAll = text;
         // sleep(2000);

     // console.log(text);

  console.log("_______________________________ 2.03 ");
      // console.log(JSON.stringify(text));
      
     console.log("_______________________________ 2.1 ");

      // console.log(data1);


      var text2 ="{"+ data.split("] }\n ")[1].split("│ {")[1] +" ] }";        
  // console.log(text2);
      // console.log(data.split("} ] }")[1]);
      // console.log(data.split("│ {")[2]);
      // console.log(data.split("} ] }")[1].split("│ {")[2])
      // console.log(text2);

     console.log("_______________________________ 2.2 ");



    // let param1 =  "} ] }";
    // let param2 = "│ {";
    // var text2 ="{"+ text2.split(param1)[1].split(param2)[0] +"} ] }";

    text2 = replaceAll(text2,'│',"");
      text2 = replaceAll(text2,"'",'"');
      text2 = replaceAll(text2,'n\n   d',"nd")    
      text2 = replaceAll(text2,'\n   ',"");
      text2 = replaceAll(text2,' ',"");

      text2 = eval('(' + text2 + ')');
      // data404 = JSON.stringify(text2);
      data404 = text2

      // console.log(text2);
         // sleep(2000);



     console.log("_______________________________ 2.3 ");


       var text3 ="{"+ data.split("] }\n ")[2].split("│ {")[1] +" ] }" ;        
      // console.log(text3);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
      // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text3 = replaceAll(text3,'│',"");
      text3 = replaceAll(text3,"'",'"');
      text3 = replaceAll(text3,'n\n   d',"nd")    
      text3 = replaceAll(text3,'\n   ',"");
      text3 = replaceAll(text3,' ',"");

       text3 = eval('(' + text3 + ')');
      // data500 = JSON.stringify(text3);
      data500 = text3
         // sleep(2000);

      // console.log(text3);

     console.log("_______________________________ 2.4 ");


       var text4 ="{"+ data.split("] }\n ")[3].split("│ {")[1] +" ] }" ;        
      // console.log(text4);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text4 = replaceAll(text4,'│',"");
      text4 = replaceAll(text4,"'",'"');
      text4 = replaceAll(text4,'n\n   d',"nd")    
      text4 = replaceAll(text4,'\n   ',"");
      text4 = replaceAll(text4,' ',"");

       text4 = eval('(' + text4 + ')');
      // data403 = JSON.stringify(text4);
      data403 = text4
      // console.log(data403.dataMethod[0].count);



     console.log("_______________________________ 2.5 ");


       var text5 ="{"+ data.split("] }\n ")[4].split("│ {")[1] +" ] }" ;        
      // console.log(text5);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text5 = replaceAll(text5,'│',"");
      text5 = replaceAll(text5,"'",'"');
      text5 = replaceAll(text5,'n\n   d',"nd")    
      text5 = replaceAll(text5,'\n   ',"");
      text5 = replaceAll(text5,' ',"");

       text5 = eval('(' + text5 + ')');
      // data403 = JSON.stringify(text4);
      dataDuration1 = text5
      // console.log(data403.dataMethod[0].count);
      
      
     console.log("_______________________________ 2.6 ");


       var text6 ="{"+ data.split("] }\n ")[5].split("│ {")[1] +" ] }" ;        
      // console.log(text6);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text6 = replaceAll(text6,'│',"");
      text6 = replaceAll(text6,"'",'"');
      text6 = replaceAll(text6,'n\n   d',"nd")    
      text6 = replaceAll(text6,'\n   ',"");
      text6 = replaceAll(text6,' ',"");

       text6 = eval('(' + text6 + ')');
      // data403 = JSON.stringify(text4);
      dataDuration2 = text6
      // console.log(data403.dataMethod[0].count);


     console.log("_______________________________ 2.7 ");


       var text7 ="{"+ data.split("] }\n ")[6].split("│ {")[1] +" ] }" ;        
      // console.log(text7);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text7 = replaceAll(text7,'│',"");
      text7 = replaceAll(text7,"'",'"');
      text7 = replaceAll(text7,'n\n   d',"nd")    
      text7 = replaceAll(text7,'\n   ',"");
      text7 = replaceAll(text7,' ',"");

       text7 = eval('(' + text7 + ')');
      // data403 = JSON.stringify(text4);
      dataDuration3 = text7
      // console.log(data403.dataMethod[0].count);
      
      
      
      console.log("_______________________________ 2.8 ");


       var text8 ="{"+ data.split("] }\n ")[7].split("│ {")[1] +" ] }" ;        
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text8 = replaceAll(text8,'│',"");
      text8 = replaceAll(text8,"'",'"');
      text8 = replaceAll(text8,'n\n   d',"nd")    
      text8 = replaceAll(text8,'\n   ',"");
      text8 = replaceAll(text8,' ',"");

       text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      dataDuration4 = text8
      // console.log(data403.dataMethod[0].count);


         // sleep(2000);

console.log("_______________________________ 3 ");

     // console.log(data1);


console.log("_______________________________ 1 ");
     // console.log(data2);

//  qwe = path.join(__dirname, "helpers", "../JSONvar.js");
// data123 = fs.readFileSync( qwe, 'utf8', function (err, data) {   
//       if (err) {
//         throw err;
//       }
// });
// console.log("_______________________________ 11111111 ");

//   console.log(data123);

function fileHandler4(){

      fs.truncate("./JSONvar.js", 0, function() {
        // fs.writeFile("./JSONvar.js", "let "+varName+" = "  + data +";\n", function (err) {
        //     if (err) {
        //         return console.log("Error writing file: " + err);
        //     }
        //     console.log('Data has been added!2');
        // });
    });
}
fileHandler4();
//  qwe = path.join(__dirname, "helpers", "../JSONvar.js");
// data223 = fs.readFileSync( qwe, 'utf8', function (err, data) {   
//       if (err) {
//         throw err;
//       }
// });
// console.log("_______________________________ 222222222 ");

//   console.log(data223);

function fileHandler3(varName,data){
    fs.appendFile('./JSONvar.js', "let "+varName+" = " + JSON.stringify(data, null, '\t') +";\n", (err) => {
        if(err) throw err;
        console.log('Data has been added! '+varName);
                 // sleep(5000);
    });
}

// setTimeout(fileHandler3("myArray500",data500), 3000);
// setTimeout(fileHandler3("myArray404",data404), 3000);
// setTimeout(fileHandler3("myArray403",data403), 3000);
// setTimeout(fileHandler3("myArrayAll",dataAll), 3000);

let emptyTable = {"dataMethod": [
                      {
                        "URL": "No data",
                        "data_id": {
                          "No data": [
                            "No data",
                            "No data"
                          ]
                        },
                        "user_id": {
                          "2437": "No data"
                        },
                        "duration": "No data",
                        "count": 1,
                        "totalDuration": "No data",
                        "totalUser": 1,
                        "maxDuration": "No data"
                      }
                    ],
                    "dataURL": [
                    {
                       "URL": "No data",
                        "data_id": [
                          [
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data",
                            "No data"
                          ]
                        ],
                        "user_id": [
                          [
                            "No data",
                            "No data"
                          ]
                        ],
                        "duration": "No data",
                        "count": "No data",
                        "totalDuration": "No data",
                        "totalUser": "No data",
                        "maxDuration": "No data"
                      }
                    ]
                  };



if (!data500.dataMethod.length){
  fileHandler3("myArray500",emptyTable);
}
else{fileHandler3("myArray500",data500);}

if (!data404.dataMethod.length){
  fileHandler3("myArray404",emptyTable);
}
else{fileHandler3("myArray404",data404);}

if (!data403.dataMethod.length){
  fileHandler3("myArray403",emptyTable);
}
else{fileHandler3("myArray403",data403);}

    if (!dataDuration1.dataMethod.length){
      fileHandler3("myArrayDuration_1",emptyTable);
    }
    else{fileHandler3("myArrayDuration_1",dataDuration1);} 

    if (!dataDuration2.dataMethod.length){
      fileHandler3("myArrayDuration_2",emptyTable);
    }
    else{fileHandler3("myArrayDuration_2",dataDuration2);}

    if (!dataDuration3.dataMethod.length){
      fileHandler3("myArrayDuration_3",emptyTable);
    }
    else{fileHandler3("myArrayDuration_3",dataDuration3);}

    if (!dataDuration4.dataMethod.length){
      fileHandler3("myArrayDuration_4",emptyTable);
    }
    else{fileHandler3("myArrayDuration_4",dataDuration4);}

// fileHandler3("myArrayAll",dataAll);

// rfileHandler3("myArray500",data2);


// var fs = require("fs"),
//     path = require("path"),
//     util = require("util");
// var content;
// console.log("========== 1 "+content);
// content = fs.readFileSync(path.join(__dirname, "helpers", "../../../consoleText.txt"), 'utf8', function (err, data) {
//     if (err) {
//         console.log(err);
//         process.exit(1);
//     }
//    // content = util.format(data, "test", "test", "test");
//     //console.log(content);
// });
// // content = 
// console.log("========== 2 "+content);










