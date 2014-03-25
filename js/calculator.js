//Create Canvas and add the four bars

//Global Variables
		var selected;       //Index of the ship
		var annual_bill;
		var VS;
		var graphOn = false;

		//values
		var todays_price;
		var lng_price;
		var lsmgo_price;
		var scrubber_price;
		var lng_bill;
		var lsmgo_bill;
		var scrubber_bill;
		var todays_emissions;
		var lng_emissions;
		var scrubber_emissions;
		var lsmgo_emissions;

		//scales
		var y = d3.scale.linear();
		var y2 = d3.scale.linear();
		var circ = d3.scale.linear();

		var lng_x;
		var scrubber_x;
		var lsmgo_x;
		var lng2_x;
		var scrubber2_x;
		var lsmgo2_x;

		//metrics
		var cars_co;
		var cars_sox;
		var trucks;
		var power_plants;
		var rect_value_today;
		var rect_value_lng;
		var rect_value_lsmgo;
		var rect_value_scrubber;
		var rect_units = "cars";
		var axis_title = "SOX (car equivalents)";
		var todays_cars_co2;
		var todays_cars_sox;
		var todays_trucks;
		var todays_plants;
		var lng_cars_co2;
		var lng_cars_sox;
		var lng_trucks;
		var lng_plants;
		var scrubber_cars_co2;
		var scrubber_cars_sox;
		var scrubber_trucks;
		var scrubber_plants;
		var lsmgo_cars_co2;
		var lsmgo_cars_sox;
		var lsmgo_trucks;
		var lsmgo_plants;
		var co2 = false;
		var sox = true;
		var nox = false;
		var pm = false;
		var daily;



//add as an svg otherwise scaling messes up.
var can = d3.select("#grph1")
			.append("svg:svg")
			.attr("width",1000)
			.attr("height", 1000);

//the first big group.
var canvas = can.append("g")
    				.attr("transform", "translate(20, 100)");

var the_key=canvas.append("g");

var grid = canvas.append("g")         
			        .attr("class", "grid");




//italic text.
var added = canvas.append("text")
	.attr("x", 30)
	.attr("y", 350)
	.style("font-family","Helvetica, Arial, sans-serif")
	.style("font-size","11px")
	.style("font-style","italic");
	added.append("tspan")
	.attr("dy", -3)
	.text("*");
	added.append("tspan")
	.attr("dy", 3)
	.text("No longer suitable in ECA zones after Jan. 1 2015");





//HFO on the key.
var HFO_text = the_key.append("text")
				.attr("x", 330)
				.attr("y", 50);
			HFO_text.append("tspan")
					.attr("font-size", 11)
					.text("HFO");
			HFO_text.append("tspan")
					.attr("dy", -3)
                    .style("font-size", "11px")
                    .text("*"); 


//LNG button:
var lng_rect = the_key.append("image")
					.attr("x", 327)
					.attr("y", 64)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.attr("xlink:href", "buttons/lng1.png");


var text_lng = the_key.append("text")

					.attr("x", 333)
					.attr("y", 78)
					.attr("font-size", "10px")
					.style("font-weight", "bold")
					.text("LNG");

var lng_trans = the_key.append("rect")
					.attr("x", 327)
					.attr("y", 64)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.on("click", function(){LNG();})
					.on("mouseover",function(){
						lng_rect.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						lng_rect.attr("xlink:href", "buttons/lng1.png");
					})
					.attr("opacity", 0);



//LSMGO button

var lsmgo_rect = the_key.append("image")
					.attr("x", 327)
					.attr("y", 94)
					.attr("height", 22)
					.attr("width", 47)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						lsmgo_rect.attr("xlink:href", "buttons/lsmgo2.png");
					})
					.on("mouseout",function(){
						lsmgo_rect.attr("xlink:href", "buttons/lsmgo1.png");
					})
					.on("click", function(){LSMGO();})
					.attr("xlink:href", "buttons/lsmgo1.png");



var text_lsmgo = the_key.append("text")

					.attr("x", 331)
					.attr("y", 108)
					.attr("font-size", "10px")
					.style("font-weight", "bold")
					.text("LSMGO");

