

//update the appropriate rectangles.
function update(){
	//only works if the graph is already made.
	if(graphOn){
	var curr_x = 150;  //to determine where to draw the rectangle.
	var label_x = 115;   //for the 2015 label.

		//create appropriate scales.
			if(lsmgo & lsmgo_bill>annual_bill){
				if(lng&lng_bill>lsmgo_bill){
					if(scrubber&scrubber_bill>lng_bill){
						y.domain([1.2*scrubber_bill, 0]);
					}else{
						y.domain([1.2*lng_bill,0]);
					}
				}else{
					if(scrubber&scrubber_bill>lsmgo_bill){
						y.domain([1.2*scrubber_bill,0]);
					}else{
						y.domain([1.2*lsmgo_bill, 0]);
					}
				}
			}else if(lng & lng_bill>annual_bill){
				if(lsmgo&lsmgo_bill>lng_bill){
					if(scrubber&scrubber_bill>lsmgo_bill){
						y.domain([1.2*scrubber_bill, 0]);
					}else{
						y.domain([1.2*lsmgo_bill,0]);
					}
				}else{
					if(scrubber&scrubber_bill>lng_bill){
						y.domain([1.2*scrubber_bill,0]);
					}else{
						y.domain([1.2*lng_bill, 0]);
					}
				}
			}else if(scrubber & scrubber_bill>annual_bill){
				if(lsmgo&lsmgo_bill>scrubber_bill){
					if(lng&lng_bill>lsmgo_bill){
						y.domain([1.2*lng_bill, 0]);
					}else{
						y.domain([1.2*lsmgo_bill,0]);
					}
				}else{
					if(lng&lng_bill>scrubber_bill){
						y.domain([1.2*lng_bill,0]);
					}else{
						y.domain([1.2*scrubber_bill, 0]);
					}
				}
			}else{
				y.domain([1.2*annual_bill, 0]);
			}

			y.range([0,300]);


			//remove previous axis.
			d3.select("#theTwo").remove();

			//add y axis.


			var yAxis = d3.svg.axis()
				.ticks(5)
				.scale(y)
				.orient("left");


			var group = canvas.append("g")
					.attr("id", "theTwo")
					.attr("transform", "translate(50, 0)")
					.call(yAxis);

			    grid.attr("transform", "translate(50,0)")
			        .call(yAxis
			            .tickSize(-234, 0, 0)
			            .tickFormat("")
			        	)

			//update today's cost rectangle.
			rect_today.transition()
					.attr("height", function (d) {return 300 - y(annual_bill);})
					.attr("y", function (d) {return (y(annual_bill));})



			//update other rectangles.
			if(lng){
				label_x = label_x + 18;
				lng_x = curr_x;
				rect_lng.transition()
						.attr("x", curr_x)
						.attr("height", function (d) {return 300 - y(lng_bill); })
				 		.attr("y", function (d){return (y(lng_bill));})
				 curr_x = curr_x + 40;
				 lng_col.attr("display", "inline");
			}else{
				rect_lng.transition()
						.attr("height",0)
						.attr("y", 300);
				lng_col.attr("display", "none");
			}

			if(lsmgo){
				label_x = label_x + 18;
				lsmgo_x = curr_x;
				rect_lsmgo.transition()
						.attr("x", curr_x)
						.attr("height", function (d) {return 300 - y(lsmgo_bill); })
				 		.attr("y", function (d){return (y(lsmgo_bill));})
				 curr_x = curr_x + 40;
				 lsmgo_col.attr("display", "inline");
			}else{
				rect_lsmgo.transition()
						.attr("height",0)
						.attr("y", 300);
				lsmgo_col.attr("display", "none");
			}

			if(scrubber){
				label_x = label_x + 18;
				scrubber_x = curr_x;
				rect_scrubber.transition()
						.attr("x", curr_x)
						.attr("height", function (d) {return 300 - y(scrubber_bill); })
				 		.attr("y", function (d){return (y(scrubber_bill));})
				 scrubber_col.attr("display", "inline");
			}else{
				rect_scrubber.transition()
							.attr("height",0)
							.attr("y", 300);
				scrubber_col.attr("display", "none");
			}

		if(label_x != 115){
				x_label_2015.attr("x", label_x)
						.text("2015 Forward");
			}else{
				x_label_2015.text("");
			}

		}
}


