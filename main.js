console.log(process.env.BUILD_NUMBER);   

let fs = require('fs'),
    path = require("path"),
    util = require("util");

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

     let text ="{"+ data.split("} ] }")[0].split("│ {")[1] +"} ] }" ;
     // console.log(text);

  
  console.log("_______________________________ 2.0 ");

  function replaceAll(str, find1, replace1) {
      return str.replace(new RegExp(find1, 'g'), replace1);
    }

     text = replaceAll(text,'│',"");
     text = replaceAll(text,"'",'"');
     text = replaceAll(text,'n\n   d',"nd");
     text = replaceAll(text,'\n   ',"");
     text = replaceAll(text,' ',"");
     text = replaceAll(text,' ',"");
      text = replaceAll(text,'{URL:',"\n{URL:");
     // text = replaceAll(text,'},,'," ");


     // console.log(JSON.stringify(text));
     // console.log(text);
  console.log("_______________________________ 2.01 ");
   // console.log(text);
  console.log("_______________________________ 2.02 ");

       text = eval('(' + text + ')');
     // text = eval(text);
     // dataAll = JSON.stringify(text);
      dataAll = text;

     // console.log(text);

  console.log("_______________________________ 2.03 ");
      // console.log(JSON.stringify(text));
      
     console.log("_______________________________ 2.1 ");

      // console.log(data1);


      var text2 ="{"+ data.split("} ] }")[1].split("│ {")[1] +"} ] }";        
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



     console.log("_______________________________ 2.3 ");


       var text3 ="{"+ data.split("} ] }")[2].split("│ {")[1] +"} ] }" ;        
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

      // text3 = eval('(' + text3 + ')');
      // data500 = JSON.stringify(text3);
      data500 = text3

      // console.log(text3);

     console.log("_______________________________ 2.4 ");


       var text4 ="{"+ data.split("} ] }")[2].split("│ {")[1] +"} ] }" ;        
      // console.log(text3);
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

      // text4 = eval('(' + text4 + ')');
      // data403 = JSON.stringify(text4);
      data403 = text4
      // console.log(data403);



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
        console.log('Data has been added!2');
    });
}

fileHandler3("myArrayAll",dataAll);
fileHandler3("myArray500",data500);
fileHandler3("myArray404",data404);
fileHandler3("myArray403",data403);
// fileHandler3("myArray500",data2);


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










