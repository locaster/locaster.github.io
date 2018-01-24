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
	
	
	text = "- Risulato inserito: ";
	text += a + " &middot 10" + "<sup>" + k + "</sup>";	
	text += "<br>";

	v = my_scinot(num)
	text += "- Risulato corretto: ";
	text += v[0] + " &middot 10" + "<sup>" + v[1] + "</sup>";	
	text += "<br>";
	
	if (isNaN(num) || isNaN(a) || isNaN(k)){
		text += "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( num - (a*Math.pow(10,k)) );
		relErr = err/num;
		if(relErr <= 0.1 && a<10 && a>=1){
			text += "<b style='color:green'>- Risultato corretto (dentro un errore relativo del 10%). </b>";
			correct = 1;
		}else{
			text += "<b style='color:red'>- <u>Risultato errato</u> (dentro un errore relativo del 10%). </b>";
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

	text = "- Risulato inserito: ";
	text += x;	
	text += "<br>";

	X = (a*Math.pow(10,k));

	text += "- Risulato corretto: ";
	text += X;	
	text += "<br>";

	if (isNaN(x) || isNaN(a) || isNaN(k)){
		text += "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( x - X );
		relErr = err/x;
		if(relErr <= 0.1){
			text += "<b style='color:green'>- Risultato corretto (dentro un errore relativo del 10%). </b>";
			correct = 1;
		}else{
			text += "<b style='color:red'>- <u>Risultato errato</u> (dentro un errore relativo del 10%). </b>";
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

		text = "- Valore numerico esatto = " + x + "<br>" + "- Ordine di grandezza = " + O;
	
		//text = text + "<br>" + "A_approx = " + A_approx + "<br>" + "K_approx = " + K_approx + "<br>" + "O = " + O + "<br>";
	
		if(flag_approx==0){
			text = text + "<br>" + "<b style='color:red;'>- <u>Approssimazione errata</u>. </b>";
		}else if(flag_approx==1){
			text = text + "<br>" + "<b style='color:green;'>- Approssimazione corretta. </b>";
			correct += correct_approx;
		}if(flag_order==0){
			text = text + "<b style='color:red;'> <u>Ordine di grandezza errato</u>. </b>";
		}else if(flag_order==1){
			text = text + "<b style='color:green;'> Ordine di grandezza corretto. </b>";
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
	Y = x*ConvFact;

	text = "- Risulato inserito: ";
	text += y;	
	text += "<br>";

	text += "- Risulato corretto: ";
	text += Y;	
	text += "<br>";

	if (isNaN(y)){
		text += "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( y - Y );
		relErr = err/y;
		//document.writeln(relErr);
		if(relErr <= 0.1){
			text += "<b style='color:green'>- Risultato corretto (dentro un errore relativo del 10%). </b>";
			correct = 1;
		}else{
			text += "<b style='color:red'>- <u>Risultato errato</u> (dentro un errore relativo del 10%). </b>";
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
	Y = x*ConvFact;

	text = "- Risulato inserito: ";
	text += y;	
	text += "<br>";

	text += "- Risulato corretto: ";
	text += Y;	
	text += "<br>";

	if (isNaN(y)){
		text += "Input non valido";
		correct = 0;
	}else{
		err = Math.abs( y - Y );
		relErr = err/y;
		if(relErr <= 0.1){
			text += "<b style='color:green'>- Risultato corretto (dentro un errore relativo del 10%). </b>";
			correct = 1;
		}else{
			text += "<b style='color:red'>- <u>Risultato errato</u> (dentro un errore relativo del 10%). </b>";
			correct = 0;
		}

	}
	
	document.getElementById(id_result).innerHTML = text;		
	return [w*correct, w];

}


function verifyDensityMassSI(id_density,id_volume,id_ansLet,id_ansLetNum,id_ansLetDen,id_ansNum,id_ansA,id_ansK,id_result,id_pointsAvail,id_points){
 
	var w_text, w, d_text, d, V_text, V, Let, LetNum, LetDen, m, a, k, flag_formula, flag_result, flag_sciNot, pointsAvail_text, pointsAvail, points, text;

	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);
	d_text = document.getElementById(id_density).innerHTML;
	d = parseInt(d_text, 10);
	V_text = document.getElementById(id_volume).innerHTML;
	V = parseInt(V_text, 10);

	Let = document.getElementById(id_ansLet).value;
	Let = Let.replace(/\s/g, '');
	LetNum = document.getElementById(id_ansLetNum).value;
	LetNum = LetNum.replace(/\s/g, '');	
	LetDen = document.getElementById(id_ansLetDen).value;
	LetDen = LetDen.replace(/\s/g, '');
	m = document.getElementById(id_ansNum).value;
	a = document.getElementById(id_ansA).value;
	k = document.getElementById(id_ansK).value;
	
	m_correct = d*V;
	v = my_scinot(m_correct);
	a_correct = v[0];
	k_correct = v[1];

	err_m = Math.abs(m - m_correct);
	relErr_m = err_m/m_correct;

	err_a = Math.abs(a - a_correct);
	relErr_a = err_a/a_correct;

	/*
	document.writeln(Let);
	document.writeln(LetNum);
	document.writeln(LetDen);
	document.writeln(m);
	document.writeln(m_correct);
	document.writeln(a);
	document.writeln(a_correct);
	document.writeln(k);
	document.writeln(k_correct);
	*/

	if(Let=="m" && (LetNum=="Vd" || LetNum=="dV" || LetNum=="V*d" || LetNum=="d*V" || LetNum=="V d" || LetNum=="d V") && (LetDen=="" || LetDen=="1") ){
		flag_formula = 1;
	}else{
		flag_formula = 0;
	}
	
	if(relErr_m <= 0.1){
		flag_result = 1;
	}else{
		flag_result = 0;
	}
	
	if(relErr_a <= 0.1 && a<10 && a>=1 && k==k_correct){
		flag_sciNot = 1;
	}else{
		flag_sciNot = 0;
	}

	/*
	document.writeln(flag_formula);
	document.writeln(flag_result);
	document.writeln(flag_sciNot);
	*/
	
	text = "- Risulato inserito: ";
	text += Let + " = " + "( " + LetNum + " )" + " / " + "( " + LetDen + " )" + " = ";
	text += m + " kg = ";	
	text += a + " &middot 10" + "<sup>" + k + "</sup> kg.";
	text += "<br>";

	text += "- Risulato corretto: ";
	text += "m" + " = " + "( " + "dV" + " )" + " / " + "( " + "" + " )" + " = " ;
	text += m_correct + " kg = ";	
	text += a_correct + " &middot 10" + "<sup>" + k_correct + "</sup> kg."	
	text += "<br>";

	if(flag_formula==1 && flag_result==1 && flag_sciNot==1){
		text += "<b style='color:green'>- Risultato corretto. </b>";
		points = 6; 
	}else if(flag_formula==1 && flag_result==0 && flag_sciNot==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato numerico errato</u>, <u>notazione scientifica errata</u>. </b>";
		points = 2; 
	}else if(flag_formula==1 && flag_result==1 && flag_sciNot==0){
		text += "<b style='color:orange'>- Formula corretta, risultato numerico corretto, <u>notazione scientifica errata</u>. </b>";		
		points = 5; 
	}else if(flag_formula==1 && flag_result==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato numerico errato</u>, notazione scientifica corretta. </b>";
		points = 5; 
	}else if(flag_formula==0 && flag_result==1 && flag_sciNot==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato numerico corretto, notazione scientifica corretta. </b>";
		points = 3; 
	}else if(flag_formula==0 && flag_result==1 && flag_sciNot==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato numerico corretto, <u>notazione scientifica errata</u>. </b>"; 
		points = 4; 
	}else if(flag_formula==0 && flag_result==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, <u>risultato numerico errato</u>, notazione scientifica corretta. </b>";
		points = 4; 
	}else if(flag_formula==0 && flag_result==0 && flag_sciNot==0){
		text += "<b style='color:red'>- <u>Risultato errato</u>. </b>";
		points = 0; 
	}
	
	/*
	document.writeln(text);	
	document.writeln(points);	
	document.writeln(id_result);
	document.writeln(id_points);
	*/

	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	
	
	return [points, pointsAvail];	
}









function verifyDensityMassUnits(id_density,id_volume,id_ansLet,id_ansLetNum,id_ansLetDen,id_ansNumKg,id_ansA,id_ansK,id_ansNumG,id_result,id_pointsAvail,id_points){
 
	var w_text, w, d_text, d, V_text, V, Let, LetNum, LetDen, m, a, k, flag_formula, flag_resultKg, flag_sciNot, flag_resultG, pointsAvail_text, pointsAvail, points, text;

	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);
	d_text = document.getElementById(id_density).innerHTML;
	d = parseInt(d_text, 10);
	V_text = document.getElementById(id_volume).innerHTML;
	V = parseInt(V_text, 10);

	Let = document.getElementById(id_ansLet).value;
	Let = Let.replace(/\s/g, '');
	LetNum = document.getElementById(id_ansLetNum).value;
	LetNum = LetNum.replace(/\s/g, '');	
	LetDen = document.getElementById(id_ansLetDen).value;
	LetDen = LetDen.replace(/\s/g, '');
	mKg = document.getElementById(id_ansNumKg).value;
	a = document.getElementById(id_ansA).value;
	k = document.getElementById(id_ansK).value;
	mG = document.getElementById(id_ansNumG).value;	

	mKg_correct = d*V*Math.pow(10,-6);
	v = my_scinot(mKg_correct);
	a_correct = v[0];
	k_correct = v[1];
	mG_correct = mKg_correct*Math.pow(10,3)

	err_mKg = Math.abs(mKg - mKg_correct);
	relErr_mKg = err_mKg/mKg_correct;

	err_a = Math.abs(a - a_correct);
	relErr_a = err_a/a_correct;

	err_mG = Math.abs(mG - mG_correct);
	relErr_mG = err_mG/mG_correct;


	if(Let=="m" && (LetNum=="Vd" || LetNum=="dV" || LetNum=="V*d" || LetNum=="d*V" || LetNum=="V d" || LetNum=="d V") && (LetDen=="" || LetDen=="1") ){
		flag_formula = 1;
	}else{
		flag_formula = 0;
	}
	
	if(relErr_mKg <= 0.1){
		flag_resultKg = 1;
	}else{
		flag_resultKg = 0;
	}
	
	if(relErr_a <= 0.1 && a<10 && a>=1 && k==k_correct){
		flag_sciNot = 1;
	}else{
		flag_sciNot = 0;
	}

	if(relErr_mG <= 0.1){
		flag_resultG = 1;
	}else{
		flag_resultG = 0;
	}
	
	text += "- Risulato inserito: ";
	text += Let + " = " + "( " + LetNum + " )" + " / " + "( " + LetDen + " )" + " = " ;
	text += mKg + " kg = ";	
	text += a + " &middot 10" + "<sup>" + k + "</sup> kg = "	
	text += mG + " g."
	text += "<br>";

	text += "- Risulato corretto: ";
	text += "m" + " = " + "( " + "dV" + " )" + " / " + "( " + "" + " )" + " = " ;
	text += mKg_correct + " kg = ";	
	text += a_correct + " &middot 10" + "<sup>" + k_correct + "</sup> kg = "	
	text += mG_correct + " g."
	text += "<br>";

	if(flag_formula==1 && flag_resultKg==1 && flag_sciNot==1 && flag_resultG==1){
		text += "<b style='color:green'>- Risultato corretto. </b>";
		points = 10; 
	}else if(flag_formula==1 && flag_resultKg==1 && flag_sciNot==1  && flag_resultG==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, notazione scientifica corretto, <u>risultato in g errato</u>. </b>";
		points = 7; 
	}else if(flag_formula==1 && flag_resultKg==0 && flag_sciNot==0  && flag_resultG==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>";
		points = 2; 
	}else if(flag_formula==1 && flag_resultKg==1 && flag_sciNot==0 && flag_resultG==0){
		text += "<b style='color:orange'>- Formula corretta, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>";		
		points = 6; 
	}else if(flag_formula==1 && flag_resultKg==1 && flag_sciNot==0 && flag_resultG==1){
		text += "<b style='color:orange'>- Formula corretta, risultato in kg corretto, <u>notazione scientifica errata</u>, risultato in g corretto. </b>";		
		points = 7; 
	}else if(flag_formula==1 && flag_resultKg==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, notazione scientifica corretta. </b>";
		points = 7; 
	}else if(flag_formula==0 && flag_resultKg==1 && flag_sciNot==1 && flag_resultG==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, notazione scientifica corretta, <u>risultato in g errato</u>. </b>";
		points = 5; 
	}else if(flag_formula==0 && flag_resultKg==1 && flag_sciNot==1 && flag_resultG==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, notazione scientifica corretta, risultato in g corretto. </b>";
		points = 6; 
	}else if(flag_formula==0 && flag_resultKg==1 && flag_sciNot==0 && flag_resultG==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>"; 
		points = 6; 
	}else  if(flag_formula==0 && flag_resultKg==1 && flag_sciNot==0 && flag_resultG==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, risultato in g corretto. </b>"; 
		points = 7; 
	}else if(flag_formula==0 && flag_resultKg==0 && flag_sciNot==1 && flag_resultG==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>"; 
		points = 5; 
	}else  if(flag_formula==0 && flag_resultKg==0 && flag_sciNot==1 && flag_resultG==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, <u>risultato in kg errato</u>, notazione scientifica corretta, risultato in g corretto. </b>"; 
		points = 6; 
	}else if(flag_formula==0 && flag_resultKg==0 && flag_sciNot==0 && flag_resultG==0){
		text += "<b style='color:red'>- <u>Risultato errato</u>. </b>";
		points = 0; 
	}
	
	/*
	document.writeln(text);	
	document.writeln(points);	
	document.writeln(id_result);
	document.writeln(id_points);
	*/

	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	
	
	return [points, pointsAvail];
}














function verifyDensityVolumeSI(id_density,id_mass,id_ansLet,id_ansLetNum,id_ansLetDen,id_ansNum,id_ansA,id_ansK,id_result,id_pointsAvail,id_points){
 
	var w_text, w, d_text, d, V_text, V, Let, LetNum, LetDen, m, a, k, flag_formula, flag_result, flag_sciNot, pointsAvail_text, pointsAvail, points, text;

	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);
	d_text = document.getElementById(id_density).innerHTML;
	d = parseInt(d_text, 10);
	m_text = document.getElementById(id_mass).innerHTML;
	m = parseInt(m_text, 10);

	Let = document.getElementById(id_ansLet).value;
	Let = Let.replace(/\s/g, '');
	LetNum = document.getElementById(id_ansLetNum).value;
	LetNum = LetNum.replace(/\s/g, '');
	LetDen = document.getElementById(id_ansLetDen).value;
	LetDen = LetDen.replace(/\s/g, '');
	V = document.getElementById(id_ansNum).value;
	a = document.getElementById(id_ansA).value;
	k = document.getElementById(id_ansK).value;

	V_correct = m/d;
	v = my_scinot(V_correct);
	a_correct = v[0];
	k_correct = v[1];

	err_V = Math.abs(V - V_correct);
	relErr_V = err_V/V_correct;

	err_a = Math.abs(a - a_correct);
	relErr_a = err_a/a_correct;

	/*
	document.writeln(Let);
	document.writeln(LetNum);
	document.writeln(LetDen);
	document.writeln(V);
	document.writeln(V_correct);
	document.writeln(a);
	document.writeln(a_correct);
	document.writeln(k);
	document.writeln(k_correct);
	*/

	if(Let=="V" && LetNum=="m" && LetDen=="d"){
		flag_formula = 1;
	}else{
		flag_formula = 0;
	}
	
	if(relErr_V <= 0.1){
		flag_result = 1;
	}else{
		flag_result = 0;
	}
	
	if(relErr_a <= 0.1 && a<10 && a>=1 && k==k_correct){
		flag_sciNot = 1;
	}else{
		flag_sciNot = 0;
	}

	/*
	document.writeln(flag_formula);
	document.writeln(flag_result);
	document.writeln(flag_sciNot);
	*/
	
	text = "- Risulato inserito: ";
	text += Let + " = " + "( " + LetNum + " )" + " / " + "( " + LetDen + " )" + " = ";
	text += V + " kg = ";	
	text += a + " &middot 10" + "<sup>" + k + "</sup> m<sup>3</sup>.";
	text += "<br>";

	text += "- Risulato corretto: ";
	text += "V" + " = " + "( " + "m" + " )" + " / " + "( " + "d" + " )" + " = " ;
	text += V_correct + " m<sup>3</sup> = ";	
	text += a_correct + " &middot 10" + "<sup>" + k_correct + "</sup> m<sup>3</sup>."	
	text += "<br>";

	if(flag_formula==1 && flag_result==1 && flag_sciNot==1){
		text += "<b style='color:green'>- Risultato corretto. </b>";
		points = 6; 
	}else if(flag_formula==1 && flag_result==0 && flag_sciNot==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato numerico errato</u>, <u>notazione scientifica errata</u>. </b>";
		points = 2; 
	}else if(flag_formula==1 && flag_result==1 && flag_sciNot==0){
		text += "<b style='color:orange'>- Formula corretta, risultato numerico corretto, <u>notazione scientifica errata</u>. </b>";		
		points = 5; 
	}else if(flag_formula==1 && flag_result==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato numerico errato</u>, notazione scientifica corretta. </b>";
		points = 5; 
	}else if(flag_formula==0 && flag_result==1 && flag_sciNot==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato numerico corretto, notazione scientifica corretta. </b>";
		points = 3; 
	}else if(flag_formula==0 && flag_result==1 && flag_sciNot==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato numerico corretto, <u>notazione scientifica errata</u>. </b>"; 
		points = 4; 
	}else if(flag_formula==0 && flag_result==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, <u>risultato numerico errato</u>, notazione scientifica corretta. </b>";
		points = 4; 
	}else if(flag_formula==0 && flag_result==0 && flag_sciNot==0){
		text += "<b style='color:red'>- <u>Risultato errato</u>. </b>";
		points = 0; 
	}
	
	/*
	document.writeln(text);	
	document.writeln(points);	
	document.writeln(id_result);
	document.writeln(id_points);
	*/

	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	
	
	return [points, pointsAvail];	
}












function verifyDensityVolumeUnits(id_density,id_mass,id_ansLet,id_ansLetNum,id_ansLetDen,id_ansNumM3,id_ansA,id_ansK,id_ansNumCM3,id_result,id_pointsAvail,id_points){
 
	var w_text, w, d_text, d, V_text, V, Let, LetNum, LetDen, m, a, k, flag_formula, flag_resultKg, flag_sciNot, flag_resultG, pointsAvail_text, pointsAvail, points, text;

	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);
	d_text = document.getElementById(id_density).innerHTML;
	d = parseInt(d_text, 10);
	m_text = document.getElementById(id_mass).innerHTML;
	m = parseInt(m_text, 10);

	
	Let = document.getElementById(id_ansLet).value;
	Let = Let.replace(/\s/g, '');
	LetNum = document.getElementById(id_ansLetNum).value;
	LetNum = LetNum.replace(/\s/g, '');
	LetDen = document.getElementById(id_ansLetDen).value;
	LetDen = LetDen.replace(/\s/g, '');
	Vm3 = document.getElementById(id_ansNumM3).value;
	a = document.getElementById(id_ansA).value;
	k = document.getElementById(id_ansK).value;
	Vcm3 = document.getElementById(id_ansNumCM3).value;	
		
	Vm3_correct = m/d*Math.pow(10,-3);
	v = my_scinot(Vm3_correct);
	a_correct = v[0];
	k_correct = v[1];
	Vcm3_correct = Vm3_correct*Math.pow(10,6)

	err_Vm3 = Math.abs(Vm3 - Vm3_correct);
	relErr_Vm3 = err_Vm3/Vm3_correct;

	err_a = Math.abs(a - a_correct);
	relErr_a = err_a/a_correct;

	err_Vcm3 = Math.abs(Vcm3 - Vcm3_correct);
	relErr_Vcm3 = err_Vcm3/Vcm3_correct;

	/*
	document.writeln(Let);
	document.writeln(LetNum);
	document.writeln(LetDen);
	document.writeln(Vm3);
	document.writeln(Vm3_correct);
	document.writeln(a);
	document.writeln(a_correct);
	document.writeln(k);
	document.writeln(k_correct);
	document.writeln(Vcm3);
	document.writeln(Vcm3_correct);
	*/
	
	if(Let=="V" && LetNum=="m" && LetDen=="d"){
		flag_formula = 1;
	}else{
		flag_formula = 0;
	}
	
	if(relErr_Vm3 <= 0.1){
		flag_result_Vm3 = 1;
	}else{
		flag_result_Vm3 = 0;
	}
	
	if(relErr_a <= 0.1 && a<10 && a>=1 && k==k_correct){
		flag_sciNot = 1;
	}else{
		flag_sciNot = 0;
	}

	if(relErr_Vcm3 <= 0.1){
		flag_result_Vcm3 = 1;
	}else{
		flag_result_Vcm3 = 0;
	}
	
	text += "- Risulato inserito: ";
	text += Let + " = " + "( " + LetNum + " )" + " / " + "( " + LetDen + " )" + " = " ;
	text += Vm3 + " m<sup>3</sup> = ";	
	text += a + " &middot 10" + "<sup>" + k + "</sup> m<sup>3</sup> = "	
	text += Vcm3 + " cm<sup>3</sup>."
	text += "<br>";

	text += "- Risulato corretto: ";
	text += "V" + " = " + "( " + "m" + " )" + " / " + "( " + "d" + " )" + " = " ;
	text += Vm3_correct + " m<sup>3</sup> = ";	
	text += a_correct + " &middot 10" + "<sup>" + k_correct + "</sup> m<sup>3</sup> = "	
	text += Vcm3_correct + " cm<sup>3</sup>."
	text += "<br>";

	/*
	document.writeln(flag_formula);
	document.writeln(flag_result_Vm3);
	document.writeln(flag_sciNot);
	document.writeln(flag_result_Vcm3);
	*/

	if(flag_formula==1 && flag_result_Vm3==1 && flag_sciNot==1 && flag_result_Vcm3==1){
		text += "<b style='color:green'>- Risultato corretto. </b>";
		points = 10;
	}else if(flag_formula==1 && flag_result_Vm3==1 && flag_sciNot==1  && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, notazione scientifica corretto, <u>risultato in g errato</u>. </b>";
		points = 7; 
	}else if(flag_formula==1 && flag_result_Vm3==0 && flag_sciNot==0  && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>";
		points = 2; 
	}else if(flag_formula==1 && flag_result_Vm3==1 && flag_sciNot==0 && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- Formula corretta, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>";		
		points = 6; 
	}else if(flag_formula==1 && flag_result_Vm3==1 && flag_sciNot==0 && flag_result_Vcm3==1){
		text += "<b style='color:orange'>- Formula corretta, risultato in kg corretto, <u>notazione scientifica errata</u>, risultato in g corretto. </b>";		
		points = 7; 
	}else if(flag_formula==1 && flag_result_Vm3==0 && flag_sciNot==1){
		text += "<b style='color:orange'>- Formula corretta, <u>risultato in kg errato</u>, notazione scientifica corretta. </b>";
		points = 7; 
	}else if(flag_formula==0 && flag_result_Vm3==1 && flag_sciNot==1 && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, notazione scientifica corretta, <u>risultato in g errato</u>. </b>";
		points = 5; 
	}else if(flag_formula==0 && flag_result_Vm3==1 && flag_sciNot==1 && flag_result_Vcm3==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, notazione scientifica corretta, risultato in g corretto. </b>";
		points = 6; 
	}else if(flag_formula==0 && flag_result_Vm3==1 && flag_sciNot==0 && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>"; 
		points = 6; 
	}else  if(flag_formula==0 && flag_result_Vm3==1 && flag_sciNot==0 && flag_result_Vcm3==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, risultato in g corretto. </b>"; 
		points = 7; 
	}else if(flag_formula==0 && flag_result_Vm3==0 && flag_sciNot==1 && flag_result_Vcm3==0){
		text += "<b style='color:orange'>- <u>Formula errata</u>, risultato in kg corretto, <u>notazione scientifica errata</u>, <u>risultato in g errato</u>. </b>"; 
		points = 5; 
	}else  if(flag_formula==0 && flag_result_Vm3==0 && flag_sciNot==1 && flag_result_Vcm3==1){
		text += "<b style='color:orange'>- <u>Formula errata</u>, <u>risultato in kg errato</u>, notazione scientifica corretta, risultato in g corretto. </b>"; 
		points = 6; 
	}else if(flag_formula==0 && flag_result_Vm3==0 && flag_sciNot==0 && flag_result_Vcm3==0){
		text += "<b style='color:red'>- <u>Risultato errato</u>. </b>";
		points = 0; 
	}
	
	/*
	document.writeln(text);
	document.writeln(id_result);
	document.writeln(id_points);
	document.writeln(id_points);
	*/

	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	

	/*
	document.writeln(text);	
	document.writeln(points);	
	*/

	return [points, pointsAvail];
}





function verifyDensityHcilinder(id_density,id_mass,id_r,id_ans_hMM,id_result,id_pointsAvail,id_points){

	var d_text, d, m_text, m, r_text, r, hMM, hMM_correct, err_hMM, pointsAvail_text, pointsAvail, points, text;

	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);
	d_text = document.getElementById(id_density).innerHTML;
	d = parseInt(d_text, 10);
	m_text = document.getElementById(id_mass).innerHTML;
	m = parseInt(m_text, 10);
	r_text = document.getElementById(id_r).innerHTML;
	r = parseInt(r_text, 10);

	hMM = document.getElementById(id_ans_hMM).value;	
	
//document.writeln(d);
//document.writeln(m);
//document.writeln(r);	
	hMM_correct = Math.pow(10,6)*m/(3.14*r*r*d);
	
	err_hMM = Math.abs(hMM - hMM_correct);
	relErr_hMM = err_hMM/hMM_correct;
	
	if(relErr_hMM <= 0.1){
		flag_result = 1;
	}else{
		flag_result = 0;
	}

	text += "- Risulato inserito: ";
	text += "h = " + hMM + ".";
	text += "<br>";

	text += "- Risulato corretto: ";
		text += "h = " + hMM_correct + "." ;
	text += "<br>";

	if(flag_result==1){
		text += "<b style='color:green'>- Risultato corretto. </b>";
		points = pointsAvail; 
	}else if(flag_result==0){
		text += "<b style='color:red'>- <u>Risultato errato</u>. </b>";
		points = 0; 

	}
	
	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	

	return [points, pointsAvail];

}






function verifyInvFormula4(id_NumSx,id_DenSx,id_NumDx,id_DenDx,id_Num_0,id_Den_0,id_Num_1,id_Den_1,id_Num_2,id_Den_2,id_Num_3,id_Den_3,id_result,id_pointsAvail,id_points){
	
	var v=["X","X","X","X"], Num=["X","X","X","X"], Den=["X","X","X","X"], flag=[0,0,0,0], pointsAvail_text, pointsAvail_text, pointsAvail, points, text;
	
	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);

	v[0] = document.getElementById(id_NumSx).innerHTML;
	v[1] = document.getElementById(id_DenSx).innerHTML;
	v[2] = document.getElementById(id_NumDx).innerHTML;	
	v[3] = document.getElementById(id_DenDx).innerHTML;

	Den[0] = document.getElementById(id_Den_0).value;
	Num[0] = document.getElementById(id_Num_0).value;
	Den[1] = document.getElementById(id_Den_1).value;
	Num[1] = document.getElementById(id_Num_1).value;
	Den[2] = document.getElementById(id_Den_2).value;
	Num[2] = document.getElementById(id_Num_2).value;
	Den[3] = document.getElementById(id_Den_3).value;
	Num[3] = document.getElementById(id_Num_3).value;

	if( ( Num[0]==v[1]+v[2] || Num[0]==v[2]+v[1] || Num[0]==v[1]+"*"+v[2] || Num[0]==v[2]+"*"+v[1] ) && Den[0]==v[3]){
		flag[0] = 1;
	}else{
		flag[0] = 0;
	}

	if( ( Num[1]==v[0]+v[3] || Num[1]==v[3]+v[0] || Num[1]==v[0]+"*"+v[3] || Num[1]==v[3]+"*"+v[0] ) && Den[1]==v[2]){
		flag[1] = 1;
	}else{
		flag[1] = 0;
	}
	
	if( ( Num[2]==v[0]+v[3] || Num[2]==v[3]+v[0] || Num[2]==v[0]+"*"+v[3] || Num[2]==v[3]+"*"+v[0] ) && Den[2]==v[1]){
		flag[2] = 1;
	}else{
		flag[2] = 0;
	}

	if( ( Num[3]==v[1]+v[2] || Num[3]==v[2]+v[1] || Num[3]==v[1]+"*"+v[2] || Num[3]==v[2]+"*"+v[1] ) && Den[3]==v[0]){
		flag[3] = 1;
	}else{
		flag[3] = 0;
	}

	points = 0;
	points_per_es = Math.round(pointsAvail/v.length)
	for(i=0;i<v.length;i++){
		points += flag[i]*points_per_es;
	}	
	
	text = "- Risulato inserito: ";
	text += v[0] + " = " + "( " + Num[0] + " )" + " / " + "( " + Den[0] + " );     ";
	text += v[1] + " = " + "( " + Num[1] + " )" + " / " + "( " + Den[1] + " );     ";
	text += v[2] + " = " + "( " + Num[2] + " )" + " / " + "( " + Den[2] + " );     ";
	text += v[3] + " = " + "( " + Num[3] + " )" + " / " + "( " + Den[3] + " ).     ";

	text += "<br>";
	text += "- Risulato corretto: ";
	text += v[0] + " = " + "( " + v[1] + "*" + v[2] + " )" + " / " + "( " + v[3] + " );     ";
	text += v[1] + " = " + "( " + v[0] + "*" + v[3] + " )" + " / " + "( " + v[2] + " );     ";
	text += v[2] + " = " + "( " + v[0] + "*" + v[3] + " )" + " / " + "( " + v[1] + " );     ";
	text += v[3] + " = " + "( " + v[1] + "*" + v[2] + " )" + " / " + "( " + v[0] + " );     ";
	
	text += "<br>";
	if(points==0){
		text += "<b style='color:red'>";
	}else if(points==pointsAvail){
		text += "<b style='color:green'>";
	}else{
		text += "<b style='color:orange'>";
	}
	text += "- Exercizi errati (0) o corretti (1): " + flag[0] + "; " + flag[1] + "; " + flag[2] + "; " + flag[3] + ".";
	text += "</b>";
	
	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	

	return [points, pointsAvail];
}




