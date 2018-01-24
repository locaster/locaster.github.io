




function alertConsegna() {
	conferma = confirm("Sei sicuro di voler consegnare il compito?")
	if (conferma == true) {
		verifyAll();
	}
	return conferma;
}





function assignAll(){

	/********************
		Densità m S.I.
	*********************/
	randomAssignmenMaterialDensity("material_es1_1","material_es1_2","d_es1");	
	randomAssignmentIntRangeK("V_es1",2,0,0,1,1);

	/********************
		Densità m unità
	*********************/
	randomAssignmenMaterialDensity("material_es2_1","material_es2_2","d_es2");	
	randomAssignmentIntRangeK("V_es2",2,0,0,1,1);
	
	/********************
		Densità V S.I.
	*********************/
	randomAssignmenMaterialDensity("material_es3_1","material_es3_2","d_es3");	
	randomAssignmentIntRangeK("m_es3",2,0,0,1,1);

	/********************
		Densità V unità
	*********************/
	randomAssignmenMaterialDensity("material_es4_1","material_es4_2","d_es4");	
	randomAssignmentIntRangeK("m_es4",2,0,1,1,1);

	/********************
		Formule inverse
	*********************/
	randomAssignmenFrac5Let("NumSx_1","DenSx_1","NumDx_1","DenDx1_1","DenDx2_1","NumSx_2","DenSx_2","NumDx_2","DenDx1_2","DenDx2_2");

	/********************
		Densità r_cilindro
	*********************/
	randomAssignmenMaterialDensity("material_es6_1","material_es6_2","d_es6");	
	randomAssignmentIntRangeK("m_es6",2,0,1,1,1);	
	randomAssignmentIntRangeK("r_es6",2,0,0,1,1);
}




function verifyAll(){

	var result, points_tot_realized, points_tot_avail;
	
	pointsTotRealized = 0;
	pointsTotAvail = 0;

	/**********************
		Densità m S.I.
	***********************/
	result = verifyDensityMassSI("d_es1","V_es1","ansLet_es1","ansLetNum_es1","ansLetDen_es1","ansNum_es1","ansA_es1","ansK_es1","result_es1","pointsAvail_es1","points_es1");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Densità m unità
	***********************/
	result = verifyDensityMassUnits("d_es2","V_es2","ansLet_es2","ansLetNum_es2","ansLetDen_es2","ansNumKg_es2","ansA_es2","ansK_es2","ansNumG_es2","result_es2","pointsAvail_es2","points_es2");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Densità V S.I.
	***********************/
	result = verifyDensityVolumeSI("d_es3","m_es3","ansLet_es3","ansLetNum_es3","ansLetDen_es3","ansNum_es3","ansA_es3","ansK_es3","result_es3","pointsAvail_es3","points_es3");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Densità V unità
	***********************/
	result = verifyDensityVolumeUnits("d_es4","m_es4","ansLet_es4","ansLetNum_es4","ansLetDen_es4","ansNumM3_es4","ansA_es4","ansK_es4","ansNumCM3_es4","result_es4","pointsAvail_es4","points_es4");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];

	/**********************
		Formule inverse
	***********************/
	result = verifyInvFormula5("NumSx_1","DenSx_1","NumDx_1","DenDx1_1","DenDx2_1","result_0_Num","result_0_Den","result_1_Num","result_1_Den","result_2_Num","result_2_Den","result_3_Num","result_3_Den","result_4_Num","result_4_Den","result_es5","pointsAvail_es5","points_es5")	
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];
	
	/**********************
		Densità h cilindro
	***********************/
	result = verifyDensityHcilinder("d_es6","m_es6","r_es6","ans_hMM_es6","result_es6","pointsAvail_es6","points_es6");
	       //  verifyDensityHcilinder(id_density,id_mass,id_r,id_ans_hCM,id_result,id_pointsAvail,id_points)
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];




	/*******************************
		Write & Cripto Punteggio
	********************************/
	writeAndCriptoResult(pointsTotRealized,pointsTotAvail,"pointsTotRealized","pointsTotAvail","criptoRand","cripto");
}


