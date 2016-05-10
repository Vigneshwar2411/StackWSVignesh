var fs= require ("fs");


fs.readFile('csv/India2011.csv', function(err,data1){
  myJson(data1);
})

function myJson(data1){
  var line=data1.toString().split("\r\n");
  console.log(line.length);
  var finaljson=[];
  var general=[];
  var headers=line[0].split(",");
  console.log(line[0]);
  for(var i=1;i<line.length-1;i++){
    var obj={};
    var currentline=line[i].split(",");

    for(j=0 ;j<headers.length;j++){
      obj[headers[j]]=currentline[j];

    }
    finaljson.push(obj);
  }
 console.log(finaljson);
}