//update the appropriate rectangles.
function update2(){
	//only works if the graph is already made.
	if(graphOn){


	var curr_x = 160;  //to determine where to draw the rectangle.
	var label_x = 120;   //for the 2015 label.

		//create appropriate scales.
			//we know today's emissions will always be the highest.
			y2.domain([1.2*rect_value_today, 0])
			.range([0, 300]);



			//remove previous axis.
			d3.select("#theFour").remove();

			//add y axis.
			var yAxis = d3.svg.axis()
				.ticks(5)
				.scale(y2)
				.orient("left");


			var group = canvas2.append("g")
					.attr("id", "theFour")
					.attr("transform", "translate(50, 0)")
					.call(yAxis);

			    grid2.attr("transform", "translate(50,0)")
			        .call(yAxis
			            .tickSize(-234, 0, 0)
			            .tickFormat("")
			        	)

			//update today's cost rectangle.
			rect_today2.transition()
					.attr("height", function (d) {return 300 - y2(rect_value_today);})
					.attr("y", function (d) {return (y2(rect_value_today));})


			//update other rectangles.
			if(lng2){
				label_x = label_x + 18;
				lng2_x = curr_x;
				rect_lng2.transition()
						.attr("x", 150)
						.attr("height", function (d) {return 300 - y2(rect_value_lng); })
				 		.attr("y", function (d){return (y2(rect_value_lng));})
				 curr_x = curr_x + 30;
			}else{
				rect_lng2.transition()
						.attr("height",0)
						.attr("y", 300);
			}

			if(lsmgo2){
				label_x = label_x + 18;
				lsmgo2_x = curr_x;
				rect_lsmgo2.transition()
						.attr("x", 190)
						.attr("height", function (d) {return 300 - y2(rect_value_lsmgo); })
				 		.attr("y", function (d){return (y2(rect_value_lsmgo));})
				 curr_x = curr_x + 30;
			}else{
				rect_lsmgo2.transition()
						.attr("height",0)
						.attr("y", 300);
			}

			if(scrubber2){
				label_x = label_x + 18;
				scrubber2_x = curr_x;
				rect_scrubber2.transition()
						.attr("x", 230)
						.attr("height", function (d) {return 300 - y2(rect_value_scrubber); })
				 		.attr("y", function (d){return (y2(rect_value_scrubber));})
			}else{
				rect_scrubber2.transition()
							.attr("height",0)
							.attr("y", 300);
			}

		if(label_x != 120){
				x_label_20152.attr("x", label_x)
						.text("");
			}else{
				x_label_20152.text("");
			}

		if(sox){
			dotted.attr("y1", function (d) {return ((y2(rect_value_today)) + 0.9*(300-y2(rect_value_today)));})
					.attr("y2", function (d) {return ((y2(rect_value_today)) + 0.9*(300-y2(rect_value_today)));})
					.attr("display","inline");

			regulation.attr("display", "inline");
			dotted2.attr("display", "inline");
						

		}else{
			dotted.attr("display","none");
			regulation.attr("display", "none");
			dotted2.attr("display", "none");
		}
		}
}



