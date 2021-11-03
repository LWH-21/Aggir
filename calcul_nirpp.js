
function calcul_nirpp()
{
var s = "";
var nirpp="";
var cle = 0;

s = this.getField("NIRPP").value;
s = s.toString();
for (var i=0; i<s.length; i++) {
  if ((s.charAt(i)>="0") && (s.charAt(i)<="9")) {
	nirpp = nirpp.toString() + s.charAt(i);
  }
};

nirpp=nirpp.substring(0,13);

if (nirpp.length == 13) {
  cle = nirpp % 97;
  cle = 97 - cle;
  if  (cle<10) cle="0"+cle;
  s = nirpp;
  nirpp = s.substring(0,1)+" "+s.substring(1,3)+" "+s.substring(3,5)+" "+s.substring(5,7)+" "+s.substring(7,10)+" "+s.substring(10,13);
  this.getField("NIRPP").value=nirpp;
} else  {
  cle = "??"
};

this.getField("CLE").value = cle;
}


