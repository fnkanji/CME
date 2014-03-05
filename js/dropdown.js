var selected;

        function setOptions(chosen) { 

            var sizebox = document.myform.shipsize;



            sizebox.options.length = 0;

            if (chosen == " ") {

                sizebox.options[sizebox.options.length] = new Option('Please select one of the options above first', ' ');



            }
            if (chosen == "none"){
                sizebox.options[sizebox.options.length] = new Option(unescape("                                  ".replace(/ /g, "%A0")), ' ');
            }

            if (chosen == "COT") {

                sizebox.options[sizebox.options.length] = new Option('200,000+ dwt', 'COTone');

                sizebox.options[sizebox.options.length] = new Option('120,000-199,999 dwt', 'COTtwo');

                sizebox.options[sizebox.options.length] = new Option('80,000-119,999 dwt', 'COTthree');

                sizebox.options[sizebox.options.length] = new Option('60,000-79,999 dwt', 'COTfour');

                sizebox.options[sizebox.options.length] = new Option('10,000-59,999 dwt', 'COTfive');

                sizebox.options[sizebox.options.length] = new Option('0-9999 dwt', 'COTsix');

                selected = 1;



            }

            if (chosen == "PT") {

                sizebox.options[sizebox.options.length] = new Option('60,000+ dwt', 'PTone');

                sizebox.options[sizebox.options.length] = new Option('20,000_59,999 dwt', 'PTtwo');

                sizebox.options[sizebox.options.length] = new Option('10,000-19,999 dwt', 'PTthree');

                sizebox.options[sizebox.options.length] = new Option('5000-9999 dwt', 'PTfour');

                sizebox.options[sizebox.options.length] = new Option('0-4999 dwt', 'PTfive');

    			selected = 7;

            }

            if (chosen == "CT") {

                sizebox.options[sizebox.options.length] = new Option('20,000+ dwt', 'CTone');

                sizebox.options[sizebox.options.length] = new Option('10,000-19,999 dwt', 'CTtwo');

                sizebox.options[sizebox.options.length] = new Option('5000-9999 dwt', 'CTthree');

                sizebox.options[sizebox.options.length] = new Option('0-4999 dwt', 'CTfour');

                selected = 12;

            }

            if (chosen == "LPGT") {

                sizebox.options[sizebox.options.length] = new Option('50,000+ cbm', 'LPGTone');

                sizebox.options[sizebox.options.length] = new Option('0-49,999 cbm', 'LPGTtwo');

    			selected = 16;

            }

            if (chosen == "LNGT") {

                sizebox.options[sizebox.options.length] = new Option('200,000+ cbm', 'LNGTone');

                sizebox.options[sizebox.options.length] = new Option('0-199,999 cbm', 'LNGTtwo');

                selected = 18;

            }

            if (chosen == "OT") {

                sizebox.options[sizebox.options.length] = new Option('Other', 'OTone');

                selected = 20;

            }     

            if (chosen == "B") {

                sizebox.options[sizebox.options.length] = new Option('200,000+ dwt', 'Bone');

                sizebox.options[sizebox.options.length] = new Option('100,000-199,999 dwt', 'Btwo');

                sizebox.options[sizebox.options.length] = new Option('60,000-99,999 dwt', 'Bthree');

                sizebox.options[sizebox.options.length] = new Option('35,000-59,999 dwt', 'Bfour');

                sizebox.options[sizebox.options.length] = new Option('10,000_34,999 dwt', 'Bfive');

                sizebox.options[sizebox.options.length] = new Option('0-9999 dwt', 'Bsix');

                selected = 21;

            }   

            if (chosen == "GC") {

                sizebox.options[sizebox.options.length] = new Option('10,000+ dwt', 'GCone');

                sizebox.options[sizebox.options.length] = new Option('5000-9999 dwt', 'GCtwo');

                sizebox.options[sizebox.options.length] = new Option('0-4999 dwt', 'GCthree');

                sizebox.options[sizebox.options.length] = new Option('10,000+ dwt, 100+ TEU', 'GCfour');

                sizebox.options[sizebox.options.length] = new Option('5000-9999 dwt, TEU', 'GCfive');

                sizebox.options[sizebox.options.length] = new Option('0-4999 dwt, TEU', 'GCsix');

                selected = 27;

            }

            if (chosen == "OD") {

                sizebox.options[sizebox.options.length] = new Option('Reefer', 'ODone');

                selected = 33;

            } 

            if (chosen == "C") {

                sizebox.options[sizebox.options.length] = new Option('8000+ TEU', 'Cone');

                sizebox.options[sizebox.options.length] = new Option('5000-7999 TEU', 'Ctwo');

                sizebox.options[sizebox.options.length] = new Option('3000-4999 TEU', 'Cthree');

                sizebox.options[sizebox.options.length] = new Option('2000-2999 TEU', 'Cfour');

                sizebox.options[sizebox.options.length] = new Option('1000-1999 TEU', 'Cfive');

                sizebox.options[sizebox.options.length] = new Option('0-999 TEU', 'Csix');

                selected = 34;

            }

            if (chosen == "V") {

                sizebox.options[sizebox.options.length] = new Option('4000+ ceu', 'Vone');

                sizebox.options[sizebox.options.length] = new Option('0-3999 ceu', 'Vtwo');

                selected = 40;

            }

            if (chosen == "R") {

                sizebox.options[sizebox.options.length] = new Option('2000+ lm', 'Rone');

                sizebox.options[sizebox.options.length] = new Option('0-1999 lm', 'Rtwo');

    			selected = 42;

            }

            createGraph();

        }

        function setPower(choice) {

            switch (choice)

            {

            case "COTone":

            	selected = 1;

              	break;

            case "COTtwo":

                selected = 2;

              	break;

            case "COTthree":

                selected = 3;

              	break;

            case "COTfour":

            	selected = 4;

              	break;

            case "COTfive":

            	selected = 5;

              	break;

            case "COTsix":

                selected = 6;

              	break;

            case "PTone":

            	selected = 7;

              	break;

            case "PTtwo":

            	selected = 8;

              	break;

            case "PTthree":

            	selected = 9;

              	break;

            case "PTfour":

            	selected = 10;

              	break;

            case "PTfive":

            	selected = 11;

              	break;

            case "CTone":

            	selected = 12;

              	break;

            case "CTtwo":

            	selected = 13;

              	break;

            case "CTthree":

            	selected = 14;

              	break;

            case "CTfour":

            	selected = 15;

              	break;

            case "LPGTone":

            	selected = 16;

              	break;

            case "LPGTtwo":

            	selected = 17;

              	break;

            case "LNGTone":

            	selected = 18;

              	break;

            case "LNGTtwo":

            	selected = 19;

              	break;

            case "OTone":

            	selected = 20;

            	break;

            case "Bone":

            	selected = 21;

              	break;

            case "Btwo":

            	selected = 22;

              	break;

            case "Bthree":

            	selected = 23;

              	break;

            case "Bfour":

            	selected = 24;

              	break;

            case "Bfive":

            	selected = 25;

              	break;

            case "Bsix":

            	selected = 26;

              	break;

            case "GCone":

            	selected = 27;

              	break;

            case "GCtwo":

            	selected = 28;

              	break;

            case "GCthree":

            	selected = 29;

              	break;

            case "GCfour":

            	selected = 30;

              	break;

            case "GCfive":

            	selected = 31;

              	break;

            case "GCsix":

            	selected = 32;

              	break;

            case "ODone":

            	selected = 33;

            	break;

            case "Cone":

            	selected = 34;

              	break;

            case "Ctwo":

            	selected = 35;

              	break;

            case "Cthree":

            	selected = 36;

              	break;

            case "Cfour":

            	selected = 37;

              	break;

            case "Cfive":

            	selected = 38;

              	break;

            case "Csix":

                selected = 39;

              	break;

            case "Vone":

            	selected = 40;

              	break;

            case "Vtwo":

            	selected = 41;

              	break;

            case "Rone":

            	selected = 42;

              	break;

            case "Rtwo":

            	selected = 43;

              	break;

            }

            createGraph();



        }