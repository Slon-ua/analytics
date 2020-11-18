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


let qwe = path.join(__dirname, "helpers", "../../../jobs/Analytics/builds/"+process.env.BUILD_NUMBER+"/log");
data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
      if (err) {
        throw err;
      }
});
	
	console.log("_______________________________ 2  ");
	// console.log(data1);


	 let text ="{"+ data.split("} ] }")[0].split("│ {")[1] +"} ] }" ;

	function replaceAll(str, find1, replace1) {
    	return str.replace(new RegExp(find1, 'g'), replace1);
    }

     text = replaceAll(text,'│',"");
     text 	= replaceAll(text,"'",'"');
     text = replaceAll(text,'n\n   d',"nd");
     text = replaceAll(text,'\n   ',"");
     text = replaceAll(text,' ',"");

     text = eval('(' + text + ')');
     data1 = JSON.stringify(text);

   //    var text2 ="{"+ data.split("}'1==")[1].split("==1'{")[0] +"}" ;        

	  // let param1 =  "│ {";
	  // let param2 = "} }";
	  // var text2 ="{"+ text2.split(param1)[1].split(param2)[0] +"}}";

	  // text2 = replaceAll(text2,'│',"");
   //    text2 = replaceAll(text2,"'",'"');
   //    text2 = replaceAll(text2,'n\n   d',"nd")    
   //    text2 = replaceAll(text2,'\n   ',"");
   //    text2 = replaceAll(text2,' ',"");

   //    text2 = eval('(' + text2 + ')');
   //    data2 = JSON.stringify(text2);

console.log("_______________________________ 3 ");

     console.log(data1);


console.log("_______________________________ 1 ");
     // console.log(data2);





function fileHandler3(data){


    fs.truncate("./JSONvar.js", 0, function() {
        fs.writeFile("./JSONvar.js", "var myArray404 = " + data +";\n", function (err) {
            if (err) {
                return console.log("Error writing file: " + err);
            }
            console.log('Data has been added!2');
        });
    });
    // fs.appendFile('./JSONvar.js', "var myArray1 = {" + data +"};\n", (err) => {
    //     if(err) throw err;
    //     console.log('Data has been added!2');
    // });
}
fileHandler3(data1);
// fileHandler3(data2);


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










