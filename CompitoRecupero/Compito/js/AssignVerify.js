

function alertConsegna() {
	conferma = confirm("Sei sicuro di voler consegnare il compito?")
	if (conferma == true) {
		verifyAll();
	}
	return conferma;
}





function assignAll(){
	
	/***********
		SciNot
	************/
	randomAssignmentRangeK("num_es1.1",4,-6,6);
	
	/***********
		ComNot
	************/
	randomAssignmentRangeKSciNot("a_es2.1","k_es2.1",4,-6,6);

	/***********
		Approx
	************/
	randomAssignmentRangeK("n1_es3.1",4,-6,6);
	randomAssignmentRangeK("n2_es3.1",4,-6,6);
	randomAssignmentRangeK("d1_es3.1",4,-6,6);
	randomAssignmentRangeK("d2_es3.1",4,-6,6);

	/***************
		Conv Easy
	****************/
	randomAssignmentRangeK("x_es4.4",3,-1,0); // hm -> m
	randomAssignmentRangeK("x_es4.5",3,-1,0); // hm2 -> m2
	randomAssignmentRangeK("x_es4.7",3,5,6); // cm3 -> m3
	randomAssignmentRangeK("x_es4.9",3,2,3); // kg/m3 -> g/cm3

	/********************
		Densità V S.I.
	*********************/
	randomAssignmenMaterialDensity("material_es5_1","material_es5_2","d_es5");	
	randomAssignmentIntRangeK("m_es5",2,0,0,1,1);

	/********************
		Densità m unità
	*********************/
	randomAssignmenMaterialDensity("material_es6_1","material_es6_2","d_es6");	
	randomAssignmentIntRangeK("V_es6",2,0,0,1,1);

	/********************
		Formule inverse
	*********************/
	randomAssignmenFrac5Let("NumSx_1","DenSx_1","NumDx_1","DenDx1_1","DenDx2_1","NumSx_2","DenSx_2","NumDx_2","DenDx1_2","DenDx2_2");
}






function verifyAll(){
	
	var points_tot, points_avail, control;
	
	pointsTotRealized = 0;
	pointsTotAvail = 0;
	
	/***********
		SciNot
	************/
	result = verifySciNot("num_es1.1","a_es1.1","k_es1.1","result_es1.1","weight_es1.1");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

		
	/***********
		ComNot
	************/
	result = verifyComNot("a_es2.1","k_es2.1","x_es2.1","result_es2.1","weight_es2.1");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];
	
	/***********
		Approx
	************/
	result = verifyApprox("n1_es3.1","n2_es3.1","d1_es3.1","d2_es3.1","a_es3.1","k_es3.1","o_es3.1","result_es3.1","weight_es3.1");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];
	
	

	/***************
		Conv Easy
	****************/
	result = verifyConv("unit_x_es4.4","x_es4.4","unit_y_es4.4","y_es4.4","exp_es4.4","result_es4.4","weight_es4.4");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	result = verifyConv("unit_x_es4.5","x_es4.5","unit_y_es4.5","y_es4.5","exp_es4.5","result_es4.5","weight_es4.5");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];
	
	result = verifyConv("unit_x_es4.7","x_es4.7","unit_y_es4.7","y_es4.7","exp_es4.7","result_es4.7","weight_es4.7");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/*******************
		Conv Density
	********************/
	result = verifyConvDensity("x_es4.9","y_es4.9","result_es4.9","weight_es4.9")
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Densità V S.I.
	***********************/
	result = verifyDensityVolumeSI("d_es5","m_es5","ansLet_es5","ansLetNum_es5","ansLetDen_es5","ansNum_es5","ansA_es5","ansK_es5","result_es5","pointsAvail_es5","points_es5");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Densità m unità
	***********************/
	result = verifyDensityMassUnits("d_es6","V_es6","ansLet_es6","ansLetNum_es6","ansLetDen_es6","ansNumKg_es6","ansA_es6","ansK_es6","ansNumG_es6","result_es6","pointsAvail_es6","points_es6");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Formule inverse
	***********************/
	result = verifyInvFormula5("NumSx_1","DenSx_1","NumDx_1","DenDx1_1","DenDx2_1","result_0_Num","result_0_Den","result_1_Num","result_1_Den","result_2_Num","result_2_Den","result_3_Num","result_3_Den","result_4_Num","result_4_Den","result_es7","pointsAvail_es7","points_es7")	
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	
	console.log(pointsTotRealized)
	console.log(pointsTotAvail)

	/*******************************
		Write & Cripto Punteggio
	********************************/
	writeAndCriptoResult(pointsTotRealized,pointsTotAvail,"pointsTotRealized","pointsTotAvail","criptoRand","cripto");


}
