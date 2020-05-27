

$(function() {
    'use strict';
    
   
    let i;
    let j;
    
   
    const dropdownList = [
        {
            dough: "Hand Tossed",
            sizes: [
                {text: "Small $9.99", price: 9.99},
                {text: "Medium $12.99", price: 12.99},
                {text: "Large $14.99", price: 14.99}
            ],
        },
        {
            dough: "Thin Crust",
            sizes: [
                {text: "Medium $11.99", price: 11.99},
                {text: "Large $13.99", price: 13.99}
            ],
        },
        {
            dough: "New York Style",
            sizes: [
                {text: "Large $16.99", price: 16.99},
                {text: "Extra-Large $19.99", price: 19.99}
            ],
        },
        {
            dough: "Gluten Free",
            sizes: [
                {text: "Small $10.99", price: 10.99},
            ],
        },
    ];

            //VALIDATE NAME
            function isValidName(value) {
                'use strict';
                let validName = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
                if (value.length > 0) {
                    return validName.test(value);
                   
                } else {
                    return false;
                }
    
            }
    
            //VALIDATE LASTNAME
            function isValidLastName(value) {
                'use strict';
                let validLastName = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
                if (value.length > 0) {
                    return validLastName.test(value);
                   
                } else {
                    return false;
                }
    
            }
            //VALIDATE EMAIL
            function isValidEmail(value)  {
                let validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
               if (value.length > 0) {
                   return validEmail.test(value);
    
               } else {
                   
                   return false;
               }
                    
                }
            // VALIDATE PHONE
            function isValidPhone(value) {
                let validPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (value.length > 0) {
                    return validPhone.test(value);
    
                } else {
                    return false;
                }
    
            }

            //VALIDATE STATE
            function isValidState(value) {
                let validState = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
                if (value.length > 0 && value.length <= 2) {
                return validState.test(value);
                } else {
                    return false;
                }
            }
    
            // VALIDATE ZIP
            function isValildZip(value) {
                let validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
                if (value.length > 0) {
                    return validZip.test(value);
    
                } else {
                    return false;
                }
    
    
            }

            //VALIDATE CREDIT CARD HOLDER NAME
            function isValidCcName(value) {
                let validCcName = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
                if (value.length > 0) {
                    return validCcName.test(value);
                   
                } else {
                    return false;
                }   
            }

            //VALIDATE CC NUMBER
            function isValidCreditCard(value) {
                return !/^\d+$/.test(value) || (value.split('').reduce(function(sum, d, n){ 
                    return n===(value.length-1)
                           ? 0 
                           : sum + parseInt((n%2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
                }, 0)) % 10 == 0;

            }

            //VALIDATE CVV NUMBER
            function isValidCVV(value) {
                let myRe = /^[0-9]{3,4}$/;
                let myArray = myRe.exec(value);
                if (value != myArray) {
                    return myRe.test(value);
                } else {
                    return false;
                }

            }


            // FUNCTION VALIDATE 
            let     validAddress,
                    validateAddressInfo;
                   
            validateAddressInfo = function (item){
                let name = $('#primaryfirstName').val();
                let lastname = $('#primarylastName').val();
                let email = $('#email').val();        
                let phone = $('#phonenumber').val();
                let addressType = $('#address-type').val();
                let address = $('#primaryaddress').val();
                let city = $("#primarycity").val();
                let state = $("#primarystate").val();
                let zip = $('#primaryzip').val();
                
                
    
                validAddress = true;

                if (item === undefined || item === "primaryfirstName") {
                    $("#primaryfirstName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(name)) {
                        $("#primaryfirstName").addClass("is-valid");
                    } else {
                            $("#primaryfirstName").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "primarylastName") {
                    $("#primarylastName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidLastName(lastname)) {
                        $("#primarylastName").addClass("is-valid");
                    } else {
                            $("#primarylastName").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "email") {
                    $("#email").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidEmail(email)) {
                        $("#email").addClass("is-valid");
                    } else {
                            $("#email").addClass("is-invalid");
                            validAddress = false;
                        }
                }
                if (item === undefined || item === "phonenumber") {
                    $("#phonenumber").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidPhone(phone)) {
                        $("#phonenumber").addClass("is-valid");
                    } else {
                            $("#phonenumber").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "address-type") {
                    $("#address-type").removeClass("is-valid").removeClass("is-invalid");
                    if (addressType !== "" ) {
                        $("#address-type").addClass("is-valid");
                    } else {
                            $("#address-type").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "primaryaddress") {
                    $("#primaryaddress").removeClass("is-valid").removeClass("is-invalid");
                    if (address.length > 0) {
                        $("#primaryaddress").addClass("is-valid");
                    } else {
                        $("#primaryaddress").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "primarycity") {
                    $("#primarycity").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(city)) {
                        $("#primarycity").addClass("is-valid");
                    } else {
                        $("#primarycity").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "primarystate") {
                    $("#primarystate").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidState(state)) {
                        $("#primarystate").addClass("is-valid");
                    } else {
                        $("#primarystate").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "primaryzip") {
                    $("#primaryzip").removeClass("is-valid").removeClass("is-invalid");
                    if (isValildZip(zip)) {
                        $("#primaryzip").addClass("is-valid");
                    } else {
                        $("#primaryzip").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined && validAddress === true) {
                    $("button#next").prop("disabled", false);
                }
                return validAddress;
            };

            // VALIDATE BILLING INFO
           
            let validBilling,
                validateBillingInfo;

             validateBillingInfo = function(item) {
                let billingName = $('#secondaryfirstName').val();
                let bilingLastname = $('#secondarylastName').val();
                let billingAddressType = $('#billingaddress-type').val();
                let billingCity = $('#secondarycity').val();
                let billingState = $('#secondarystate').val();
                let billingZip = $('#secondaryzip').val();
                let cardHolder = $('#cc-name').val();
                let ccCardNum  = $('#cc-number').val();
                let expMonth = $('#cc-month').val();
                let expYear = $('#cc-year').val();
                let cvvCode = $('#cc-cvv').val();
                
                validBilling = true;

                if (item === undefined || item === "secondaryfirstName") {
                    $("#secondaryfirstName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCcName(billingName)) $("#secondaryfirstName").addClass("is-valid");
                    else {
                      $("#secondaryfirstName").addClass("is-invalid");
                      billingValid = false;
                    }
                  }

                if (item === undefined || item === "secondarylastName") {
                    $("#secondarylastName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCcName(bilingLastname)) {
                        $("#secondarylastName").addClass("is-valid");
                    } else {
                            $("#secondarylastName").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "billingaddress-type") {
                    $("#billingaddress-type").removeClass("is-valid").removeClass("is-invalid");
                    if (billingAddressType !== "") {
                        $("#billingaddress-type").addClass("is-valid");
                    } else {
                            $("#billingaddress-type").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "secondarycity") {
                    $("#secondarycity").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(billingCity)) {
                        $("#secondaryaddress2").addClass("is-valid");
                    } else {
                            $("#secondaryaddress2").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "secondarystate") {
                    $("#secondarystate").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidState(billingState)) {
                        $("#primarystate").addClass("is-valid");
                    } else {
                        $("#primarystate").addClass("is-invalid");
                            validAddress = false;
                        }
                } 
                if (item === undefined || item === "secondaryzip") {
                    $("#secondaryzip").removeClass("is-valid").removeClass("is-invalid");
                    if (isValildZip(billingZip)) {
                        $("#primaryzip").addClass("is-valid");
                    } else {
                        $("#primaryzip").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "cc-name") {
                    $("#cc-name").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(cardHolder)) $("#secondaryfirstName").addClass("is-valid");
                    else {
                      $("#secondaryfirstName").addClass("is-invalid");
                      billingValid = false;
                    }

                }

                if (item === undefined || item === "cc-number") {
                    $("#cc-number").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCreditCard(ccCardNum )) $("#cc-number").addClass("is-valid");
                    else {
                      $("#cc-number").addClass("is-invalid");
                      billingValid = false;
                    }

                }

                
                if (item === undefined || item === "cc-month") {
                    $("#cc-month").removeClass("is-valid").removeClass("is-invalid");
                    if (expMonth !== "" ) {
                        $("#address-type").addClass("is-valid");
                    } else {
                            $("#address-type").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "cc-year") {
                    $("#cc-year").removeClass("is-valid").removeClass("is-invalid");
                    if (expYear  !== "" ) {
                        $("#cc-year").addClass("is-valid");
                    } else {
                            $("#cc-year").addClass("is-invalid");
                            validAddress = false;
                        }
                } 

                if (item === undefined || item === "cc-cvv") {
                    $("#cc-cvv").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCVV(cvvCode))  $("#cc-cvv").addClass("is-valid");
                     else {
                            $("#cc-cvv").addClass("is-invalid");
                            validAddress = false;
                        }
                } 


                if (item === undefined && validBilling === true) {
                    $("button#checkout").prop("disabled", false);
                }



                return validBilling;

                

            };

    //PIZZA PRICE CALCULATION
    function totalPrice () {
        let price = 0;
        let topping;
        let costOfSize = $("select#sizeoption").val();
        let costOfCheese = $("select#cheeseoption").val();
        let costOfSauce = $("select#sauceoption").val();
        let costofTopping;
        let toppingEa = "";
        if (costOfSize !== null) {
            price += Number(costOfSize);
            price += Number(costOfCheese);
            price += Number(costOfSauce);
            let toppingCount = 0;
            
            $("input[name='topping']:checked").each(function() {
                toppingCount++;
                toppingEa =  toppingEa + $(this).val() + ", ";
            });
            costofTopping = 0.99 * toppingCount;
            //window.console.log(costofTopping);
            price += 0.99 * toppingCount;
        }
        window.console.log("total = " + price);

        $("#ordertotal").text("$ " + price.toFixed(2));
        $("#ordertotal2").text("$ " + price.toFixed(2));
        if (costOfSize !== null ) {
            $("#doughtotal").text($("input[name='optDough']:checked").val());
            $("#sizetotal").text("$" + $("#sizeoption option:selected").val());
            $("#cheesetotal").text("$" + $("#cheeseoption option:selected").val());
            $("#saucetotal").text("$"+ $("#sauceoption option:selected").val());
            $("#toppingtotal").text( "$" + costofTopping.toFixed(2) );
        }

    };

    // DROP DOWN SIZE LIST
    let dropdownSizeList;
    let sizeslist;
    sizeslist = dropdownList;
    dropdownSizeList = function(dough) {
        let dropdown = $("#sizeoption");
        dropdown.empty();
        dropdown.append('<option selected="true" disabled>Choose...</option>');
        dropdown.prop("selectedIndex", 0);
        
        for (i = 0; i < sizeslist.length; i++) {
            let doughList = sizeslist[i];
            if (doughList.dough === dough) {
                let size = doughList.sizes;
                for ( j = 0; j < size.length; j++) {
                dropdown.append($("<option></option>").attr("value", size[j].price).text(size[j].text));
                } 
                dropdown.prop("disabled", false);
            }
        }

    }
        

    // BUILDING PIZZA STEP VALIDATION

    function buildingPizza() {
    let doughType = $("input[name='Dough-option']").val();
    let pizzaSize = $("#sizeoption").val();
    let cheeseOp = $("#cheeseoption");
    let sauceOp = $("#sauceoption");
    let toppingOp = $("input[name='topping']");
        if ( doughType === "" || pizzaSize === null) {
            cheeseOp.prop("disabled", true);
            sauceOp.prop("disabled", true);
            toppingOp.each(function() {
                $(this).prop("disabled", true);
            });
        } else {
            cheeseOp.prop("disabled", false);
            sauceOp.prop("disabled", false);
            toppingOp.each(function() {
                $(this).prop("disabled", false);
            });
        }

    };

    
    

    

 
    // CUSTOMIZE PIZZA 
    $("button#finishbtn").click(function() {
        let pizzadough = $("input[name='Dough-option']:checked").val();
        let size = $("select#sizeoption option:selected").text();
        let cheese = $("select#cheeseoption option:selected").text();
        let sauce = $("select#sauceoption option:selected").text();   
        let pizzatopping = new Array();
        $("input[name='topping']:checked").each(function() {
               pizzatopping.push($(this).val());   
           });
        
        let pizzaDetails = (size + " " + pizzadough + "  " + pizzatopping  + " pizza, " + cheese + " cheese" + " with " + sauce + " sauce");        
           window.console.log(pizzaDetails);
      



        let order = confirm("Finished your order?");
        if (order === true ) {
            $("#doughtype").append(pizzadough);
            $("#sizechoice").append(size);
            $("#cheesechoice").append(cheese);
            $("#saucechoice").append(sauce);
            let strToppings = "";
            for(i = 0; i < pizzatopping.length; i++) {
                strToppings += pizzatopping[i] + " ";
            } 
            $("#toppingchoice").append(strToppings);
            window.console.log(strToppings);
            $("#billing-box").show();
            $("span#emptycart").hide();
            $("#ordering-box").hide();

        } else {
            return false;

        }


    });

    // FORM VALIDATION
    window.addEventListener('load', function() {
        $("#ordering-box").hide();
        $("#billing-box").hide();
        $("input#otheraddress").hide();
        $("input#billingotheraddress").hide();

        $("select#address-type").change(function() {
            let otherAddress = $("select#address-type option:selected").val();
        if( otherAddress === "other") {
            $("input#otheraddress").slideDown("slow");
        } else {
            $("input#otheraddress").hide();
            return false;
        }

        });

        $("select#billingaddress-type").change(function() {
            let billingOtherAddress = $("select#billingaddress-type option:selected").val();
        if( billingOtherAddress === "other") {
            $("input#billingotheraddress").show();
        } else {
            $("input#billingotheraddress").hide();
            return false;
        }

        });



        
        // ORDER FORM UPDATE
        let updateform;
        $("input[name='Dough-option']").change(function() {
            window.console.log($(this).val());
            dropdownSizeList($(this).val());
            buildingPizza();
            totalPrice();
            
        });

        $("#sizeoption").change(function() {
            buildingPizza();
            totalPrice();
        });
        $("#cheeseoption").change(function() {
            totalPrice();
        });
        $("#sauceoption").change(function() {
            totalPrice();
        });
        $("#toppingoption").change(function() {
            totalPrice();
        });

        

        // CLICK NEXT TO BUILD PIZZA
        $("button#next").click (function() {    

            if (validateAddressInfo() === true) {
                // event.preventDefault();
            $("#ordering-box").show();
            $('#address-box').hide();
            }

           

        });

        $("button#checkout").click (function() {

            validateBillingInfo();

        });
    

      // AUTOFILL IF USE SAME ADDRESS 
       
      $('input#same-address').click(function() {
          
        if ($(this).is(':checked')) 
            { 
                document.getElementById('secondaryfirstName').value=document. 
                        getElementById('primaryfirstName').value;
                document.getElementById('secondarylastName').value=document. 
                        getElementById('primarylastName').value; 
                document.getElementById('secondaryaddress').value=document. 
                        getElementById('primaryaddress').value; 
                document.getElementById('billingaddress-type').value=document. 
                        getElementById('address-type').value;
                document.getElementById('secondaryaddress2').value=document. 
                        getElementById('primaryaddress2').value; 
                document.getElementById('secondarycity').value=document. 
                        getElementById('primarycity').value; 
                document.getElementById('secondarystate').value=document. 
                        getElementById('primarystate').value;  
                document.getElementById('secondaryzip').value=document. 
                        getElementById('primaryzip').value 
            } 
                
            else
            { 
                document.getElementById('secondaryfirstName').value=""; 
                document.getElementById('secondarylastName').value=""; 
                document.getElementById('billingaddress-type').value=""; 
                document.getElementById('secondaryaddress').value=""; 
                document.getElementById('secondaryaddress2').value=""; 
                document.getElementById('secondarycity').value=""; 
                document.getElementById('secondarystate').value=""; 
                document.getElementById('secondaryzip').value=""; 
            }


      });
        
      

     
    }, false);
});






    



