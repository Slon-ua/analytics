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


let qwe = path.join(__dirname, "helpers", "../../../jobs/Analytics/builds/"+process.env.BUILD_NUMBER+"/log");
data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
      if (err) {
        throw err;
      }
});

// let qwe = path.join(__dirname, "helpers", "../../consoleText2.txt");
// data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
//       if (err) {
//         throw err;
//       }
// });

// let qwe = path.join(__dirname, "helpers", "../consoleText1.txt");
// data = fs.readFileSync( qwe, 'utf8', function (err, data) {   
//       if (err) {
//         throw err;
//       }
// });

  
  console.log("_______________________________ 2 ");
  // console.log(data);

   // let text ="{"+ data.split("}'==")[0].split("=='{")[1] +"}" ;

     // let text ="{"+ data.split("] }\n ")[0].split("│ {")[1] +" ] }" ;

     let text ="{\""+ data.split("\\n}")[0].split("{\\n \"")[1] +"}" ;

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


      // var text2 ="{"+ data.split("] }\n ")[1].split("│ {")[1] +" ] }";   

      var text2 ="{\""+ data.split("\\n}")[1].split("{\\n \"")[1] +"}" ;      
  
  // console.log(text2);
      // console.log(data.split("} ] }")[1]);
      // console.log(data.split("│ {")[2]);
      // console.log(data.split("} ] }")[1].split("│ {")[2])
      // console.log(text2);

     console.log("_______________________________ 2.2 ");


    text2 = replaceAll(text2,'\\\\n   ',"");
      text2 = replaceAll(text2,'\\\\n','');
      text2 = replaceAll(text2,'\\\\','');
      text2 = replaceAll(text2,'│ n','');

    // let param1 =  "} ] }";
    // let param2 = "│ {";
    // var text2 ="{"+ text2.split(param1)[1].split(param2)[0] +"} ] }";

    text2 = replaceAll(text2,'│',"");
      // text2 = replaceAll(text2,"'",'"');
      text2 = replaceAll(text2,'n\n   d',"nd")    
      text2 = replaceAll(text2,'\n   ',"");
      text2 = replaceAll(text2,'\n',"");
      text2 = replaceAll(text2,' ',"");
      text2 = replaceAll(text2,'//',"/");
      // text2 = replaceAll(text2,'\\("',"\\('");
      // text2 = replaceAll(text2,'"\\)',"'\\)");

      text2 = eval('(' + text2 + ')');
      // data404 = JSON.stringify(text2);
      data404 = text2

      // console.log(text2);
         // sleep(2000);



     console.log("_______________________________ 2.3 ");


       // var text3 ="{"+ data.split("] }\n ")[2].split("│ {")[1] +" ] }" ;

       var text3 ="{\""+ data.split("\\n}")[2].split("{\\n \"")[1] +"}" ;

      // console.log(text3);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
      // console.log(data.split("} ] }")[2].split("│ {")[1])

    text3 = replaceAll(text3,'\\\\n   ',"");
      text3 = replaceAll(text3,'\\\\n','');
      text3 = replaceAll(text3,'\\\\','');
      text3 = replaceAll(text3,'│ n','');

    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text3 = replaceAll(text3,'│',"");
      // text3 = replaceAll(text3,"'",'"');
      text3 = replaceAll(text3,'n\n   d',"nd")    
      text3 = replaceAll(text3,'\n   ',"");
      text3 = replaceAll(text3,'\n',"");
      text3 = replaceAll(text3,' ',"");
      text3 = replaceAll(text3,'//',"/");
      // text3 = replaceAll(text3,'\\("',"\\('");
      // text3 = replaceAll(text3,'"\\)',"'\\)");


       text3 = eval('(' + text3 + ')');
      // data500 = JSON.stringify(text3);
      data500 = text3
         // sleep(2000);

      // console.log(text3);

     console.log("_______________________________ 2.4 ");


       // var text4 ="{"+ data.split("] }\n ")[3].split("│ {")[1] +" ] }" ;  

       var text4 ="{\""+ data.split("\\n}")[3].split("{\\n \"")[1] +"}" ;

      // console.log(text4);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])

    text4 = replaceAll(text4,'\\\\n   ',"");
      text4 = replaceAll(text4,'\\\\n','');
      text4 = replaceAll(text4,'\\\\','');
      text4 = replaceAll(text4,'│ n','');

    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text4 = replaceAll(text4,'│',"");
      // text4 = replaceAll(text4,"'",'"');
      text4 = replaceAll(text4,'n\n   d',"nd")    
      text4 = replaceAll(text4,'\n   ',"");
      text4 = replaceAll(text4,'\n',"");
      text4 = replaceAll(text4,' ',"");
      text4 = replaceAll(text4,'//',"/");
      // text4 = replaceAll(text4,'\\("',"\\('");
      // text4 = replaceAll(text4,'"\\)',"'\\)");

       text4 = eval('(' + text4 + ')');
      // data403 = JSON.stringify(text4);
      data403 = text4
      // console.log(data403.dataMethod[0].count);



     console.log("_______________________________ 2.5 ");


       var text5 ="{\""+ data.split("\\n}")[4].split("{\\n \"")[1] +"}" ;        
       // var text5 ="{"+ data.split("{\\n \"")[0] +" ] }" ;        
       // var text5 ="{"+ data.split("]\\n}")[0]+" ] }" ;        
       // console.log(text5);
       // console.log(text6);
       // console.log("{"+ data.split("] }\n ")[3].split("│ {")[1] +" ] }");
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text5 = replaceAll(text5,'\\\\n   ',"");
      text5 = replaceAll(text5,'\\\\n','');
      text5 = replaceAll(text5,'\\\\','');
      text5 = replaceAll(text5,'│ n','');

     // console.log("_______________________________ 2.5 ");
     //    console.log(text5);

    text5 = replaceAll(text5,'│',"");
      // text5 = replaceAll(text5,"'",'"');
      text5 = replaceAll(text5,'n\n   d',"nd")    
      text5 = replaceAll(text5,'\n   ',"");
      text5 = replaceAll(text5,'\n',"");
      text5 = replaceAll(text5,' ',"");
      text5 = replaceAll(text5,'//',"/");
      // text5 = replaceAll(text5,'\\("',"\\('");
      // text5 = replaceAll(text5,'"\\)',"'\\)");
                 
                 // console.log(text5);
       

        text5 = eval('(' + text5 + ')');
                // console.log(text5);

       text5_1 = JSON.stringify(text5);
      dataDuration1 = text5
             // text5 = eval('(' + text5 + ')');
             dataDuration1_1 = text5

       // console.log(data403.dataMethod[0].count);
      // console.log(text5);
        // console.log(JSON.stringify(text5));
      
      
     console.log("_______________________________ 2.6 ");


       var text6 ="{\""+ data.split("\\n}")[5].split("{\\n \"")[1] +"}" 

        // text6 =util.inspect("{"+ data.split("] }\n ")[5].split("│ {")[1] +" ] }", {'maxArrayLength': null})       
      // console.log(text6);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])
