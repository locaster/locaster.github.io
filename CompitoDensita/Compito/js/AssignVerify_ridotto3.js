




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
		Densità V S.I.
	*********************/
	randomAssignmenMaterialDensity("material_es3_1","material_es3_2","d_es3");	
	randomAssignmentIntRangeK("m_es3",2,0,0,1,1);


	/********************
		Formule inverse
	*********************/
	randomAssignmenFrac4Let("NumSx_1","DenSx_1","NumDx_1","DenDx_1","NumSx_2","DenSx_2","NumDx_2","DenDx_2");


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
		Densità V S.I.
	***********************/
	result = verifyDensityVolumeSI("d_es3","m_es3","ansLet_es3","ansLetNum_es3","ansLetDen_es3","ansNum_es3","ansA_es3","ansK_es3","result_es3","pointsAvail_es3","points_es3");
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];


	/**********************
		Formule inverse
	***********************/
	result = verifyInvFormula4("NumSx_1","DenSx_1","NumDx_1","DenDx_1","result_0_Num","result_0_Den","result_1_Num","result_1_Den","result_2_Num","result_2_Den","result_3_Num","result_3_Den","result_es5","pointsAvail_es5","points_es5")	
	pointsTotRealized += result[0];
	pointsTotAvail += result[1];
	





	/*******************************
		Write & Cripto Punteggio
	********************************/
	writeAndCriptoResult(pointsTotRealized,pointsTotAvail,"pointsTotRealized","pointsTotAvail","criptoRand","cripto");
}


