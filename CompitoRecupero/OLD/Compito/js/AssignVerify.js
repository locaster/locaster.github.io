

function alertConsegna() {
	if (confirm("Sei sicuro di voler consegnare il compito?") == true) {
		verifyAll();this.disabled = true;
	}
}





function assignAll(){
	
	/***********
		SciNot
	************/
	randomAssignmentRangeK("num_es1.1",4,-6,6);
	randomAssignmentRangeK("num_es1.2",4,-6,6);
	randomAssignmentRangeK("num_es1.3",4,-6,6);
	randomAssignmentRangeK("num_es1.4",4,-6,6);

	/***********
		ComNot
	************/
	randomAssignmentRangeKSciNot("a_es2.1","k_es2.1",4,-6,6);
	randomAssignmentRangeKSciNot("a_es2.2","k_es2.2",4,-6,6);
	randomAssignmentRangeKSciNot("a_es2.3","k_es2.3",4,-6,6);
	randomAssignmentRangeKSciNot("a_es2.4","k_es2.4",4,-6,6);

	/***********
		Approx
	************/
	randomAssignmentRangeK("n1_es3.1",4,-6,6);
	randomAssignmentRangeK("n2_es3.1",4,-6,6);
	randomAssignmentRangeK("d1_es3.1",4,-6,6);
	randomAssignmentRangeK("d2_es3.1",4,-6,6);

	randomAssignmentRangeK("n1_es3.2",4,-6,6);
	randomAssignmentRangeK("n2_es3.2",4,-6,6);
	randomAssignmentRangeK("d1_es3.2",4,-6,6);
	randomAssignmentRangeK("d2_es3.2",4,-6,6);

	/***************
		Conv Easy
	****************/
	randomAssignmentRangeK("x_es4.1",3,-1,0); // kg -> g
	randomAssignmentRangeK("x_es4.2",3,-1,0); // hg -> mg
	randomAssignmentRangeK("x_es4.3",3,3,4); // cm -> km
	randomAssignmentRangeK("x_es4.4",3,-1,0); // hm -> m
	randomAssignmentRangeK("x_es4.5",3,-1,0); // hm2 -> m2
	randomAssignmentRangeK("x_es4.6",3,2,3); // dm2 -> dam2
	randomAssignmentRangeK("x_es4.7",3,5,6); // cm3 -> m3
	randomAssignmentRangeK("x_es4.8",3,0,1); // dm3 -> mm3	
	randomAssignmentRangeK("x_es4.9",3,2,3); // kg/m3 -> g/cm3
	my_copy("x_es4.9","x_es4.10") // kg/m3 -> kg/dm3
}






function verifyAll(){
	
	var points_tot, points_avail, control;
	
	points_tot = 0;
	points_avail = 0;
	
	/***********
		SciNot
	************/

	result = verifySciNot("num_es1.1","a_es1.1","k_es1.1","result_es1.1","weight_es1.1");
	points_tot += result[0];
	points_avail += result[1];

	result = verifySciNot("num_es1.2","a_es1.2","k_es1.2","result_es1.2","weight_es1.2");
	points_tot += result[0];
	points_avail += result[1];

	result = verifySciNot("num_es1.3","a_es1.3","k_es1.3","result_es1.3","weight_es1.3");
	points_tot += result[0];
	points_avail += result[1];

	result = verifySciNot("num_es1.4","a_es1.4","k_es1.4","result_es1.4","weight_es1.4");
	points_tot += result[0];
	points_avail += result[1];
		
	/***********
		ComNot
	************/
	
	result = verifyComNot("a_es2.1","k_es2.1","x_es2.1","result_es2.1","weight_es2.1");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyComNot("a_es2.2","k_es2.2","x_es2.2","result_es2.2","weight_es2.2");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyComNot("a_es2.3","k_es2.3","x_es2.3","result_es2.3","weight_es2.3");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyComNot("a_es2.4","k_es2.4","x_es2.4","result_es2.4","weight_es2.4");
	points_tot += result[0];
	points_avail += result[1];

	/***********
		Approx
	************/

	result = verifyApprox("n1_es3.1","n2_es3.1","d1_es3.1","d2_es3.1","a_es3.1","k_es3.1","o_es3.1","result_es3.1","weight_es3.1");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyApprox("n1_es3.2","n2_es3.2","d1_es3.2","d2_es3.2","a_es3.2","k_es3.2","o_es3.2","result_es3.2","weight_es3.2");
	points_tot += result[0];
	points_avail += result[1];

	/***************
		Conv Easy
	****************/

	result = verifyConv("unit_x_es4.1","x_es4.1","unit_y_es4.1","y_es4.1","exp_es4.1","result_es4.1","weight_es4.1");
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConv("unit_x_es4.2","x_es4.2","unit_y_es4.2","y_es4.2","exp_es4.2","result_es4.2","weight_es4.2");
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConv("unit_x_es4.3","x_es4.3","unit_y_es4.3","y_es4.3","exp_es4.3","result_es4.3","weight_es4.3");
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConv("unit_x_es4.4","x_es4.4","unit_y_es4.4","y_es4.4","exp_es4.4","result_es4.4","weight_es4.4");
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConv("unit_x_es4.5","x_es4.5","unit_y_es4.5","y_es4.5","exp_es4.5","result_es4.5","weight_es4.5");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyConv("unit_x_es4.6","x_es4.6","unit_y_es4.6","y_es4.6","exp_es4.6","result_es4.6","weight_es4.6");
	points_tot += result[0];
	points_avail += result[1];
	
	result = verifyConv("unit_x_es4.7","x_es4.7","unit_y_es4.7","y_es4.7","exp_es4.7","result_es4.7","weight_es4.7");
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConv("unit_x_es4.8","x_es4.8","unit_y_es4.8","y_es4.8","exp_es4.8","result_es4.8","weight_es4.8");
	points_tot += result[0];
	points_avail += result[1];

	/*******************
		Conv Density
	********************/

	result = verifyConvDensity("x_es4.9","y_es4.9","result_es4.9","weight_es4.9")
	points_tot += result[0];
	points_avail += result[1];

	result = verifyConvDensity("x_es4.10","y_es4.10","result_es4.10","weight_es4.10");
	points_tot += result[0];
	points_avail += result[1];

	document.getElementById("points_tot").innerHTML = points_tot;
	document.getElementById("points_avail").innerHTML = points_avail;
	
	/***********************
		Increment Control
	************************/

	control_text = document.getElementById("control").innerHTML;
	control = parseInt(control_text, 10);
	control += 1;
	document.getElementById("control").innerHTML = control;
	
	/***********************
	       Write Report
	************************/

	//writeReportCsv("nome","cognome","points_tot","points_avail");
}