// util.inspect.defaultOptions.maxArrayLength = null;

    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text6 = replaceAll(text6,'\\\\n   ',"");
      text6 = replaceAll(text6,'\\\\n','');
      text6 = replaceAll(text6,'\\\\','');
      text6 = replaceAll(text6,'│ n','');

    text6 = replaceAll(text6,'│',"");
      // text6 = replaceAll(text6,"'",'"');
      text6 = replaceAll(text6,'n\n   d',"nd")    
      text6 = replaceAll(text6,'\n   ',"");
      text6 = replaceAll(text6,'\n',"");
      text6 = replaceAll(text6,' ',"");
      text6 = replaceAll(text6,'//',"/");
      // text6 = replaceAll(text6,'\\("',"\\('");
      // text6 = replaceAll(text6,'"\\)',"'\\)");

      // text6 = eval('(' + JSON.stringify(text6, null, 1) + ')');
      // data403 = JSON.stringify(text4);
      // dataDuration2 = text6
            text6 = eval('(' + text6 + ')');
            dataDuration2 = text6
            dataDuration2_1 = text6
       // console.log(text6);
// console.log(JSON.stringify(text6, null, 1))
// console.dir(text6, {'maxArrayLength': null})

// const util = require('util')
// console.log(util.inspect(text6, { maxArrayLength: null }))
// console.log(util.inspect(text6, {maxArrayLength: null, depth:null }))

     console.log("_______________________________ 2.7 ");


       var text7 ="{\""+ data.split("\\n}")[6].split("{\\n \"")[1] +"}" 
      // console.log(text7);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text7 = replaceAll(text7,'\\\\n   ',"");
      text7 = replaceAll(text7,'\\\\n','');
      text7 = replaceAll(text7,'\\\\','');
      text7 = replaceAll(text7,'│ n','');

    text7 = replaceAll(text7,'│',"");
      // text7 = replaceAll(text7,"'",'"');
      text7 = replaceAll(text7,'n\n   d',"nd")    
      text7 = replaceAll(text7,'\n   ',"");
      text7 = replaceAll(text7,'\n',"");
      text7 = replaceAll(text7,' ',"");
      text7 = replaceAll(text7,'//',"/");
      // text7 = replaceAll(text7,'\\("',"\\('");
      // text7 = replaceAll(text7,'"\\)',"'\\)");

       // text7 = eval('(' + text7 + ')');
      // data403 = JSON.stringify(text4);
      
            text7 = eval('(' + text7 + ')');
            dataDuration3 = text7
            dataDuration3_1 = text7
      // console.log(data403.dataMethod[0].count);
            // console.log(text7);

      
      
      console.log("_______________________________ 2.8 ");


       var text8 ="{\""+ data.split("\\n}")[7].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text8 = replaceAll(text8,'\\\\n   ',"");
      text8 = replaceAll(text8,'\\\\n','');
      text8 = replaceAll(text8,'\\\\','');
      text8 = replaceAll(text8,'│ n','');

    text8 = replaceAll(text8,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text8 = replaceAll(text8,'n\n   d',"nd")    
      text8 = replaceAll(text8,'\n   ',"");
      text8 = replaceAll(text8,'\n',"");
      text8 = replaceAll(text8,' ',"");
      text8 = replaceAll(text8,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text8 = eval('(' + text8 + ')');
            dataDuration4 = text8
            dataDuration4_1 = text8
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
 /*              console.log("___________PROD________________ 2.9 ");


       var text9 ="{\""+ data.split("\\n}")[9].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text9 = replaceAll(text9,'\\\\n   ',"");
      text9 = replaceAll(text9,'\\\\n','');
      text9 = replaceAll(text9,'\\\\','');
      text9 = replaceAll(text9,'│ n','');

    text9 = replaceAll(text9,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text9 = replaceAll(text9,'n\n   d',"nd")    
      text9 = replaceAll(text9,'\n   ',"");
      text9 = replaceAll(text9,'\n',"");
      text9 = replaceAll(text9,' ',"");
      text9 = replaceAll(text9,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text9 = eval('(' + text9 + ')');
            data404_Prod = text9
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.10 ");


       var text10 ="{\""+ data.split("\\n}")[10].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text10 = replaceAll(text10,'\\\\n   ',"");
      text10 = replaceAll(text10,'\\\\n','');
      text10 = replaceAll(text10,'\\\\','');
      text10 = replaceAll(text10,'│ n','');

    text10 = replaceAll(text10,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text10 = replaceAll(text10,'n\n   d',"nd")    
      text10 = replaceAll(text10,'\n   ',"");
      text10 = replaceAll(text10,'\n',"");
      text10 = replaceAll(text10,' ',"");
      text10 = replaceAll(text10,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text10 = eval('(' + text10 + ')');
            data500_Prod = text10
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.11 ");


       var text11 ="{\""+ data.split("\\n}")[11].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text11 = replaceAll(text11,'\\\\n   ',"");
      text11 = replaceAll(text11,'\\\\n','');
      text11 = replaceAll(text11,'\\\\','');
      text11 = replaceAll(text11,'│ n','');

    text11 = replaceAll(text11,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text11 = replaceAll(text11,'n\n   d',"nd")    
      text11 = replaceAll(text11,'\n   ',"");
      text11 = replaceAll(text11,'\n',"");
      text11 = replaceAll(text11,' ',"");
      text11 = replaceAll(text11,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text11 = eval('(' + text11 + ')');
            data403_Prod = text11
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.12 ");


       var text12 ="{\""+ data.split("\\n}")[12].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text12 = replaceAll(text12,'\\\\n   ',"");
      text12 = replaceAll(text12,'\\\\n','');
      text12 = replaceAll(text12,'\\\\','');
      text12 = replaceAll(text12,'│ n','');

    text12 = replaceAll(text12,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text12 = replaceAll(text12,'n\n   d',"nd")    
      text12 = replaceAll(text12,'\n   ',"");
      text12 = replaceAll(text12,'\n',"");
      text12 = replaceAll(text12,' ',"");
      text12 = replaceAll(text12,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text12 = eval('(' + text12 + ')');
            dataDuration1_Prod = text12
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.13 ");


       var text13 ="{\""+ data.split("\\n}")[13].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text13 = replaceAll(text13,'\\\\n   ',"");
      text13 = replaceAll(text13,'\\\\n','');
      text13 = replaceAll(text13,'\\\\','');
      text13 = replaceAll(text13,'│ n','');

    text13 = replaceAll(text13,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text13 = replaceAll(text13,'n\n   d',"nd")    
      text13 = replaceAll(text13,'\n   ',"");
      text13 = replaceAll(text13,'\n',"");
      text13 = replaceAll(text13,' ',"");
      text13 = replaceAll(text13,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text13 = eval('(' + text13 + ')');
            dataDuration2_Prod = text13
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.14 ");


       var text14 ="{\""+ data.split("\\n}")[14].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text14 = replaceAll(text14,'\\\\n   ',"");
      text14 = replaceAll(text14,'\\\\n','');
      text14 = replaceAll(text14,'\\\\','');
      text14 = replaceAll(text14,'│ n','');

    text14 = replaceAll(text14,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text14 = replaceAll(text14,'n\n   d',"nd")    
      text14 = replaceAll(text14,'\n   ',"");
      text14 = replaceAll(text14,'\n',"");
      text14 = replaceAll(text14,' ',"");
      text14 = replaceAll(text14,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text14 = eval('(' + text14 + ')');
            dataDuration3_Prod = text14
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
         
               console.log("___________PROD________________ 2.15 ");


       var text15 ="{\""+ data.split("\\n}")[15].split("{\\n \"")[1] +"}" 
      // console.log(text8);
      // console.log(data.split("} ] }")[2]);
      // console.log(data.split("│ {")[4]);
       // console.log(data.split("} ] }")[2].split("│ {")[1])


    //  param1 =  "│ {";
    //  param2 = "} }";
    // var text2 ="{"+ text3.split(param1)[1].split(param2)[0] +"}}";

    text15 = replaceAll(text15,'\\\\n   ',"");
      text15 = replaceAll(text15,'\\\\n','');
      text15 = replaceAll(text15,'\\\\','');
      text15 = replaceAll(text15,'│ n','');

    text15 = replaceAll(text15,'│',"");
      // text8 = replaceAll(text8,"'",'"');
      text15 = replaceAll(text15,'n\n   d',"nd")    
      text15 = replaceAll(text15,'\n   ',"");
      text15 = replaceAll(text15,'\n',"");
      text15 = replaceAll(text15,' ',"");
      text15 = replaceAll(text15,'//',"/");
      // text8 = replaceAll(text8,'\\("',"\\('");
      // text8 = replaceAll(text8,'"\\)',"'\\)");

       // text8 = eval('(' + text8 + ')');
      // data403 = JSON.stringify(text4);
      
            text15 = eval('(' + text15 + ')');
            dataDuration4_Prod = text15
      // console.log(data403.dataMethod[0].count);
      // console.log(text8);


         // sleep(2000);
*/
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

function fileHandlerSand(varName,data){
    fs.appendFile('./JSONvar.js', "let "+varName+" = " + JSON.stringify(data, null, '\t') +";\n", (err) => {
        if(err) throw err;
        console.log('Data has been added! '+varName);
                 sleep(5000);
    });
}
function fileHandlerProd(varName,data){
    fs.appendFile('./JSONvar2.js', "let "+varName+" = " + JSON.stringify(data, null, '\t') +";\n", (err) => {
        if(err) throw err;
        console.log('Data has been added! '+varName);
                 sleep(5000);
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
  fileHandlerSand("myArray500",emptyTable);
}
else{fileHandlerSand("myArray500",data500);}
                 sleep(5000);

if (!data404.dataMethod.length){
  fileHandlerSand("myArray404",emptyTable);
}
else{fileHandlerSand("myArray404",data404);}
                 sleep(5000);

if (!data403.dataMethod.length){
  fileHandlerSand("myArray403",emptyTable);
}
else{fileHandlerSand("myArray403",data403);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration1.dataMethod.length)

    // fileHandler3("myArrayDuration_1",dataDuration1);
    // fileHandler3("myArrayDuration_2",dataDuration2);
    // fileHandler3("myArrayDuration_3",dataDuration3);
    // fileHandler3("myArrayDuration_4",dataDuration4);

        if (!dataDuration1.dataMethod.length){
          fileHandlerSand("myArrayDuration_1",emptyTable);
        }
        else{fileHandlerSand("myArrayDuration_1",dataDuration1);} 
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration2.dataMethod.length)

        if (!dataDuration2.dataMethod.length){
          fileHandlerSand("myArrayDuration_2",emptyTable);
        }
        else{fileHandlerSand("myArrayDuration_2",dataDuration2);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration3.dataMethod.length)

        if (!dataDuration3.dataMethod.length){
          fileHandlerSand("myArrayDuration_3",emptyTable);
        }
        else{fileHandlerSand("myArrayDuration_3",dataDuration3);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration4.dataMethod.length)

        if (!dataDuration4.dataMethod.length){
          fileHandlerSand("myArrayDuration_4",emptyTable);
        }
        else{fileHandlerSand("myArrayDuration_4",dataDuration4);}
                 sleep(5000);


/*
//!!!!!!!!!!!!!!! PROD !!!!!!!!!

if (!data500_Prod.dataMethod.length){
  fileHandlerProd("myArray500_Prod",emptyTable);
}
else{fileHandlerProd("myArray500_Prod",data500_Prod);}
                 sleep(5000);

if (!data404_Prod.dataMethod.length){
  fileHandlerProd("myArray404_Prod",emptyTable);
}
else{fileHandlerProd("myArray404_Prod",data404_Prod);}
                 sleep(5000);

if (!data403_Prod.dataMethod.length){
  fileHandlerProd("myArray403_Prod",emptyTable);
}
else{fileHandlerProd("myArray403_Prod",data403_Prod);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration1_Prod.dataMethod.length)

    // fileHandler3("myArrayDuration_1",dataDuration1);
    // fileHandler3("myArrayDuration_2",dataDuration2);
    // fileHandler3("myArrayDuration_3",dataDuration3);
    // fileHandler3("myArrayDuration_4",dataDuration4);

        if (!dataDuration1_Prod.dataMethod.length){
          fileHandlerProd("myArrayDuration_1_Prod",emptyTable);
        }
        else{fileHandlerProd("myArrayDuration_1_Prod",dataDuration1_Prod);} 
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration2_Prod.dataMethod.length)

        if (!dataDuration2_Prod.dataMethod.length){
          fileHandlerProd("myArrayDuration_2_Prod",emptyTable);
        }
        else{fileHandlerProd("myArrayDuration_2_Prod",dataDuration2_Prod);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration3_Prod.dataMethod.length)

        if (!dataDuration3_Prod.dataMethod.length){
          fileHandlerProd("myArrayDuration_3_Prod",emptyTable);
        }
        else{fileHandlerProd("myArrayDuration_3_Prod",dataDuration3_Prod);}
                 sleep(5000);

    console.log("!!!!!! _ "+dataDuration4_Prod.dataMethod.length)

        if (!dataDuration4_Prod.dataMethod.length){
          fileHandlerProd("myArrayDuration_4_Prod",emptyTable);
        }
        else{fileHandlerProd("myArrayDuration_4_Prod",dataDuration4_Prod);}
                 sleep(5000);

*/

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










