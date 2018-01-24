
/*****************
****** TEST ******
******************/

		
function prova() {
    var num, a, k;

		num = document.getElementById("num1").innerHTML;
	a = document.getElementById("a1").value;
	k = document.getElementById("k1").value;
	
	document.writeln(num);
	document.writeln(a);
	document.writeln(k);

}

function prova2() {
    var num, a, k;

		
	a = document.getElementById("a_es2.1").innerHTML;
	k = document.getElementById("k_es2.1").innerHTML;
	x = document.getElementById("x_es2.1").value;
	
	document.writeln(a);
	document.writeln(k);
	document.writeln(x);

}



		
/*****************************************
*********** ASSEGNAZIONE DATA ************
******************************************/		

function assignDate(){
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();
	document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
}


		

function randomAssignmentRangeK(id_num,max_sign,min_k,max_k){
				
	x = my_random_rangeK(max_sign,min_k,max_k);

	document.getElementById(id_num).innerHTML = x;		
}


function randomAssignmentRangeKSciNot(id_a,id_k,max_sign,min_k,max_k){
	
	x = my_random_rangeK(max_sign,min_k,max_k);
	v = my_scinot(x);
	a = v[0];
	k = v[1];
	document.getElementById(id_a).innerHTML = a;
	document.getElementById(id_k).innerHTML = k;		
}








/*****************************************
****** VERIFICA RISULTATO ESERCIZI *******
******************************************/



function verifySciNot(id_num,id_a,id_k,id_result,id_weight) {
    var w_text, w, num, a, k, correct;
	
	w_text = document.getElementById(id_weight).innerHTML;
	w = parseInt(w_text, 10);
		num = document.getElementById(id_num).innerHTML;
	a = document.getElementById(id_a).value;
	k = document.getElementById(id_k).value;
	
	

	if (isNaN(num) || isNaN(a) || isNaN(k)){
		text = "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( num - (a*Math.pow(10,k)) );
		relErr = err/num;
		if(relErr <= 0.1 && a<10 && a>=1){
			text = "<span style='color:green'> Risultato corretto (dentro un errore relativo del 10%). </span>";
			correct = 1;
		}else{
			text = "<span style='color:red'> Risultato errato (dentro un errore relativo del 10%). </span>";
			correct = 0;
		}

	}
	
	document.getElementById(id_result).innerHTML = text;		
	return [w*correct, w];
}



		