d3.csv("fuel_prices.csv", function (data){
                data.forEach(function(d){
                    todays_price = +d.Today;
                    lng_price = +d.LNG_2015;
                    lsmgo_price = +d.LSMGO_2015;
                    scrubber_price = +d.Scrubber_2015;

                })
            })


            var lng = true;
            //document.getElementById("1").style.backgroundColor = "lightblue";
            var lsmgo = true;
            var scrubber = true;

            var lng2 = true;
            //document.getElementById("1").style.backgroundColor = "lightblue";
            var lsmgo2 = true;
            var scrubber2 = true;

            function LNG() {
                if(!lng){
                    //document.getElementById("1").style.backgroundColor = "lightblue";
                    lng = true;
                }else{
                   //document.getElementById("1").style.backgroundColor = "" 
                   lng = false;
                }
                update();
            }

            function LSMGO() {
                if(!lsmgo){
                    //document.getElementById("2").style.backgroundColor = "lightblue";
                    lsmgo = true;
                }else{
                   //document.getElementById("2").style.backgroundColor = "" 
                   lsmgo = false;
                }

                update();
            }

            function SCRUBBER() {

                if(!scrubber){
                    //document.getElementById("3").style.backgroundColor = "lightblue";
                    scrubber = true;
                }else{
                   //document.getElementById("3").style.backgroundColor = "" 
                   scrubber = false;
                }
                update();
            }



            function CO2() {
            	co2 = true;
            	sox = false;
            	nox = false;
            	pm = false;
            	rect_value_today = todays_cars_co2;
            	rect_value_lng = lng_cars_co2;
            	rect_value_lsmgo = lsmgo_cars_co2;
            	rect_value_scrubber = scrubber_cars_co2;
            	rect_units = "cars";
            	axis_title = "CO2 (car equivalents)";
            	co2_trans.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng2.png");
					})
            	sox_trans.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	nox_trans.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	pm_trans.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng1.png");
					})

            	sox_but.attr("xlink:href", "buttons/lng1.png");
            	nox_but.attr("xlink:href", "buttons/lng1.png");
            	pm_but.attr("xlink:href", "buttons/lng1.png");
            	y_label_Today2.text(axis_title);
            	no_lng.text("");
            	update2();
            }


            function SOX() {
            	co2 = false;
            	sox = true;
            	nox = false;
            	pm = false;
            	rect_value_today = todays_cars_sox;
            	rect_value_lng = lng_cars_sox;
            	rect_value_lsmgo = lsmgo_cars_sox;
            	rect_value_scrubber = scrubber_cars_sox;
            	rect_units = "cars";
            	axis_title = "SOX (car equivalents)";
            	co2_trans.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng1.png");
					})
            	sox_trans.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng2.png");
					})
            	nox_trans.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	pm_trans.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng1.png");
					})

            	co2_but.attr("xlink:href", "buttons/lng1.png");
            	nox_but.attr("xlink:href", "buttons/lng1.png");
            	pm_but.attr("xlink:href", "buttons/lng1.png");
            	y_label_Today2.text(axis_title);
            	no_lng.text("0");
            	update2();
            }

            function NOX() {
            	co2 = false;
            	sox = false;
            	nox = true;
            	pm = false;
            	rect_value_today = todays_trucks;
            	rect_value_lng = lng_trucks;
            	rect_value_lsmgo = lsmgo_trucks;
            	rect_value_scrubber = scrubber_trucks;
            	rect_units = "trucks";
            	axis_title = "NOX (truck equivalents)";
            	co2_trans.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng1.png");
					})
            	sox_trans.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	nox_trans.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng2.png");
					})
            	pm_trans.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng1.png");
					})

            	co2_but.attr("xlink:href", "buttons/lng1.png");
            	sox_but.attr("xlink:href", "buttons/lng1.png");
            	pm_but.attr("xlink:href", "buttons/lng1.png");
            	y_label_Today2.text(axis_title);
            	no_lng.text("");
            	update2();
            }


            function PM() {
            	co2 = false;
            	sox = false;
            	nox = false;
            	pm = true;
            	rect_value_today = todays_plants;
            	rect_value_lng = lng_plants;
            	rect_value_lsmgo = lsmgo_plants;
            	rect_value_scrubber = scrubber_plants;
            	rect_units = "power plants";
            	axis_title = "PM (power plant equivalents)";
            	co2_trans.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng1.png");
					})
            	sox_trans.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	nox_trans.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng1.png");
					})
            	pm_trans.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng2.png");
					})

            	co2_but.attr("xlink:href", "buttons/lng1.png");
            	sox_but.attr("xlink:href", "buttons/lng1.png");
            	nox_but.attr("xlink:href", "buttons/lng1.png");
            	y_label_Today2.text(axis_title);
            	no_lng.text("0");
            	update2();
            }

            function LNG2() {
                if(!lng2){
                    //document.getElementById("1").style.backgroundColor = "lightblue";
                    lng2 = true;
                }else{
                   //document.getElementById("1").style.backgroundColor = "" 
                   lng2 = false;
                }
                update2();
            }

            function LSMGO2() {
                if(!lsmgo2){
                    //document.getElementById("2").style.backgroundColor = "lightblue";
                    lsmgo2 = true;
                }else{
                   //document.getElementById("2").style.backgroundColor = "" 
                   lsmgo2 = false;
                }

                update2();
            }

            function SCRUBBER2() {

                if(!scrubber2){
                    //document.getElementById("3").style.backgroundColor = "lightblue";
                    scrubber2 = true;
                }else{
                   //document.getElementById("3").style.backgroundColor = "" 
                   scrubber2 = false;
                }
                update2();
            }