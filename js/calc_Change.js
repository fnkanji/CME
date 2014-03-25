var transitioned=false;

    function changeCalc(){

        if(chose){
            clickable=true;
            transitioned=true;
            //document.getElementById("calcPanel").style.background="#437922";
            document.getElementById("calcPanel").style.width="220px";
            document.getElementById("calc_header").style.fontSize="16px";
            var elem = document.getElementById("breaks");
            elem.parentNode.removeChild(elem);
            var elem2 = document.getElementById("breaks2");
            elem2.parentNode.removeChild(elem2);
            var elem3 = document.getElementById("space");
            elem3.parentNode.removeChild(elem3);
            var elem4 = document.getElementById("hiddenbreak2");
            elem4.parentNode.removeChild(elem4);
            document.getElementById("hiddenbreak").removeAttribute("hidden");
            document.getElementById("hidden1").removeAttribute("hidden");
            document.getElementById("hidden2").removeAttribute("hidden");
            document.getElementById("sl4").removeAttribute("hidden");
            document.getElementById("sl5").removeAttribute("hidden");
            document.getElementById("sl6").removeAttribute("hidden");
            document.getElementById("sl7").removeAttribute("hidden");
            document.getElementById("sl8").removeAttribute("hidden");
            document.getElementById("sl9").removeAttribute("hidden");
            document.getElementById("sl10").removeAttribute("hidden");
            document.getElementById("sl11").removeAttribute("hidden");
            document.getElementById("sl12").removeAttribute("hidden");
            document.getElementById("goAway2").removeAttribute("hidden");
            document.getElementById("goAway3").removeAttribute("hidden");
            document.getElementById("goAway4").removeAttribute("hidden");
            document.getElementById("goAway5").removeAttribute("hidden");
            document.getElementById("goAway6").removeAttribute("hidden");
            document.getElementById("goAway7").removeAttribute("hidden");
            document.getElementById("goAway8").removeAttribute("hidden");
            document.getElementById("goAway10").removeAttribute("hidden");
            document.getElementById("goAway11").removeAttribute("hidden");
            document.getElementById("goAway12").removeAttribute("hidden");
            document.getElementById("goAway13").removeAttribute("hidden");
            document.getElementById("goAway14").removeAttribute("hidden");
            document.getElementById("goAway15").removeAttribute("hidden");
            document.getElementById("goAway16").removeAttribute("hidden");
            document.getElementById("goAway17").removeAttribute("hidden");
            document.getElementById("goAway18").removeAttribute("hidden");
            document.getElementById("goAway19").removeAttribute("hidden");
            document.getElementById("goAway20").removeAttribute("hidden");
            document.getElementById("goAway21").removeAttribute("hidden");
            document.getElementById("calcPanel").style.width="300ppx";
            document.getElementsByTagName("form")[0].style.fontSize="11px";
            document.getElementsByTagName("form")[1].style.fontSize="11px";

            $('.ei_image').each(function(){
               $(this).css("background-image","url(css/newbars3.jpg)");
            });

            $('.ei_preview').each(function(){
               $(this).css("background-image","url(css/newbars3.jpg)");
            });

            

            Element.prototype.remove = function() {
                this.parentElement.removeChild(this);
            }
            NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
                for(var i = 0, len = this.length; i < len; i++) {
                    if(this[i] && this[i].parentElement) {
                        this[i].parentElement.removeChild(this[i]);
                    }
                }
            }

            document.getElementById("getstats").remove();
        }


    }