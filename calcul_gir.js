function calcul_gir()
{

chaine="" ;
rang=0;
GIR="";

chaine = this.getField("COHERENCE").value;
chaine  = chaine  + this.getField("ORIENTATION").value;
chaine  = chaine  + this.getField("TOILETTE_H").value;
chaine  = chaine  + this.getField("TOILETTE_B").value;
chaine  = chaine  + this.getField("HABILLAGE_H").value;
chaine  = chaine  + this.getField("HABILLAGE_M").value;
chaine  = chaine  + this.getField("HABILLAGE_B").value;
chaine  = chaine  + this.getField("ALIMENTATION_S").value;
chaine  = chaine  + this.getField("ALIMENTATION_M").value;
chaine  = chaine  + this.getField("ELIMINATION_U").value;
chaine  = chaine  + this.getField("ELIMINATION_F").value;
chaine  = chaine  + this.getField("TRANSFERT").value;
chaine  = chaine  + this.getField("DEPLACEMENT_INT").value;
chaine  = chaine  + this.getField("DEPLACEMENT_EXT").value;
chaine  = chaine  + this.getField("COMMUNICATION").value;

this.getField("LIEU").value = chaine;

		groupe=0;

		//Teste pour le groupe A 
		if (chaine.charAt(0) == "C") {groupe = 2000 ;}
		if (chaine.charAt(1) == "C") {groupe += 1200 ;}
		if (chaine.charAt(2) == "C") {groupe += 40 ;}
		if (chaine.charAt(3) == "C") {groupe += 40 ;}
		if (chaine.charAt(4) == "C") {groupe += 60 ;}
		if (chaine.charAt(5) == "C") {groupe += 100 ;}
		if (chaine.charAt(6) == "C") {groupe += 800 ;}
		if (chaine.charAt(7) == "C") {groupe += 200 ;}
		//
		if (chaine.charAt(2) == "B") {groupe += 16 ;}
		if (chaine.charAt(3) == "B") {groupe += 16 ;}
		if (chaine.charAt(4) == "B") {groupe += 20 ;}
		if (chaine.charAt(5) == "B") {groupe += 16 ;}
		if (chaine.charAt(6) == "B") {groupe += 120 ;}
		if (chaine.charAt(7) == "B") {groupe += 32 ;}
		//Rang groupe A 
		if (groupe >= 3390 ) {rang = 3 ;}
		if (groupe >= 4140 ) {rang = 2 ;}
		if (groupe >= 4380 ) {rang = 1 ;}
		groupe = 0 ;

 		//Teste pour le groupe B
    		if (rang == 0) {
			if (chaine.charAt(0) == "C") {groupe = 1500 ;}
	    		if (chaine.charAt(1) == "C") {groupe += 1200 ;}
    			if (chaine.charAt(2) == "C") {groupe += 40 ;}
	    		if (chaine.charAt(3) == "C") {groupe += 40 ;}
    			if (chaine.charAt(4) == "C") {groupe += 60 ;}
    			if (chaine.charAt(5) == "C") {groupe += 100 ;}
	    		if (chaine.charAt(6) == "C") {groupe += 800 ;}
    			if (chaine.charAt(7) == "C") {groupe += 80 ;}
    			//
    			if (chaine.charAt(0) == "B") {groupe += 320 ;}
	    		if (chaine.charAt(1) == "B") {groupe += 120 ;}
    			if (chaine.charAt(2) == "B") {groupe += 16 ;}
    			if (chaine.charAt(3) == "B") {groupe += 16 ;}
	    		if (chaine.charAt(4) == "B") {groupe += 0 ;}
    			if (chaine.charAt(5) == "B") {groupe += 16 ;}
    			if (chaine.charAt(6) == "B") {groupe += 120 ;}
	    		if (chaine.charAt(7) == "B") {groupe += - 40 ;}
		    	//Rang groupe B
    			if (groupe >= 2016) {rang = 4;}
			groupe=0;
		}

    		//Teste pour le groupe C
		if (rang == 0) {
    			if (chaine.charAt(2) == "C") {groupe = 40 ;}
	    		if (chaine.charAt(3) == "C") {groupe += 40 ;}
    			if (chaine.charAt(4) == "C") {groupe += 60 ;}
    			if (chaine.charAt(5) == "C") {groupe += 160 ;}
	    		if (chaine.charAt(6) == "C") {groupe += 1000 ;}
    			if (chaine.charAt(7) == "C") {groupe += 400 ;}
			//
	    		if (chaine.charAt(2) == "B") {groupe += 16 ;}
    			if (chaine.charAt(3) == "B") {groupe += 16 ;}
	    		if (chaine.charAt(4) == "B") {groupe += 20 ;}
    			if (chaine.charAt(5) == "B") {groupe += 20 ;}
    			if (chaine.charAt(6) == "B") {groupe += 200 ;}
	    		if (chaine.charAt(7) == "B") {groupe += 40 ;}
    			//Rang groupe C	
		       	if (groupe >= 1432) {rang = 6;}
        	  	if (groupe >= 1700) {rang = 5;}
   			groupe=0;
		}

		//Teste pour le groupe D
		if (rang == 0) {
	    		if (chaine.charAt(4) == "C") {groupe = 2000 ;}
    			if (chaine.charAt(5) == "C") {groupe += 400 ;}
    			if (chaine.charAt(6) == "C") {groupe += 2000 ;}
	    		if (chaine.charAt(7) == "C") {groupe += 200 ;}
			// 
    			if (chaine.charAt(4) == "B") {groupe += 200 ;}
    			if (chaine.charAt(5) == "B") {groupe += 200 ;}
	    		if (chaine.charAt(6) == "B") {groupe += 200 ;}
    			//Rang groupe D
	    		if (groupe >= 2400) {rang = 7;}
			groupe=0;
		}

		//Teste pour le groupe E
		if (rang == 0) {
	    		if (chaine.charAt(0) == "C") {groupe = 400 ;}
    			if (chaine.charAt(1) == "C") {groupe += 400 ;}
   			if (chaine.charAt(2) == "C") {groupe += 400 ;}
	    		if (chaine.charAt(3) == "C") {groupe += 400 ;}
    			if (chaine.charAt(4) == "C") {groupe += 400 ;}
    			if (chaine.charAt(5) == "C") {groupe += 800 ;}
	    		if (chaine.charAt(6) == "C") {groupe += 800 ;}
    			if (chaine.charAt(7) == "C") {groupe += 200 ;}
			//
	    		if (chaine.charAt(2) == "B") {groupe += 100 ;}
    			if (chaine.charAt(3) == "B") {groupe += 100 ;}
    			if (chaine.charAt(4) == "B") {groupe += 100 ;}
	    		if (chaine.charAt(5) == "B") {groupe += 100 ;}
    			if (chaine.charAt(6) == "B") {groupe += 100 ;}
			//Rang groupe E
	    		if (groupe >= 1200) {rang = 8;}
			groupe=0;
		}

		//Teste pour le groupe F
		if (rang == 0) {
	    		if (chaine.charAt(0) == "C") {groupe = 200 ;}
    			if (chaine.charAt(1) == "C") {groupe += 200 ;}
    			if (chaine.charAt(2) == "C") {groupe += 500 ;}
	    		if (chaine.charAt(3) == "C") {groupe += 500 ;}
    			if (chaine.charAt(4) == "C") {groupe += 500 ;}
    			if (chaine.charAt(5) == "C") {groupe += 500 ;}
	    		if (chaine.charAt(6) == "C") {groupe += 500 ;}
    			if (chaine.charAt(7) == "C") {groupe += 200 ;}
	    		//
    			if (chaine.charAt(0) == "B") {groupe += 100 ;}
	    		if (chaine.charAt(1) == "B") {groupe += 100 ;}
    			if (chaine.charAt(2) == "B") {groupe += 100 ;}
    			if (chaine.charAt(3) == "B") {groupe += 100 ;}
	    		if (chaine.charAt(4) == "B") {groupe += 100 ;}
    			if (chaine.charAt(5) == "B") {groupe += 100 ;}
    			if (chaine.charAt(6) == "B") {groupe += 100 ;}
    			//Rang groupe F
	    		if (groupe >= 800) {rang = 9;}
			groupe=0;
		}

		//Teste pour le groupe G
		if (rang == 0) {
	    		if (chaine.charAt(0) == "C") {groupe = 150 ;}
    			if (chaine.charAt(1) == "C") {groupe += 150 ;}
    			if (chaine.charAt(2) == "C") {groupe += 300 ;}
	    		if (chaine.charAt(3) == "C") {groupe += 300 ;}
    			if (chaine.charAt(4) == "C") {groupe += 500 ;}
    			if (chaine.charAt(5) == "C") {groupe += 500 ;}
	    		if (chaine.charAt(6) == "C") {groupe += 400 ;}
    			if (chaine.charAt(7) == "C") {groupe += 200 ;}
			//
    			if (chaine.charAt(2) == "B") {groupe += 200 ;}
	    		if (chaine.charAt(3) == "B") {groupe += 200 ;}
    			if (chaine.charAt(4) == "B") {groupe += 200 ;}
    			if (chaine.charAt(5) == "B") {groupe += 200 ;}
	    		if (chaine.charAt(6) == "B") {groupe += 200 ;}
    			if (chaine.charAt(7) == "B") {groupe += 100 ;}
    			//Rang groupe G
    			if (groupe >= 650) {rang = 10;}
			groupe=0;
		}

		//Teste Une Chaine pour le groupe H
		if (rang == 0) {
    			if (chaine.charAt(2) == "C") {groupe = 3000 ;}
    			if (chaine.charAt(3) == "C") {groupe += 3000 ;}
	    		if (chaine.charAt(4) == "C") {groupe += 3000 ;}
    			if (chaine.charAt(5) == "C") {groupe += 3000 ;}
    			if (chaine.charAt(6) == "C") {groupe += 1000 ;}
	    		if (chaine.charAt(7) == "C") {groupe += 1000 ;}
			//
    			if (chaine.charAt(2) == "B") {groupe += 2000 ;}
    			if (chaine.charAt(3) == "B") {groupe += 2000 ;}
	    		if (chaine.charAt(4) == "B") {groupe += 2000 ;}
    			if (chaine.charAt(5) == "B") {groupe += 2000 ;}
    			if (chaine.charAt(6) == "B") {groupe += 2000 ;}
	    		if (chaine.charAt(7) == "B") {groupe += 1000 ;}
			//Rang groupe H
    			
			if (groupe >= 2000) {rang = 12 ;} else {rang = 13 ;}
        	  	if (groupe >= 4000) {rang = 11 ;}
          		
			
  			groupe=0;
		}
		//Girage
		if (rang == 13 ) {GIR = 6 ;}
		if (rang == 12 ) {GIR = 5 ;}
		if (rang <= 11 ) {GIR = 4 ;}
		if (rang <= 9  ) {GIR = 3 ;} 
		if (rang <= 7  ) {GIR = 2 ;}
		if (rang == 1  ) {GIR = 1 ;}

this.getField("GIR").value = GIR;

}