function verifyComNot(id_a,id_k,id_x,id_result,id_weight) {
    var w_text, w, num, a, k, correct;
	
	/*
	document.writeln(id_a);
	document.writeln(id_k);
	document.writeln(id_x);
	document.writeln(id_result);
	document.writeln(id_weight);
	*/

	w_text = document.getElementById(id_weight).innerHTML;

	w = parseInt(w_text, 10);
	a = document.getElementById(id_a).innerHTML;
	k = document.getElementById(id_k).innerHTML;
	x = document.getElementById(id_x).value;
	
	/*
	document.writeln(w);
	document.writeln(a);
	document.writeln(k);
	document.writeln(x);
	*/

	if (isNaN(x) || isNaN(a) || isNaN(k)){
		text = "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( x - (a*Math.pow(10,k)) );
		relErr = err/x;
		if(relErr <= 0.1){
			text = "<span style='color:green'> Risultato corretto (dentro un errore relativo del 10%). </span>";
			correct = 1;
		}else{
			text = "<span style='color:red'> Risultato errato (dentro un errore relativo del 10%). </span>";
			correct = 0;
		}

	}
	
	document.getElementById(id_result).innerHTML = text;		
	return [w*correct, w];
}





	
function verifyApprox(id_n1,id_n2,id_d1,id_d2,id_a,id_k,id_o,id_result,id_weight) {
    var w_text, w, num, a, k, correct, correct_approx, correct_order, flag_approx, flag_order;
	
	// Frazioni di punteggio per approssimazione e ordine corretti:
	correct_approx = .5;
	correct_order = .5;

	correct = 0;
	flag_approx = 0;
	flag_order = 0;

	
	
	w_text = document.getElementById(id_weight).innerHTML;
	w = parseInt(w_text, 10);
	n1 = document.getElementById(id_n1).innerHTML;
	n2 = document.getElementById(id_n2).innerHTML;
	d1 = document.getElementById(id_d1).innerHTML;
	d2 = document.getElementById(id_d2).innerHTML;			
	a = document.getElementById(id_a).value;		
	k = document.getElementById(id_k).value;
	o = document.getElementById(id_o).value;
	
	/*
	document.writeln(w);
	document.writeln(n1);
	document.writeln(n2);
	document.writeln(d1);
	document.writeln(d2);
	document.writeln(a);
	document.writeln(k);
	document.writeln(o);
	*/
	
		
	if(isNaN(n1) || isNaN(n2) ||isNaN(d1) || isNaN(d2) || isNaN(o) || isNaN(a) || isNaN(k)){
		text = "Testo esercizio incompleto.";
		correct = 0;
	}else{
		x = (n1*n2)/(d1*d2);		
		v = my_scinot(x);
		A = v[0];
		K = v[1];
	
		//document.writeln(A);
		//document.writeln(K); 

		A_approx = Math.round(A);
		K_approx = K;
	
	
	
		if( A >= 1 && A < 5 ){
			O = K;
		}else if( A > 5 && A < 10 ){
			O = K+1;			
			if(Math.round(A) == 10){
				A_approx = 1;
				K_approx = O; 
			}
		}
	
	
		if(A_approx==1){
			if( (a >= 1 && a <= 2 && k==K_approx) || (a == 9 && k==K_approx-1) && a!="" && k!=""){
				flag_approx ++;
			}
		}else if(A_approx==9){
			if( (a >= 8 && a <= 9 && k==K_approx) || (a == 1 && k==K_approx+1) && a!="" && k!=""){
				flag_approx ++;
			} 		
		}else{
			if(a >= A_approx-1 && a <= A_approx+1 && k==K_approx && k!=""){
				flag_approx ++;
			}
		}
		/*
		document.writeln(x);
		document.writeln(K);
		document.writeln(A);
		document.writeln(A_approx);
		document.writeln(K_approx);
		*/

		
		/*
		if(o==O && o!=""){
			flag_order ++;
		}
		*/
		if( (o==O && o!="") || ((A >= 4 && A<5) && (o==O+1 && o!="")) || ((A >= 5 && A<6) && (o==O-1 && o!="")) ){
			flag_order ++;
		}

		text = "Valore numerico esatto = " + x + "<br>" + "Ordine di grandezza = " + O;
	
		//text = text + "<br>" + "A_approx = " + A_approx + "<br>" + "K_approx = " + K_approx + "<br>" + "O = " + O + "<br>";
	
		if(flag_approx==0){
			text = text + "<br>" + "<span style='color:red;'> Approssimazione errata. </span>";
		}else if(flag_approx==1){
			text = text + "<br>" + "<span style='color:green;'> Approssimazione corretta. </span>";
			correct += correct_approx;
		}if(flag_order==0){
			text = text + "<span style='color:red;'> Ordine di grandezza errato. </span>";
		}else if(flag_order==1){
			text = text + "<span style='color:green;'> Ordine di grandezza corretto. </span>";
			correct += correct_order;
		}
		//document.writeln(text);
		document.getElementById(id_result).innerHTML = text;
	
		return [w*correct, w];		


	}
}




