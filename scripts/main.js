            /* Main dictionary for label */
            var vac = {
                manf: null,
                ndc: null,
                lot: null
            };

            /* When button clicked toggle between hiding and showing list */
            function toggleContent() {
                document.getElementById("name-dropdown").classList.toggle("show");
            }

            function filterFunction() {
                var input, filter, ul, li, p, i;
                input = document.getElementById("name-input");
                filter = input.value.toUpperCase();
                div = document.getElementById("name-dropdown");
                p = div.getElementsByTagName("p");
                for (i = 0; i < p.length; i++) {
                    txtValue = p[i].textContent || p[i].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        p[i].style.display = "";
                    } else {
                        p[i].style.display = "none";
                    }
                }
            }

            function vacShow() {
                document.getElementById("name-dropdown").classList.add("show");
            }

            /* close dropdown after clicking outside of it */
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }
            document.getElementById("name-dropdown").addEventListener('click', function(event){
                event.stopPropagation();
            });
        
            /* select and put vaccine manf in dictionary */
            var codeNDC = null;
            function pfizerBivalent() {
                document.getElementById('manf').innerHTML = document.getElementById('pfizer-bivalent').innerHTML;
                vac.manf = "Pfizer Bivalent";
                vac.ndc = "59267-0304-01";
                codeNDC = "5926703041";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function pfizerBivalentPeds() {
                document.getElementById('manf').innerHTML = document.getElementById('pfizer-bivalent-peds').innerHTML;
                vac.manf = "Pfizer Pediatric Bivalent";
                vac.ndc = "59267-0565-01";
                codeNDC = "5926705651";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function modernaBivalent() {
                document.getElementById('manf').innerHTML = document.getElementById('moderna-bivalent').innerHTML;
                vac.manf = "Moderna Bivalent";
                vac.ndc = "80777-0282-05";
                codeNDC = "8077728205";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function pfizer() {
                document.getElementById('manf').innerHTML = document.getElementById('pfizer').innerHTML;
                vac.manf = "Pfizer";
                vac.ndc = "59267102501";
                codeNDC = "5926710251";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }
           
            function pfizerPeds() {
                document.getElementById('manf').innerHTML = document.getElementById('pfizer-peds').innerHTML;
                vac.manf = "Pfizer Pediatric";
                vac.ndc = "59267105501";
                codeNDC = "5926710551";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function moderna() {
                document.getElementById('manf').innerHTML = document.getElementById('moderna').innerHTML;
                vac.manf = "Moderna";
                vac.ndc = "80777027310";
                codeNDC = "8077727310";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function janssen() {
                document.getElementById('manf').innerHTML = document.getElementById('janssen').innerHTML;
                vac.manf = "Janssen";
                vac.ndc = "59676058005";
                codeNDC = "5967658005";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function flucelvax() {
                document.getElementById('manf').innerHTML = document.getElementById('flucelvax').innerHTML;
                vac.manf = "Flucelvax";
                vac.ndc = "70461-0422-10";
                codeNDC = "7046142210";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function fluarix() {
                document.getElementById('manf').innerHTML = document.getElementById('fluarix').innerHTML;
                vac.manf = "Fluarix";
                vac.ndc = "58160-0890-52";
                codeNDC = "5816089052";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function fluzoneHD() {
                document.getElementById('manf').innerHTML = document.getElementById('fluzoneHD').innerHTML;
                vac.manf = "Fluzone HD";
                vac.ndc = "49281-0122-65";
                codeNDC = "4928112265";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function fluad() {
                document.getElementById('manf').innerHTML = document.getElementById('fluad').innerHTML;
                vac.manf = "Fluad";
                vac.ndc = "70461-0122-03";
                codeNDC = "7046112203";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function shingrix() {
                document.getElementById('manf').innerHTML = document.getElementById('shingrix').innerHTML;
                vac.manf = "Shingrix";
                vac.ndc = "58160-0823-11";
                codeNDC = "5816082311";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function heplisavb() {
                document.getElementById('manf').innerHTML = document.getElementById('heplisavb').innerHTML;
                vac.manf = "Heplisav-B";
                vac.ndc = "43528-0003-05";
                codeNDC = "4352800305";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function twinrix() {
                document.getElementById('manf').innerHTML = document.getElementById('twinrix').innerHTML;
                vac.manf = "TwinRix";
                vac.ndc = "58160-0815-52";
                codeNDC = "5816081552";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function gardasil9() {
                document.getElementById('manf').innerHTML = document.getElementById('gardasil9').innerHTML;
                vac.manf = "Gardasil 9";
                vac.ndc = "00006-4121-02";
                codeNDC = "0006412102";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function prevnar13() {
                document.getElementById('manf').innerHTML = document.getElementById('prevnar13').innerHTML;
                vac.manf = "Prevnar 13";
                vac.ndc = "00005-1971-02";
                codeNDC = "0005197102";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function prevnar20() {
                document.getElementById('manf').innerHTML = document.getElementById('prevnar20').innerHTML;
                vac.manf = "Prevnar 20";
                vac.ndc = "00005-2000-10";
                codeNDC = "0005200010";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function pneumovax23() {
                document.getElementById('manf').innerHTML = document.getElementById('pneumovax23').innerHTML;
                vac.manf = "Pneumovax23";
                vac.ndc = "00006-4837-03";
                codeNDC = "0006483703";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function boostrixvial() {
                document.getElementById('manf').innerHTML = document.getElementById('boostrixvial').innerHTML;
                vac.manf = "Boostrix Vial";
                vac.ndc = "58160-0842-11";
                codeNDC = "5816084211";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            function boostrixpfs() {
                document.getElementById('manf').innerHTML = document.getElementById('boostrixpfs').innerHTML;
                vac.manf = "Boostrix PFS";
                vac.ndc = "58160-0842-52";
                codeNDC = "5816084252";
                var divs = document.getElementsByClassName('info-manf');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.manf;
                })
                var NDCdivs = document.getElementsByClassName('info-ndc');
                [].slice.call(NDCdivs).forEach(function(div) {
                    div.innerHTML = vac.ndc;
                })
                var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                generateDataMatrix();
            }

            /* enter lot and display when done and add to dictionary */
            document.getElementById('lot-input').addEventListener('keydown', function(event) {
                if (!event) {
                    var event = window.event;
                }
                if (event.keyCode == 13) {
                    submitLot();
                }
            }, false);
            function submitLot() {
                document.getElementById('lot').innerHTML = document.getElementById('lot-input').value.toUpperCase();
                vac.lot = document.getElementById('lot').innerHTML.toUpperCase();
                document.getElementById('lot-input').value = '';
                var divs = document.getElementsByClassName('info-lot');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.lot;
                })
                generateDataMatrix();
            }

            let currentMonth = new Date().getMonth();
            
            let currentDay = new Date().getDate();

            let currentYear = new Date().getFullYear();

            function isLeapYear(year) {
                if (year % 400 === 0) return true;
                if (year % 100 === 0) return false;
                return year % 4 === 0;
            }

            function changeDays() {
                let monthName = monthSelect.value; 
                daySelect.innerHTML = "";
                if (monthName == "Jan") {
                    monthInput = 0;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Feb" && isLeapYear(Number(yearSelect.value))) {
                    monthInput = 1;
                    for (let i = 1; i < 30; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Feb" && !isLeapYear(Number(yearSelect.value))) {
                    monthInput = 1;
                    for (let i = 1; i < 29; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Mar") {
                    monthInput = 2;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Apr") {
                    monthInput = 3;
                    for (let i = 1; i < 31; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "May") {
                    monthInput = 4;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Jun") {
                    monthInput = 5;
                    for (let i = 1; i < 31; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }
                if (monthName == "Jul") {
                    monthInput = 6;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                } 
                if (monthName == "Aug") {
                    monthInput = 7;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }  
                if (monthName == "Sep") {
                    monthInput = 8;
                    for (let i = 1; i < 31; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }  
                if (monthName == "Oct") {
                    monthInput = 9;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }   
                if (monthName == "Nov") {
                    monthInput = 10;
                    for (let i = 1; i < 31; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                } 
                if (monthName == "Dec") {
                    monthInput = 11;
                    for (let i = 1; i < 32; i++) {
                        var day = document.createElement("option");
                        day.value = i;
                        day.innerHTML = i;
                        daySelect.appendChild(day)
                    }
                }                 
            }

            function changeYears() {
                yearSelect.innerHTML = "";
                for (i = 0; i < 11; i++) {
                    var year = document.createElement("option");
                    year.value = new Date().getFullYear() + i;
                    year.innerHTML = new Date().getFullYear() + i;
                    yearSelect.appendChild(year)
                }
            }

            var monthSelect = document.getElementById("month-select");
            var daySelect = document.getElementById("day-select");
            var yearSelect = document.getElementById("year-select");
            monthSelect.value = monthSelect[new Date().getMonth()].value;
            changeDays();
            daySelect.value = daySelect[new Date().getDate() - 1].value;
            changeYears();
            expFormat();
            if (monthInput < 9) {
                document.getElementById("month").innerHTML = "0" + (monthInput + 1);
            } else {
                document.getElementById("month").innerHTML = (monthInput + 1);
            }
            if (daySelect.value < 10) {
                document.getElementById("day").innerHTML = "0" + daySelect.value;
            } else {
                document.getElementById("day").innerHTML = daySelect.value;
            }
            document.getElementById("year").innerHTML = yearSelect.value;
            
            /* pick exp date and add to dictionary */
            monthSelect.addEventListener('change', function() {
                expFormat();
                generateDataMatrix();
                changeDays();
                if (monthInput < 9) {
                    document.getElementById("month").innerHTML = "0" + (monthInput + 1);
                } else {
                    document.getElementById("month").innerHTML = (monthInput + 1);
                }
                if (daySelect.value < 10) {
                    document.getElementById("day").innerHTML = "0" + daySelect.value;
                } else {
                    document.getElementById("day").innerHTML = daySelect.value;
                }  
            })

            daySelect.addEventListener('change', function() {
                expFormat();
                generateDataMatrix();
                if (daySelect.value < 10) {
                    document.getElementById("day").innerHTML = "0" + daySelect.value;
                } else {
                    document.getElementById("day").innerHTML = daySelect.value;
                }
            })

            yearSelect.addEventListener('change', function() {
                expFormat();
                generateDataMatrix();
                document.getElementById("year").innerHTML = yearSelect.value;    
            })

            function expFormat() {
                formatYear = yearSelect.value.slice(2);
                if (monthInput < 9) {
                    formatMonth = "0" + (monthInput + 1);
                } else {
                    formatMonth = (monthInput + 1);
                }
                if (daySelect.value < 10) {
                    formatDay = "0" + daySelect.value;
                } else {
                    formatDay = daySelect.value;
                }
                var divs = document.getElementsByClassName('info-exp');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = formatMonth + "/" + formatDay + "/" + yearSelect.value;
                })
            }
        
            /*generate datamatrix from provided info on button click */
            function generateDataMatrix() {
            var imgs = document.getElementsByClassName('barcode');
                [].slice.call(imgs).forEach(function(img) {
                    img.src = "https://barcode.tec-it.com/barcode.ashx?data=01003" + codeNDC + "417" + formatYear + formatMonth + formatDay + "10" + vac.lot + "|21VACGEN&code=DataMatrix&translate-esc=true&dmsize=Default&eclevel=L";
                })
            }


            /* printing function */
            function printDiv(divName) {
                var printContents = document.getElementById(divName).innerHTML;
                var originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                window.print();
                window.onafterprint = location.reload();
                document.body.innerHTML = originalContents;
            }