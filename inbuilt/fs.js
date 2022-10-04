let fs=require('fs');
let os=require('os');
let pt=os.platform;
let core=(os.cpus()).length+`core`;
let arch=os.arch();
let out=`you are using ${pt} os of ${arch} bit with ${core} system features.`;

// fs.writeFile('mytext.txt', 'hello world',function(){
//     console.log('file created');
// })

// fs.appendFile('mycode.txt', out,function(){
//     console.log('file appended');
// })

fs.readFile('db.json','utf-8',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);


})