var lsmgo_trans = the_key.append("rect")
					.attr("x", 327)
					.attr("y", 94)
					.attr("height", 22)
					.attr("width", 47)
					.attr("cursor","pointer")
					.on("click", function(){LSMGO();})
					.on("mouseover",function(){
						lsmgo_rect.attr("xlink:href", "buttons/lsmgo2.png");
					})
					.on("mouseout",function(){
						lsmgo_rect.attr("xlink:href", "buttons/lsmgo1.png");
					})
					.attr("opacity", 0);


//Scrubber button.

var scrubber_rect = the_key.append("image")
					.attr("x", 327)
					.attr("y", 120)
					.attr("height", 44)
					.attr("width", 50)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						scrubber_rect.attr("xlink:href", "buttons/scrubber2.png");
					})
					.on("mouseout",function(){
						scrubber_rect.attr("xlink:href", "buttons/scrubber1.png");
					})
					.on("click", function(){SCRUBBER();})
					.attr("xlink:href", "buttons/scrubber1.png");


var text_scrubber = the_key.append("text")

					.attr("x", 329)
					.attr("y", 138)
					.attr("font-size", "10px")
					.style("font-weight", "bold")
					.text("Scrubber");

var text_scrubber2 = the_key.append("text")

					.attr("x", 339)
					.attr("y", 150)
					.attr("font-size", "10px")
					.style("font-weight", "bold")
					.text("(HFO)");

var scrubber_trans = the_key.append("rect")
					.attr("x", 327)
					.attr("y", 120)
					.attr("height", 44)
					.attr("width", 50)
					.attr("cursor","pointer")
					.on("click", function(){SCRUBBER();})
					.on("mouseover",function(){
						scrubber_rect.attr("xlink:href", "buttons/scrubber2.png");
					})
					.on("mouseout",function(){
						scrubber_rect.attr("xlink:href", "buttons/scrubber1.png");
					})
					.attr("opacity", 0);



//append the key items.

the_key.append("rect")
					.attr("x", 300)
					.attr("y", 34)
					.attr("height", 22)
					.attr("width", 22)
					.attr("fill", "rgb(66,119,125)");

var lng_col=the_key.append("rect")
					.attr("x", 300)
					.attr("y", 64)
					.attr("height", 22)
					.attr("width", 22)
					.attr("fill", "rgb(60,98,57)");

var lsmgo_col=the_key.append("rect")
					.attr("x", 300)
					.attr("y", 94)
					.attr("height", 22)
					.attr("width", 22)
					.attr("display", "none")
					.attr("fill", "rgb(135,160,32)");


var scrubber_col=the_key.append("rect")
					.attr("x", 300)
					.attr("y", 124)
					.attr("height", 22)
					.attr("width", 22)
					.attr("display", "none")
					.attr("fill", "rgb(180,201,102)");

the_key.attr("display", "none");




			//The main bars.


    		var rect_today = canvas.append("rect")

    				.attr("height", 0)

    				.attr("width", 30)

    				.attr("x", 80)
    				.attr("y", 300)
    				.attr("fill", "rgb(66,119,125)")
    				.on("mouseover", function(){
    					rect_today.transition()
    						.attr("opacity",0.7);
    					text_today.attr("y", function(d){return(y(annual_bill)-10)})
							.text("$"+addCommas(parseInt(annual_bill)));
    				})
    				.on("mouseout", function(){
    					rect_today.transition()
    						.attr("opacity",1);
    					text_today.text("");
    				});

    				





    		var rect_lng = canvas.append("rect")

    				.attr("height", 0)

    				.attr("width", 30)
    				.attr("y", 300)

    				.on("mouseover", function(){
    					rect_lng.transition()
    						.attr("opacity",0.7);
    					lng_text.attr("y", function(d){return(y(lng_bill)-10)})
							.attr("x", lng_x-13)
							.text("$"+addCommas(parseInt(lng_bill)));
    				})
    				.on("mouseout", function(){
    					rect_lng.transition()
    						.attr("opacity",1);
    					lng_text.text("");
    				})


    				.attr("fill", "rgb(60,98,57)");

            var rect_lsmgo = canvas.append("rect")

                    .attr("height", 0)

                    .attr("width", 30)
                    .attr("y", 300)

                    .on("mouseover", function(){
    					rect_lsmgo.transition()
    						.attr("opacity",0.7);

    					lsmgo_text.attr("y", function(d){return(y(lsmgo_bill)-10)})
							.attr("x", lsmgo_x-13)
							.text("$"+addCommas(parseInt(lsmgo_bill)));
    				})
    				.on("mouseout", function(){
    					rect_lsmgo.transition()
    						.attr("opacity",1);
    					lsmgo_text.text("");
    				})

                    .attr("fill", "rgb(135,160,32)");


            var rect_scrubber = canvas.append("rect")

                    .attr("height", 0)

                    .attr("width", 30)
                    .attr("y", 300)

                    .on("mouseover", function(){
    					rect_scrubber.transition()
    						.attr("opacity",0.7);

    					scrubber_text.attr("y", function(d){return(y(scrubber_bill)-10)})
							.attr("x", scrubber_x-13)
							.text("$"+addCommas(parseInt(scrubber_bill)));
    				})
    				.on("mouseout", function(){
    					rect_scrubber.transition()
    						.attr("opacity",1);

    					scrubber_text.text("");
    				})
                    .attr("fill", "rgb(180,201,102)");


                   	var text_today = canvas.append("text")
								.attr("x", 67);

					var lng_text = canvas.append("text");
										
					var lsmgo_text = canvas.append("text");

					var scrubber_text = canvas.append("text");


