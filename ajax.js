function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var Jout = JSON.parse(this.responseText);
      // console.log(Jout);
    //    console.log(Jout.Grocery);
       var JGrArry = Jout.Grocery;
       var EachArry="<table ><tr style='font-weight:bold;background-color:#7264d9;'><td>Sl No:</td><td>Item Name</td><td>Quantity</td><td>Unit</td><td>Department</td><td>Notes</td></tr>";
       for(var i=0;i<JGrArry.length;i++){
          EachArry+= "<tr style='background-color:#b4abf7;'><td>"+JGrArry[i].SlNo+"</td><td>"+JGrArry[i].ItemName+"</td><td>"+JGrArry[i].Quantity+"</td><td>"+JGrArry[i].Unit+"</td><td>"+JGrArry[i].Department+"</td><td>"
          +JGrArry[i].Notes+"</td><tr>";

       } 
     
       EachArry+="</table>";
// console.log(EachArry);
document.getElementById("GRTable").innerHTML=EachArry;
      }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
  }