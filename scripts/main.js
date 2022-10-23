            /* Main dictionary for label */
            var vac = {
                manf: null,
                ndc: null,
                lot: null,
                exp: null
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
            let codeNDC = null;
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
        
            /* pick exp date and add to dictionary */
            document.getElementById('exp-input').addEventListener("input", function(event){
                let dateyear = document.getElementById('exp-input').value;
                let arr = dateyear.split('-')
                let dateFormat = arr[1] + "/" + arr[2] + "/" + arr[0];
                vac.exp = dateFormat;
                var divs = document.getElementsByClassName('info-exp');
                [].slice.call(divs).forEach(function(div) {
                    div.innerHTML = vac.exp;
                })
                generateDataMatrix();
            })
        
            /*generate datamatrix from provided info on button click */
            function generateDataMatrix() {
            var dataMatrixExp = document.getElementById('exp-input').value.replace(/\-/g,'').slice(2);
            var imgs = document.getElementsByClassName('barcode');
                [].slice.call(imgs).forEach(function(img) {
                    img.src = "https://barcode.tec-it.com/barcode.ashx?data=01003" + codeNDC + "417" + dataMatrixExp + "10" + vac.lot + "|21VACGEN&code=DataMatrix&translate-esc=true&dmsize=Default&eclevel=L";
                })
            }


            /* printing function */
            function printDiv(divName) {
                if (vac.manf != null && vac.exp != null && vac.lot != null) {
                var printContents = document.getElementById(divName).innerHTML;
                var originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                window.print();
                window.onafterprint = location.reload();
                document.body.innerHTML = originalContents;
                } else if (vac.manf == null && vac.exp != null && vac.lot != null) {
                    alert("Please pick a vaccine")
                } else if (vac.manf != null && vac.exp == null && vac.lot != null) {
                    alert("Please select an expiration date")
                } else if (vac.manf != null && vac.exp != null && vac.lot == null) {
                    alert("Please enter a lot (type in the lot and press enter)")
                } else if (vac.manf == null && vac.exp == null && vac.lot != null) {
                    alert("Please pick a vaccine and select an expiration date")
                } else if (vac.manf == null && vac.exp != null && vac.lot == null) {
                    alert("Please pick a vaccine and enter a lot (type in the lot and press enter)")
                } else if (vac.manf != null && vac.exp == null && vac.lot == null) {
                    alert("Please select an expiration date and enter a lot (type in the lot and press enter")
                } else {
                    alert("You haven't selected anything")
                }
            }