//second big group. Almost everything the same way.

var can2 = d3.select("#grph2")
			.append("svg:svg")
			.attr("width",1000)
			.attr("height", 1000);


var canvas2 = can2.append("g")

    				.attr("transform", "translate(35, 100)")

    				.attr("x", 300)

    				.attr("width", 1000)

    				.attr("height", 1000);



var added2 = canvas2.append("text")
	.attr("x", 30)
	.attr("y", 350)
	.style("font-family","Helvetica, Arial, sans-serif")
	.style("font-size","11px")
	.style("font-style","italic");
	added2.append("tspan")
	.attr("dy", -3)
	.text("*");
	added2.append("tspan")
	.attr("dy", 3)
	.text("No longer suitable in ECA zones after Jan. 1 2015");

var the_key2=canvas2.append("g");

var grid2 = canvas2.append("g")         
			        .attr("class", "grid");




//buttons
var sox_but = the_key2.append("image")
					.attr("x", 327)
					.attr("y", 34)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						sox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("click", function(){SOX();})
					.attr("xlink:href", "buttons/lng2.png");

var text_sox = the_key2.append("text")
					.attr("x", 333)
					.attr("y", 48)
					.attr("font-size", "10px")
					.attr("font-weight", "bold")
					.text("SOX");

var sox_trans = the_key2.append("rect")
					.attr("x", 327)
					.attr("y",34)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor", "pointer")
					.on("mouseover",function(){
						sox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						sox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("click", function(){SOX();})
					.attr("opacity", 0);
 



var co2_but = the_key2.append("image")
					.attr("x", 327)
					.attr("y", 64)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						co2_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){CO2();})
					.attr("xlink:href", "buttons/lng1.png");


var text_co2 = the_key2.append("text")
					.attr("x", 333)
					.attr("y", 78)
					.attr("font-size", "10px")
					.attr("font-weight", "bold")
					.text("CO2");

var co2_trans = the_key2.append("rect")
					.attr("x", 327)
					.attr("y",64)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor", "pointer")
					.on("mouseover",function(){
						co2_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						co2_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){CO2();})
					.attr("opacity", 0);






var nox_but = the_key2.append("image")
					.attr("x", 327)
					.attr("y", 94)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						nox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){NOX();})
					.attr("xlink:href", "buttons/lng1.png");

var text_nox = the_key2.append("text")
					.attr("x", 333)
					.attr("y", 108)
					.attr("font-size", "10px")
					.attr("font-weight", "bold")
					.text("NOX");

var nox_trans = the_key2.append("rect")
					.attr("x", 327)
					.attr("y",94)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor", "pointer")
					.on("mouseover",function(){
						nox_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						nox_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){NOX();})
					.attr("opacity", 0);






var pm_but = the_key2.append("image")
					.attr("x", 327)
					.attr("y", 124)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor","pointer")
					.on("mouseover",function(){
						pm_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){PM();})
					.attr("xlink:href", "buttons/lng1.png");


var text_pm = the_key2.append("text")
					.attr("x", 337)
					.attr("y", 138)
					.attr("font-size", "10px")
					.attr("font-weight", "bold")
					.text("PM");

