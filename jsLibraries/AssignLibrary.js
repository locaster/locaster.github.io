




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




/*****************************************
****** SCRIVO E CRIPTO IL RISULTATO ******
******************************************/		

function writeAndCriptoResult(pointsTotRealized,pointsTotAvail,id_pointsTotRealized,id_pointsTotAvail,id_criptoRand,id_cripto){
	
	document.getElementById(id_pointsTotRealized).innerHTML = pointsTotRealized;
	document.getElementById(id_pointsTotAvail).innerHTML = pointsTotAvail;

	criptoRand = Math.round(50*Math.random());
	cripto = (criptoRand + pointsTotAvail) + pointsTotRealized*pointsTotRealized;

	/*
	document.writeln(pointsTotRealized);
	document.writeln(pointsTotAvail);
	document.writeln(criptoRand);
	document.writeln(cripto);
	*/
	/*
	document.writeln(id_pointsTotRealized);
	document.writeln(id_pointsTotAvail);
	document.writeln(id_criptoRand);
	document.writeln(id_cripto);
	*/
		document.getElementById(id_criptoRand).innerHTML = criptoRand;
	document.getElementById(id_cripto).innerHTML = cripto;
	
}		




function randomAssignmentRangeK(id_num,max_sign,min_k,max_k){
				
	x = my_random_rangeK(max_sign,min_k,max_k);

	document.getElementById(id_num).innerHTML = x;		
}




function randomAssignmentIntRangeK(id_num,max_sign,min_k,max_k,avoidZero,avoidOne){
	
	if(avoidZero==1 && avoidOne==1){
		do{			
			x = Math.round(my_random_rangeK(max_sign,min_k,max_k));
		}while(x === 0 || x === 1)
	}else if(avoidZero==1 && avoidOne==0){
		do{			
			x = Math.round(my_random_rangeK(max_sign,min_k,max_k));
		}while(x === 0)
	}else if(avoidZero==0 && avoidOne==1){
		do{			
			x = Math.round(my_random_rangeK(max_sign,min_k,max_k));
		}while(x === 1)
	}else{
		x = Math.round(my_random_rangeK(max_sign,min_k,max_k));
	}	

	document.getElementById(id_num).innerHTML = x;		
}



function randomAssignmenMaterialDensity(id_material_1,id_material_2,id_density){
		
	var	vec_mat, vec_d, vec_mat, N_vec_mat, N_vec_d, N, idx;

	vec_mat = ["piombo", "argento", "oro", "ferro", "rame", "alluminio"];
	vec_d = [11300, 10500, 19300, 7860, 8890, 2700];
		
	N_vec_mat = vec_mat.length;
	N_vec_d = vec_d.length;
	if(N_vec_mat != N_vec_d){
		return("Errore: vettore dei materiali e vettore delle densità di lunghezze diversi. Vedi il codice della funzione randomAssignmenMaterialDensity.");
	}else{
		N = N_vec_d;
	}

	idx = Math.floor(Math.random()*N);
	if(idx == N){
		idx = N-1;
	}

	document.getElementById(id_material_1).innerHTML = vec_mat[idx];	
	document.getElementById(id_material_2).innerHTML = vec_mat[idx];
	document.getElementById(id_density).innerHTML = vec_d[idx];
	//return vec_d[idx];			
}




