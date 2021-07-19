const auditInput = 
`Acme Corporation,I3223,24319.71
Acme Corporation,I4593,54812.08
Globex,I3306,2200.00
Initech,I4981,7719.00
Initech,I2435,7185.85
Globex,I3937,11586.25
Acme Corporation,I6677,4401.48
Initech,I6672,31.94
Initech,I6570,11832.20
Globex,I6601,9672.00
Globex,I5104,1556.65
Acme Corporation,I6578,2841.73
Initech,I0193,5000.00
Acme Corporation,I6612,1617.25`;

function csvJSON(csv){

var lines=csv.split("\n");  //Separate a string with a newline

var result = [];

var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}