function verifyConv(id_unit_x,id_x,id_unit_y,id_y,id_exp,id_result,id_weight) {
    var w_text, w, stringa, v, correct;
	
	/*
	document.writeln(id_unit_x);
	document.writeln(id_x);
	document.writeln(id_unit_y);
	document.writeln(id_y);
	document.writeln(id_result);
	document.writeln(id_weight);
	*/

	w_text = document.getElementById(id_weight).innerHTML;

	w = parseInt(w_text, 10);
	unit_x = document.getElementById(id_unit_x).innerHTML;
	unit_y = document.getElementById(id_unit_y).innerHTML;
	x = document.getElementById(id_x).innerHTML;
	e = document.getElementById(id_exp).innerHTML;
	y = document.getElementById(id_y).value;
	
	if(e=="") e=1;

	/*
	document.writeln(w);
	document.writeln(unit_x);
	document.writeln(unit_y);
	document.writeln(x);
	document.writeln(y);
	*/
	
	v_x = unit_x.split("");
	pot_x = my_convTenPot(v_x[v_x.length-2]);
	v_y = unit_y.split("");
	pot_y = my_convTenPot(v_y[v_y.length-2]);
	//document.writeln(pot_x);
	//document.writeln(pot_y);

	//document.writeln(pot_x);
	//document.writeln(pot_y);
	ConvFact = Math.pow(10,e*(pot_x-pot_y));
	//document.writeln(ConvFact);

	if (isNaN(y)){
		text = "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( y - x*ConvFact );
		relErr = err/y;
		//document.writeln(relErr);
		if(relErr <= 0.1){
			text = "<span style='color:green'> Risultato corretto (dentro un errore relativo del 10%). </span>";
			correct = 1;
		}else{
			text = "<span style='color:red'> Risultato errato (dentro un errore relativo del 10%). </span>";
			correct = 0;
		}

	}
	
	//document.writeln(w*correct);
	//document.writeln(w);

	document.getElementById(id_result).innerHTML = text;		
	return [w*correct, w];

}

		



function verifyConvDensity(id_x,id_y,id_result,id_weight) {
    var w_text, w, stringa, v, correct;
	
	
	w_text = document.getElementById(id_weight).innerHTML;

	w = parseInt(w_text, 10);
	x = document.getElementById(id_x).innerHTML;
	y = document.getElementById(id_y).value;

	//document.writeln("ciao");
	

	ConvFact = 0.001;

	if (isNaN(y)){
		text = "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( y - x*ConvFact );
		relErr = err/y;
		if(relErr <= 0.1){
			text = "<span style='color:green'> Risultato corretto (dentro un errore relativo del 10%). </span>";
			correct = 1;
		}else{
			text = "<span style='color:red'> Risultato errato (dentro un errore relativo del 10%). </span>";
			correct = 0;
		}

	}
	
	document.getElementById(id_result).innerHTML = text;		
	return [w*correct, w];

}


/*
function writeReportCsv(id_nome,id_cognome,id_points_tot,id_points_avail){

	document.writeln(id_nome);
	document.writeln(id_cognome);
	document.writeln(id_points_tot);
	document.writeln(id_points_avail);

	document.writeln("bella");

	tot = document.getElementById(id_points_tot).innerHTML;
	avail = document.getElementById(id_points_avail).innerHTML;
	
	document.writeln("ciao");
	document.writeln(tot);
	document.writeln(avail);

	nome = document.getElementById(id_nome).innerHTML;
	cognome = document.getElementById(id_cognome).innerHTML;

	document.writeln("ciao");
	document.writeln(nome);
	document.writeln(cognome);

	tot = document.getElementById(id_points_tot).innerHTML;
	avail = document.getElementById(id_points_avail).innerHTML;

	tot_square = Math.pow(tot,2);
	avail_square = Math.pow(avail,2);

	

	var txtFile = "./" + nome + cognome +".csv";
	var file = new File(txtFile);
	var str = nome + ";" + cognome + ";" + tot_square + ";" + avail_square;
	
	document.writeln(txtFile);
	document.writeln(str);

	file.open("w"); // open file with write access
	file.write(str);
	file.close();
}
*/



