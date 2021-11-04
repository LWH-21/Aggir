
function calcul_gir()
{

var chaine="" ;
var code1="";
var code2="";
var code3="";
var correct = 1;
var rang=0;
var GIR="?";


code1 = this.getField("COHERENCE").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=code1;
} else {
    chaine="0";
    correct=0;
};

code1 = this.getField("ORIENTATION").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};
code1 = this.getField("TOILETTE_H").value;
code2 = this.getField("TOILETTE_B").value;
if ((code1<"A") || (code2<"A")) {
    code1="0";
} else
if ((code1=="A") && (code2=="A")) {
    code1="A";
} else
if ((code1=="C") && (code2=="C")) {
    code1="C";
} else {
    code1="B";
};
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};

code1 = this.getField("HABILLAGE_H").value;
code2 = this.getField("HABILLAGE_M").value;
code3 = this.getField("HABILLAGE_B").value;
if ((code1<"A") || (code2<"A") || code3<"A") {
    code1="0";
} else
if ((code1=="A") && (code2=="A")) {
    code1="A";
} else
if ((code1=="C") && (code2=="C")) {
    code1="C";
} else {
    code1="B";
};
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};

code1 = this.getField("ALIMENTATION_S").value;
code2 = this.getField("ALIMENTATION_M").value;
if ((code1<"A") || (code2<"A")) {
    code1="0";
} else
if ((code1=="A") && (code2=="A")) {
    code1="A";
} else
if ((code1=="C") && (code2=="C")) {
    code1="C";
} else {
    code1="B";
};
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};

code1 = this.getField("ELIMINATION_U").value;
code2 = this.getField("ELIMINATION_F").value;
if ((code1<"A") || (code2<"A")) {
    code1="0";
} else
if ((code1=="A") && (code2=="A")) {
    code1="A";
} else
if ((code1=="C") && (code2=="C")) {
    code1="C";
} else {
    code1="B";
};
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};
code1 = this.getField("TRANSFERT").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};
code1 = this.getField("DEPLACEMENT_INT").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};
code1 = this.getField("DEPLACEMENT_EXT").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};
code1 = this.getField("COMMUNICATION").value;
if ((code1 == "A") || (code1 == "B") || (code1 == "C")) {
  chaine=chaine+code1;
} else {
    chaine=chaine.toString()+"0";
    correct=0;
};


if (correct==1) {
	// Groupe A
	groupe=0;
	coefs = [2000,1200,40,40,60,100,800,200,0,0];
	for (i=0;i<10;i++) {
	  if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	}
	coefs = [0,0,16,16,20,16,120,32,0,0];
	for (i=0;i<10;i++) {
	  if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	}
	if (groupe>=3390) {rang=3;}
	if (groupe>=4140) {rang=2;}
	if (groupe>=4380) {rang=1;}
	// Groupe B
	if (rang==0) {
	  groupe=0;
	  coefs = [1500,1200,40,40,60,100,800,-80,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [320,120,16,16,0,16,120,-40,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=2016) {rang=4;}
	}
	// Groupe C
	if (rang==0) {
	  groupe=0;
	  coefs = [0,0,40,40,60,160,1000,400,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [0,0,16,16,20,20,200,40,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=1432) {rang=6;}
	  if (groupe>=1700) {rang=5;}
	}
	// Groupe D
	if (rang==0) {
	  groupe=0;
	  coefs = [0,0,0,0,2000,400,2000,200,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [0,0,0,0,0,200,200,200,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=2400) {rang=7;}
	}
	// Groupe E
	if (rang==0) {
	  groupe=0;
	  coefs = [400,400,400,400,400,800,800,200,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [0,0,100,100,100,100,100,0,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=1200) {rang=8;}
	}
	// Groupe F
	if (rang==0) {
	  groupe=0;
	  coefs = [200,200,500,500,500,500,500,200,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [100,100,100,100,100,100,100,0,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=800) {rang=9;}
	}
	// Groupe G
	if (rang==0) {
	  groupe=0;
	  coefs = [150,150,300,300,500,500,400,200,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [0,0,200,200,200,200,200,100,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=650) {rang=10;}
	}
	// Groupe H
	if (rang==0) {
	  groupe=0;
	  coefs = [0,0,3000,3000,3000,3000,1000,1000,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="C") { groupe += coefs[i]; }
	  }
	  coefs = [0,0,2000,2000,2000,2000,2000,1000,0,0];
	  for (i=0;i<10;i++) {
		if (chaine.charAt(i)=="B") { groupe += coefs[i]; }
	  }
	  if (groupe>=2000) {
		rang=12;
		
	  } else {
		rang=13;
	  }
	  if (groupe>4000) { rang = 11;}
	}
	// Girage
	if (rang == 13 ) {GIR = 6 ;}
	if (rang == 12 ) {GIR = 5 ;}
	if (rang <= 11 ) {GIR = 4 ;}
	if (rang <= 9  ) {GIR = 3 ;} 
	if (rang <= 7  ) {GIR = 2 ;}
	if (rang == 1  ) {GIR = 1 ;}
}

this.getField("GIR").value = GIR;

}
