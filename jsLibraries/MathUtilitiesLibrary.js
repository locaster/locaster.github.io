function my_log10(x) {
	return Math.log(x) / Math.log(10);
}


// Arrotonda un numero x con dec cifre decimali.
function my_round(x,dec) {
	pot = Math.pow(10,dec);
	r = Math.round(x*pot)/pot;  			
	return r;
}



// Calcola a e k dell'espressione in notazione scientifica del numero x.
function my_scinot(x) {
	k = Math.floor(my_log10(x));
	a = Math.pow(10,my_log10(x)-k);
	return [a,k];
}



// Calcola a e k dell'espressione in notazione scientifica del numero x.
function my_convTenPot(char) {
	var x;
	
	if(char == "k"){
		x = 3;
	}else if(char == "h"){
		x = 2;
	}else if(char == "a"){
		x = 1;
	}else if(char == undefined){
		x = 0;
	}else if(char == "d"){
		x = -1;
	}else if(char == "c"){
		x = -2;
	}else if(char == "m"){
		x = -3;
	}

	return x
}



function my_copy(id_toCopy,id_toReplace) {
	var x, y;

	x = document.getElementById(id_toCopy).innerHTML;
	y = x;
	document.getElementById(id_toReplace).innerHTML = y;
}



function my_random(cs,k){
	var a0, cs, pot, a, k1, k, x;	

	do{
		a = 1 + 9*Math.random();
	}while(a === 10)
	
	a = my_round(a0,cs-1);
	x = a*(Math.pow(10,k));

	return x;		
}


function my_random_rangeK_OLD(max_sign,max_k){
	var a0, cs, pot, a, k0, k, x;	

	do{
		a0 = 1 + 9*Math.random();
	}while(a0 === 10)
	
	c = Math.round(1+Math.random()*(max_sign-1));
	a = my_round(a0,c-1);
	k0 = Math.round(max_k*Math.random());
	sign_k = Math.random();
	if(sign_k<0.5){
		k=-k0;
	}else{
		k=k0;
	}
	x = a*(Math.pow(10,k));

	return x;		
}

function my_random_rangeK(max_sign,min_k,max_k){
	var a0, cs, pot, a, Dk, k0, k, x;	

	do{
		a0 = 1 + 9*Math.random();
	}while(a0 === 10)
	
	c = Math.round(1+Math.random()*(max_sign-1));
	a = my_round(a0,c-1);	
	//a = math.round(a0,c-1); QUESTA RIGA USA LA FUNZIONE math.round() DELLA LIBRERIA math.js CHE HO SCARICATO MA FA ESATTAMENTE LO STESSO. 	
	Dk = max_k - min_k;
	k0 = Math.round(Dk*Math.random());			
	k = k0 + min_k;
	x = a*(Math.pow(10,k));

	/* TENTATIVO NON FUNZIONANTE DI RISOLVERE I PROBLEMI DI ARROTONDAMENTO.
	x1 = x*Math.pow(10,-k+c-1);
	x2 = Math.round(x1);
	x3 = x2*Math.pow(10,+k-c+1);
	x = x3;
	document.writeln(x);	
	document.writeln(x1);	
	document.writeln(x2);
	document.writeln(x3);
	*/

	return x;		
}




function my_random_rangeK_old(max_sign,min_k,max_k){
	var a0, cs, pot, a, Dk, k0, k, x;	

	do{
		a0 = 1 + 9*Math.random();
	}while(a0 === 10)
	
	c = Math.round(1+Math.random()*(max_sign-1));
	a = my_round(a0,c-1);
	Dk = max_k - min_k;
	k0 = Math.round(Dk*Math.random());			
	k = k0 + min_k;
	x = a*(Math.pow(10,k));

	//document.writeln(Dk);
	//document.writeln(k0);
	//document.writeln(min_k);
	//document.writeln(k);		
			
	return x;		
}