function randomAssignmenFrac4Let(id_NumSx_1,id_DenSx_1,id_NumDx_1,id_DenDx_1,id_NumSx_2,id_DenSx_2,id_NumDx_2,id_DenDx_2){

	var	vecLet, N, idx=[0,0,0,0];

	vecLet = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	N = vecLet.length;

	idx[0] = Math.floor(Math.random()*N);
	if(idx[0] == N){
		idx[0] = N-1;
	}
	
	do{
		idx[1] = Math.floor(Math.random()*N);
		if(idx[1] == N){
			idx[1] = N-1;
		}
	}while(idx[1] == idx[0])

	do{
		idx[2] = Math.floor(Math.random()*N);
		if(idx[2] == N){
			idx[2] = N-1;
		}
	}while(idx[2] == idx[0] || idx[2] == idx[1])

	do{
		idx[3] = Math.floor(Math.random()*N);
		if(idx[3] == N){
			idx[3] = N-1;
		}
	}while(idx[3] == idx[0] || idx[3] == idx[1] || idx[3] == idx[2])

	document.getElementById(id_NumSx_1).innerHTML = vecLet[idx[0]];	
	document.getElementById(id_DenSx_1).innerHTML = vecLet[idx[1]];
	document.getElementById(id_NumDx_1).innerHTML = vecLet[idx[2]];
	document.getElementById(id_DenDx_1).innerHTML = vecLet[idx[3]];	
	document.getElementById(id_NumSx_2).innerHTML = vecLet[idx[0]];	
	document.getElementById(id_DenSx_2).innerHTML = vecLet[idx[1]];
	document.getElementById(id_NumDx_2).innerHTML = vecLet[idx[2]];
	document.getElementById(id_DenDx_2).innerHTML = vecLet[idx[3]];	
			
}





function randomAssignmenFrac5Let(id_NumSx_1,id_DenSx_1,id_NumDx_1,id_DenDx1_1,id_DenDx2_1,id_NumSx_2,id_DenSx_2,id_NumDx_2,id_DenDx1_2,id_DenDx2_2){

	var	vecLet, N, idx=[0,0,0,0,0];

	vecLet = ["a", "b", "c", "d", "f", "g", "h", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	N = vecLet.length;

	idx[0] = Math.floor(Math.random()*N);
	if(idx[0] == N){
		idx[0] = N-1;
	}
	
	do{
		idx[1] = Math.floor(Math.random()*N);
		if(idx[1] == N){
			idx[1] = N-1;
		}
	}while(idx[1] == idx[0])

	do{
		idx[2] = Math.floor(Math.random()*N);
		if(idx[2] == N){
			idx[2] = N-1;
		}
	}while(idx[2] == idx[0] || idx[2] == idx[1])

	do{
		idx[3] = Math.floor(Math.random()*N);
		if(idx[3] == N){
			idx[3] = N-1;
		}
	}while(idx[3] == idx[0] || idx[3] == idx[1] || idx[3] == idx[2])

	do{
		idx[4] = Math.floor(Math.random()*N);
		if(idx[4] == N){
			idx[4] = N-1;
		}
	}while(idx[4] == idx[0] || idx[4] == idx[1] || idx[4] == idx[2] || idx[4] == idx[3])

	document.getElementById(id_NumSx_1).innerHTML = vecLet[idx[0]];	
	document.getElementById(id_DenSx_1).innerHTML = vecLet[idx[1]];
	document.getElementById(id_NumDx_1).innerHTML = vecLet[idx[2]];
	document.getElementById(id_DenDx1_1).innerHTML = vecLet[idx[3]];
	document.getElementById(id_DenDx2_1).innerHTML = vecLet[idx[4]];	
	document.getElementById(id_NumSx_2).innerHTML = vecLet[idx[0]];	
	document.getElementById(id_DenSx_2).innerHTML = vecLet[idx[1]];
	document.getElementById(id_NumDx_2).innerHTML = vecLet[idx[2]];
	document.getElementById(id_DenDx1_2).innerHTML = vecLet[idx[3]];
	document.getElementById(id_DenDx2_2).innerHTML = vecLet[idx[4]];


			
}





function randomAssignmentRangeKSciNot(id_a,id_k,max_sign,min_k,max_k){
	
	x = my_random_rangeK(max_sign,min_k,max_k);
	v = my_scinot(x);
	a = v[0];
	k = v[1];
	document.getElementById(id_a).innerHTML = a;
	document.getElementById(id_k).innerHTML = k;		
}