var pm_trans = the_key2.append("rect")
					.attr("x", 327)
					.attr("y",124)
					.attr("height", 22)
					.attr("width", 35)
					.attr("cursor", "pointer")
					.on("mouseover",function(){
						pm_but.attr("xlink:href", "buttons/lng2.png");
					})
					.on("mouseout",function(){
						pm_but.attr("xlink:href", "buttons/lng1.png");
					})
					.on("click", function(){PM();})
					.attr("opacity", 0);




the_key2.attr("display", "none");



			//main bars.
    		var rect_today2 = canvas2.append("rect")

    				.attr("height", 0)

    				.attr("width", 30)

    				.attr("x", 80)
    				.attr("y", 300)

    				.on("mouseover", function(){
    					rect_today2.transition()
    						.attr("opacity",0.7);
    					text_today2.attr("y", function(d){return(y2(rect_value_today)-10)})
							.text(function(d){
								if(pm){
									return (addCommas(rect_value_today.toFixed(2))+" " + rect_units);
								}else{
									return (addCommas(parseInt(rect_value_today))+" " + rect_units);
								}
						});
    				})
    				.on("mouseout", function(){
    					rect_today2.transition()
    						.attr("opacity",1);
    					text_today2.text("");
    				})

    				.attr("fill", "rgb(66,119,125)");



    		var rect_lng2 = canvas2.append("rect")

    				.attr("height", 0)

    				.attr("width", 30)
    				.attr("y", 300)

    				.on("mouseover", function(){
    					rect_lng2.transition()
    						.attr("opacity",0.7);

    					lng2_text.attr("y", function(d){return(y2(rect_value_lng)-10)})
							//.attr("x", lng2_x-13)
							.text(function(d){
								if(pm){
									return (addCommas(rect_value_lng.toFixed(2))+" " + rect_units);
								}else{
									return (addCommas(parseInt(rect_value_lng))+" " + rect_units);
								}
						});
    				})
    				.on("mouseout", function(){
    					rect_lng2.transition()
    						.attr("opacity",1);

    					lng2_text.text("");
    				})

    				.attr("fill", "rgb(60,98,57)");

            var rect_lsmgo2 = canvas2.append("rect")

                    .attr("height", 0)

                    .attr("width", 30)
                    .attr("y", 300)

                    .on("mouseover", function(){
    					rect_lsmgo2.transition()
    						.attr("opacity",0.7);

    					lsmgo2_text.attr("y", function(d){return(y2(rect_value_lsmgo)-10)})
							//.attr("x", lsmgo2_x-13)
							.text(function(d){
								if(pm){
									return (addCommas(rect_value_lsmgo.toFixed(2))+" " + rect_units);
								}else{
									return (addCommas(parseInt(rect_value_lsmgo))+" " + rect_units);
								}
						});
    				})
    				.on("mouseout", function(){
    					rect_lsmgo2.transition()
    						.attr("opacity",1);

    					lsmgo2_text.text("");
    				})

                    .attr("fill", "rgb(135,160,32)");


            var rect_scrubber2 = canvas2.append("rect")

                    .attr("height", 0)

                    .attr("width", 30)
                    .attr("y", 300)

                    .on("mouseover", function(){
    					rect_scrubber2.transition()
    						.attr("opacity",0.7);

    				scrubber2_text.attr("y", function(d){return(y2(rect_value_scrubber)-10)})
							//.attr("x", scrubber2_x-13)
							.text(function(d){
								if(pm){
									return (addCommas(rect_value_scrubber.toFixed(2))+" " + rect_units);
								}else{
									return (addCommas(parseInt(rect_value_scrubber))+" " + rect_units);
								}
						});
    				})
    				.on("mouseout", function(){
    					rect_scrubber2.transition()
    						.attr("opacity",1);

    					scrubber2_text.text("");
    				})

                    .attr("fill", "rgb(180,201,102)");

        
        //the headings.

        var heading_1 = canvas.append("text")
        				.attr("x", 80)
        				.attr("y", -53)
        				.style("font-size", "40px")
        				.style("font-family", "Arial")
        				.attr("fill", "#444")
        				.text("FUEL BILL");

        var heading_1 = canvas2.append("text")
        				.attr("x", 15)
        				.attr("y", -53)
        				.style("font-size", "40px")
        				.style("font-family", "Arial")
        				.attr("fill", "#444")
        				.text("FUEL EMISSIONS");


       	//axis text.
        var text_today2 = canvas2.append("text")
						.attr("x", 76);

		var lng2_text = canvas2.append("text")
						.attr("x", 140);
										
		var lsmgo2_text = canvas2.append("text")
							.attr("x", 180);

		var scrubber2_text = canvas2.append("text")
							.attr("x", 217);

        

		var x_label_Today = canvas.append("text")
					.attr("y", 320)
					.attr("x", 70);
		var x_label_2015 = canvas.append("text")
					.attr("y", 320);
		var x_label_Today2 = canvas2.append("text")
					.attr("y", 320)
					.attr("x", 85);

		x_label_Today2.append("tspan")
					.attr("font-size", 11)
					.text("HFO");
			x_label_Today2.append("tspan")
					.attr("dy", -3)
                    .style("font-size", "11px")
                    .text("*"); 


		var x_label_20152 = canvas2.append("text")
					.attr("y", 320);

		var lng_label = canvas2.append("text")
						.attr("y", 320)
						.attr("x", 154)
						.attr("font-size", "11px")
						.text("LNG");

		var lsmgo_label = canvas2.append("text")
						.attr("y", 320)
						.attr("x", 185)
						.attr("font-size", "11px")
						.text("LSMGO");

		var scrubber_label = canvas2.append("text")
						.attr("y", 320)
						.attr("x", 226)
						.attr("font-size", "11px")
						.text("Scrubber");

		var y_label_Today = canvas.append("text")
					.attr("y", -10)
					.attr("x", -12)
					.style("font-size", "13px")
					.style("font-weight", "bold");

		var y_label_Today2 = canvas2.append("text")
					.attr("y", -15)
					.attr("x", -12)
					.style("font-size", "13px")
					.style("font-weight", "bold");


		var key_label = canvas.append("text")
					.attr("y", 20)
					.attr("x", 300)
					.style("font-weight", "bold");

		var key_label2 = canvas2.append("text")
					.attr("y", 20)
					.attr("x", 305)
					.style("font-weight", "bold");

		var no_lng = canvas2.append("text")
					.attr("x",165)
					.attr("y", 298)
					.text("0");

		var regulation = canvas2.append("text")
						.attr("x", 75)
						.attr("y", 370)
						.style("font-size","11px")
						.style("font-style","italic")
						.text("January 1 2015 IMO Maximum SOX Limit");

		var dotted = canvas2.append("line")
			.attr("x1", 44)
			.attr("x2", 280)
			.attr("stroke", "red")
			.style("stroke-dasharray", ("8, 3"))
			.attr("display", "none")
			.attr("stroke-width", 3);

		var dotted2 = canvas2.append("line")
			.attr("x1", 30)
			.attr("x2", 71)
			.attr("y1", 365)
			.attr("y2", 365)
			.attr("stroke", "red")
			.style("stroke-dasharray", ("8, 3"))
			.attr("display", "none")
			.attr("stroke-width", 3);


		//function to add commas to a number.
		function addCommas(x){
			var parts = x.toString().split(".");
		    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join(".");
		}


		//error checking function
		function errorCheck(){
			var slider4 = document.getElementById("sl4").value;
			var slider5 = document.getElementById("sl5").value;
			var slider6 = document.getElementById("sl6").value;
			var slider7 = document.getElementById("sl7").value;
			var slider8 = document.getElementById("sl8").value;
			var todays_p = document.getElementById("sl9").value;
			var lng_p = document.getElementById("sl10").value;
			var lsmgo_p = document.getElementById("sl11").value;
			var scrubber_p = document.getElementById("sl12").value; 

			if(slider4<=0 | slider4>200 | isNaN(slider4)){
				alert("Please make sure the value of Installed Power is a number between 0 and 200");
				return false;
			}

			if(slider5<=0 | slider5>365 | isNaN(slider5)){
				alert("Please make sure the value of Operating Days a Year is a number beteen 0 and 365");
				return false;
			}

			if(slider6<=0 | slider6 > 80 | isNaN(slider6)){
				alert("Please make sure Design Speed is a number between 0 and 80");
				return false;
			}

			if(slider7<=0 | parseFloat(slider7) > parseFloat(slider6) | isNaN(slider7)){
				alert("Please make sure the Operating Speed is a number between 0 and the design speed");
				return false;
			}
			if(slider8<=0 | isNaN(slider8)){
				alert("Please make sure the Daily Fuel Consumption is a number greater than 0");
				return false;
			}
			if(todays_p<=0 | todays_p >= 50000 | isNaN(todays_p)){
				alert("Please make sure HFO price is a number between 0 and 50,000");
				return false;
			}

			if(lng_p<=0 | lng_p >= 50000 | isNaN(lng_p)){
				alert("Please make sure LNG price is a number between 0 and 50,000");
				return false;
			}

			if(lsmgo_p<=0 | lsmgo_p >= 50000 | isNaN(lsmgo_p)){
				alert("Please make sure LNG price is a number between 0 and 50,000");
				return false;
			}

			if(scrubber_p<=0 | scrubber_p >= 50000 | isNaN(scrubber_p)){
				alert("Please make sure future HFO price (with scrubbers) is a number between 0 and 50,000");
				return false;
			}

			return true;

		}

		//Function to update the graph based on user provided data.
		function updateGraph(){
			if(errorCheck()){
			//get data from user
			var slider4 = document.getElementById("sl4").value;
			var slider5 = document.getElementById("sl5").value;
			var slider6 = document.getElementById("sl6").value;
			var slider7 = document.getElementById("sl7").value;
			todays_price = document.getElementById("sl9").value;
			lng_price = document.getElementById("sl10").value;
			lsmgo_price = document.getElementById("sl11").value;
			new_daily = document.getElementById("sl8").value;
			if(document.getElementById("sl12").value == scrubber_price){
				document.getElementById("sl12").value = todays_price;
			}
			scrubber_price = document.getElementById("sl12").value;
			if(daily != new_daily){
				var slider8 = new_daily;
				daily = new_daily;
			}else{
				var slider8 = ((slider7/slider6)*(slider7/slider6)*(slider7/slider6)) * slider4 * VS * 0.0019 * 24;
				document.getElementById("sl8").value = slider8.toFixed(2);
			}

			//calculate annual bills for the different fuels.
			annual_bill = slider8 * slider5 * todays_price;
			lng_bill = slider8 * slider5 * lng_price;
			lsmgo_bill = (slider8 * slider5 * lsmgo_price);
			scrubber_bill = (slider8 * slider5 * scrubber_price) + 0.03*(slider8 * slider5 * scrubber_price);
			todays_emissions = slider8*slider5*3.11;
			lng_emissions = slider8*slider5*3.11*0.75;
			scrubber_emissions = slider8*slider5*3.11*0.7;
			lsmgo_emissions = slider8*slider5*3.11*0.8125;

			cars_co = (todays_emissions-lng_emissions)/5.1;
			cars_sox = (todays_emissions-lng_emissions)*0.01302/(1/167500);
			trucks = (todays_emissions-lng_emissions)*0.02871;
			power_plants = (todays_emissions-lng_emissions)*0.00271/500;

			todays_cars_co2 = todays_emissions/5.1;
			todays_cars_sox = (todays_emissions*0.01302)/(1/167500);
			todays_trucks = (todays_emissions*0.02871);
			todays_plants = (todays_emissions*0.00271)/500;

			lng_cars_co2 = todays_cars_co2*0.75;
			lng_cars_sox = 0;
			lng_trucks = todays_trucks*0.15;
			lng_plants = 0;

			scrubber_cars_co2 = todays_cars_co2*0.23;
			scrubber_cars_sox = todays_cars_sox*0.01;
			scrubber_trucks = todays_trucks*0.34;
			scrubber_plants = todays_plants*0.4;

			lsmgo_cars_co2 = todays_cars_co2*0.83;
			lsmgo_cars_sox = todays_cars_sox*0.1;
			lsmgo_trucks = todays_trucks*0.9;
			lsmgo_plants = todays_plants*0.01;



			//remove previous numbers
			 d3.select("#theThree").remove();
			

			 //update charts.
			if(co2){
			 	CO2();
			 }else if(sox){
			 	SOX();
			 }else if(nox){
			 	NOX();
			 }else if(pm){
			 	PM();
			 }
			//update the rectangles.
			update();
			update2();

			}
		}

		//Function to create the graph for the first time.
		function createGraph()
      {
        
        the_key.attr("display", "inline");
        the_key2.attr("display", "inline");
      	//update boolean value
        graphOn = true;

        //get the data.
        d3.csv("mydata.csv", function (data) {

        	//get appropriate info.
			data.forEach(function(d) {
				d.index = +d.index;
				d.slider4 = +d.KW/1000;
				d.slider5 = +d.days;
				d.slider6 = +d.kts;
				d.VS = +d.percent;
				d.slider7 = d.slider6;
				d.slider8 = ((d.slider7/d.slider6)*(d.slider7/d.slider6)*(d.slider7/d.slider6)) * d.slider4 * d.VS * 0.0019 * 24;
				d.slider9 = todays_price;
				d.annual_bill = d.slider8 * d.slider5 * d.slider9;

				if(selected == d.index){
					//update text boxes with default data.
					document.getElementById("sl4").value = d.slider4;
					document.getElementById("sl5").value = d.slider5;
					document.getElementById("sl6").value = d.slider6;
					document.getElementById("sl7").value = d.slider7;
					document.getElementById("sl8").value = d.slider8.toFixed(2);
					document.getElementById("sl9").value = d.slider9;
					document.getElementById("sl10").value = lng_price;
					document.getElementById("sl11").value = lsmgo_price;
					document.getElementById("sl12").value = d.slider9;
					daily = document.getElementById("sl8").value;

					//update globals.
					VS = d.VS;
					annual_bill = d.annual_bill;
					lng_bill = (d.slider8 * d.slider5 * lng_price);
					lsmgo_bill = (d.slider8 * d.slider5 * lsmgo_price);
					scrubber_bill = (d.slider8 * d.slider5 * scrubber_price) + 0.03*(d.slider8 * d.slider5 * scrubber_price);
					todays_emissions = d.slider8*d.slider5*3.11;
					lng_emissions = d.slider8*d.slider5*3.11*0.75;
					scrubber_emissions = d.slider8*d.slider5*3.11*0.7;
					lsmgo_emissions = d.slider8*d.slider5*3.11*0.8125;

					cars_co = (todays_emissions-lng_emissions)/5.1;
					cars_sox = (todays_emissions-lng_emissions)*0.01302/(1/1675000);
					trucks = (todays_emissions-lng_emissions)*0.02871;
					power_plants = (todays_emissions-lng_emissions)*0.00271/500;



					todays_cars_co2 = todays_emissions/5.1;
					todays_cars_sox = (todays_emissions*0.01302)/(1/167500);
					todays_trucks = (todays_emissions*0.02871);
					todays_plants = (todays_emissions*0.00271)/500;

					lng_cars_co2 = todays_cars_co2*0.75;
					lng_cars_sox = 0;
					lng_trucks = todays_trucks*0.15;
					lng_plants = 0;

					scrubber_cars_co2 = todays_cars_co2*0.23;
					scrubber_cars_sox = todays_cars_sox*0.01;
					scrubber_trucks = todays_trucks*0.34;
					scrubber_plants = todays_plants*0.4;

					lsmgo_cars_co2 = todays_cars_co2*0.83;
					lsmgo_cars_sox = todays_cars_sox*0.1;
					lsmgo_trucks = todays_trucks*0.9;
					lsmgo_plants = todays_plants*0.01;

				}

			})

			//remove previous text.
			 d3.select("#theThree").remove();

			 //label today's rectangle.
			 x_label_Today.text("Pre-2015");
			 y_label_Today.text("Annual Fuel Price ($)");
			 y_label_Today2.text(axis_title);
			 key_label.text("Fuel Type")
			 key_label2.text("Emission Type")




			//add the x axis.
			canvas.append("line")
				.attr("x1", 44)
				.attr("x2", 280)
				.attr("y1", 300)
				.attr("y2", 300)
				.attr("stroke", "black")
				.attr("stroke-width", 6);

			canvas2.append("line")
				.attr("x1", 44)
				.attr("x2", 280)
				.attr("y1", 303)
				.attr("y2", 303)
				.attr("stroke", "black")
				.attr("stroke-width", 6);


			if(co2){
			 	CO2();
			 }else if(sox){
			 	SOX();
			 }else if(nox){
			 	NOX();
			 }else if(pm){
			 	PM();
			 }
			//update the rectangles.
			update();
			update2();		

      	})
	}


	