function verifyInvFormula5(id_NumSx,id_DenSx,id_NumDx,id_DenDx1,id_DenDx2,id_Num_0,id_Den_0,id_Num_1,id_Den_1,id_Num_2,id_Den_2,id_Num_3,id_Den_3,id_Num_4,id_Den_4,id_result,id_pointsAvail,id_points){
	
	var v=["X","X","X","X","X"], Num=["X","X","X","X","X"], Den=["X","X","X","X","X"], flag=[0,0,0,0,0], pointsAvail_text, pointsAvail_text, pointsAvail, points, text;
	
	pointsAvail_text = document.getElementById(id_pointsAvail).innerHTML;
	pointsAvail = parseInt(pointsAvail_text, 10);

	v[0] = document.getElementById(id_NumSx).innerHTML;
	v[1] = document.getElementById(id_DenSx).innerHTML;
	v[2] = document.getElementById(id_NumDx).innerHTML;	
	v[3] = document.getElementById(id_DenDx1).innerHTML;
	v[4] = document.getElementById(id_DenDx2).innerHTML;

	Den[0] = document.getElementById(id_Den_0).value;
	Num[0] = document.getElementById(id_Num_0).value;
	Den[1] = document.getElementById(id_Den_1).value;
	Num[1] = document.getElementById(id_Num_1).value;
	Den[2] = document.getElementById(id_Den_2).value;
	Num[2] = document.getElementById(id_Num_2).value;
	Den[3] = document.getElementById(id_Den_3).value;
	Num[3] = document.getElementById(id_Num_3).value;
	Den[4] = document.getElementById(id_Den_4).value;
	Num[4] = document.getElementById(id_Num_4).value;
	

	for(i=0;i<Den.length;i++){
		Den[i] = Den[i].replace(/\s/g, '');
	}
	for(i=0;i<Num.length;i++){
		Num[i] = Num[i].replace(/\s/g, '');
	}

	if( ( Num[0]==v[1]+v[2] || Num[0]==v[2]+v[1] || Num[0]==v[1]+"*"+v[2] || Num[0]==v[2]+"*"+v[1] ) && ( Den[0]==v[3]+v[4] || Den[0]==v[4]+v[3] || Den[0]==v[3]+"*"+v[4] || Den[0]==v[4]+"*"+v[3] )){
		flag[0] = 1;
	}else{
		flag[0] = 0;
	}

	if( ( Num[1]==v[0]+v[3]+v[4] || Num[1]==v[0]+v[4]+v[3] || Num[1]==v[3]+v[4]+v[0] || Num[1]==v[3]+v[0]+v[4] || Num[1]==v[4]+v[3]+v[0] || Num[1]==v[4]+v[0]+v[3] || Num[1]==v[0]+"*"+v[3]+"*"+v[4] || Num[1]==v[0]+"*"+v[4]+"*"+v[3] || Num[1]==v[3]+"*"+v[4]+"*"+v[0] || Num[1]==v[3]+"*"+v[0]+"*"+v[4] || Num[1]==v[4]+"*"+v[3]+"*"+v[0] || Num[1]==v[4]+"*"+v[0]+"*"+v[3] ) && Den[1]==v[2]){
		flag[1] = 1;
	}else{
		flag[1] = 0;
	}
	
	if( ( Num[2]==v[0]+v[3]+v[4] || Num[2]==v[0]+v[4]+v[3] || Num[2]==v[3]+v[4]+v[0] || Num[2]==v[3]+v[0]+v[4] || Num[2]==v[4]+v[3]+v[0] || Num[2]==v[4]+v[0]+v[3] || Num[2]==v[0]+"*"+v[3]+"*"+v[4] || Num[2]==v[0]+"*"+v[4]+"*"+v[3] || Num[2]==v[3]+"*"+v[4]+"*"+v[0] || Num[2]==v[3]+"*"+v[0]+"*"+v[4] || Num[2]==v[4]+"*"+v[3]+"*"+v[0] || Num[2]==v[4]+"*"+v[0]+"*"+v[3] ) && Den[2]==v[1]){
		flag[2] = 1;
	}else{
		flag[2] = 0;
	}

	if( ( Num[3]==v[1]+v[2] || Num[3]==v[2]+v[1] || Num[3]==v[1]+"*"+v[2] || Num[3]==v[2]+"*"+v[1] ) && ( Den[3]==v[0]+v[4] || Den[3]==v[4]+v[0] || Den[3]==v[0]+"*"+v[4] || Den[3]==v[4]+"*"+v[0] )){
		flag[3] = 1;
	}else{
		flag[3] = 0;
	}
	
	if( ( Num[4]==v[1]+v[2] || Num[4]==v[2]+v[1] || Num[4]==v[1]+"*"+v[2] || Num[4]==v[2]+"*"+v[1] ) && ( Den[4]==v[0]+v[3] || Den[4]==v[3]+v[0] || Den[4]==v[0]+"*"+v[3] || Den[4]==v[3]+"*"+v[0] )){
		flag[4] = 1;
	}else{
		flag[4] = 0;
	}

	points = 0;
	points_per_es = Math.round(pointsAvail/v.length)
	for(i=0;i<v.length;i++){
		points += flag[i]*points_per_es;
	}	
	
	text = "- Risulato inserito: ";
	text += v[0] + " = " + "( " + Num[0] + " )" + " / " + "( " + Den[0] + " );     ";
	text += v[1] + " = " + "( " + Num[1] + " )" + " / " + "( " + Den[1] + " );     ";
	text += v[2] + " = " + "( " + Num[2] + " )" + " / " + "( " + Den[2] + " );     ";
	text += v[3] + " = " + "( " + Num[3] + " )" + " / " + "( " + Den[3] + " ).     ";
	text += v[4] + " = " + "( " + Num[4] + " )" + " / " + "( " + Den[4] + " ).     ";

	text += "<br>";
	text += "- Risulato corretto: ";
	text += v[0] + " = " + "( " + v[1] + "*" + v[2] + " )" + " / " + "( " + v[3] + "*" + v[4] + " );     ";
	text += v[1] + " = " + "( " + v[0] + "*" + v[3] + "*" + v[4] + " )" + " / " + "( " + v[2] + " );     ";
	text += v[2] + " = " + "( " + v[0] + "*" + v[3] + "*" + v[4] + " )" + " / " + "( " + v[1] + " );     ";
	text += v[3] + " = " + "( " + v[1] + "*" + v[2] + " )" + " / " + "( " + v[0] + "*" + v[4] + " );     ";
	text += v[4] + " = " + "( " + v[1] + "*" + v[2] + " )" + " / " + "( " + v[0] + "*" + v[3] + " );     ";
	
	text += "<br>";
	if(points==0){
		text += "<b style='color:red'>";
	}else if(points==pointsAvail){
		text += "<b style='color:green'>";
	}else{
		text += "<b style='color:orange'>";
	}
	text += "- Exercizi errati (0) o corretti (1): " + flag[0] + "; " + flag[1] + "; " + flag[2] + "; " + flag[3] + "; " + flag[4] + ".";
	text += "</b>";
	
	document.getElementById(id_result).innerHTML = text;
	document.getElementById(id_points).innerHTML = points;	

	return [points, pointsAvail];
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



