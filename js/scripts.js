

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
            function isValidCreditCard(num){

                var inputNum = num.toString();
                var sum = 0;
                var doubleUp = false;
            
                /* from the right to left, double every other digit starting with the second to last digit.*/
                for (var i = inputNum.length - 1; i >= 0; i--)
                {
                    var curDigit = parseInt(inputNum.charAt(i));
            
                    /* double every other digit starting with the second to last digit */
                    if(doubleUp)
                    {
                        /* doubled number is greater than 9 than subtracted 9 */
                        if((curDigit*2) > 9)
                        {
                          sum +=( curDigit*2)-9;
                        }
                        else
                        {
                          sum += curDigit*2;
                        }
                    }
                    else
                    {
                      sum += curDigit;
                    }
                    var doubleUp =!doubleUp
                }
            
              /* sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.  */
              return (sum % 10) == 0  ? true : false;
            
            };

            // VALIDATE DIGIT
            function isValidDigit(value) {
                let digits = /^\d+$/;
                if (value.length >= 13) {
                    return digits.test(value);
                } else {
                    return false;
                }

            }

            // VALIDATE VISA CARD
            function isValidVisa(inputtxt) {
                let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
               // window.console.log(inputtxt);
                if(inputtxt.match(cardno))
                        {
                    return true;
                        }
                    else
                        {
                        return false;
                        }
                }


            // VALIDATE MASTER CARD
            function isValidMaster(inputtxt) {
                let cardno = /^(?:5[1-5][0-9]{14})$/;
                if(inputtxt.match(cardno))
                        {
                    return true;
                        }
                    else
                        {
                        return false;
                        }
                }



            // VALIDATE AMXERICANEXPRESS CARD
            function isValidAmex(inputtxt) {
                let cardno = /^(?:3[47][0-9]{13})$/;
                if(inputtxt.match(cardno))
                        {
                    return true;
                        }
                    else
                        {
                        return false;
                        }
                }


            //VALIDATE CVV NUMBER
            function isValidCVV(value) {
                let pattern = /^[0-9]{3,4}$/;
                if (value.length > 0) {                    
                    return pattern.test(value);
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
                let billingAddress = $('#secondaryaddress').val();
                let billingCity = $('#secondarycity').val();
                let billingState = $('#secondarystate').val();
                let billingZip = $('#secondaryzip').val();
                let cardHolder = $('#cc-name').val();
                let ccCardNum  = $('#cc-number').val();
                let expMonth = $('#cc-month').val();
                let expYear = $('#cc-year').val();
                let cvvCode = $('#cc-cvv').val();
                let validExp = true;
                validBilling = true;

                if (item === undefined || item === "secondaryfirstName") {
                    $("#secondaryfirstName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCcName(billingName)) $("#secondaryfirstName").addClass("is-valid");
                    else {
                      $("#secondaryfirstName").addClass("is-invalid");
                      validBilling = false;
                    }
                  }

                if (item === undefined || item === "secondarylastName") {
                    $("#secondarylastName").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCcName(bilingLastname)) {
                        $("#secondarylastName").addClass("is-valid");
                    } else {
                            $("#secondarylastName").addClass("is-invalid");
                            validBilling = false;
                        }
                } 

                if (item === undefined || item === "billingaddress-type") {
                    $("#billingaddress-type").removeClass("is-valid").removeClass("is-invalid");
                    if (billingAddressType !== "") {
                        $("#billingaddress-type").addClass("is-valid");
                    } else {
                            $("#billingaddress-type").addClass("is-invalid");
                            validBilling = false;
                        }
                } 

                if (item === undefined || item === "secondaryaddress") {
                    $("#secondaryaddress").removeClass("is-valid").removeClass("is-invalid");
                    if (billingAddress.length > 0) {
                        $("#secondaryaddress").addClass("is-valid");
                    } else {
                        $("#secondaryaddress").addClass("is-invalid");
                            validAddress = false;
                        }
                } 


                if (item === undefined || item === "secondarycity") {
                    $("#secondarycity").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(billingCity)) {
                        $("#secondarycity").addClass("is-valid");
                    } else {
                            $("#secondarycity").addClass("is-invalid");
                            validBilling = false;
                        }
                } 

                if (item === undefined || item === "secondarystate") {
                    $("#secondarystate").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidState(billingState)) {
                        $("#secondarystate").addClass("is-valid");
                    } else {
                        $("#secondarystate").addClass("is-invalid");
                        validBilling = false;
                        }
                } 
                if (item === undefined || item === "secondaryzip") {
                    $("#secondaryzip").removeClass("is-valid").removeClass("is-invalid");
                    if (isValildZip(billingZip)) {
                        $("#secondaryzip").addClass("is-valid");
                    } else {
                        $("#secondaryzip").addClass("is-invalid");
                        validBilling = false;
                        }
                } 

                if (item === undefined || item === "cc-name") {
                    $("#cc-name").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidName(cardHolder)) $("#cc-name").addClass("is-valid");
                    else {
                      $("#cc-name").addClass("is-invalid");
                      validBilling = false;
                    }

                }

                if (item === undefined || item === "cc-number") {

                    // Remove class
                    $("#cc-number").removeClass("is-valid").removeClass("is-invalid");

                    //validate card number and digits
                    if (isValidCreditCard(ccCardNum ) && isValidDigit(ccCardNum)) {
                        $("#cc-number").addClass("is-valid");
                    } else {
                      $("#cc-number").addClass("is-invalid");
                      validBilling = false;
                    }

                    //Validate card type
                    if(isValidVisa(ccCardNum) === true) {
                        window.console.log("Visa");
                        $("#cc-type").text("Visa");

                    } else if(isValidMaster(ccCardNum) === true) {
                        window.console.log("Master");
                        $("#cc-type").text("Master");

                    } else if(isValidAmex(ccCardNum) === true) {
                        window.console.log("Amex")
                        $("#cc-type").text("American Express");

                    } else {
                        window.console.log("Unknown card type");
                    }

                }

                
                if (item === undefined || item === "cc-month") {
                    $("#cc-month").removeClass("is-valid").removeClass("is-invalid");
                    if (expMonth !== "" ) {
                        $("#cc-month").addClass("is-valid");
                    } else {
                            $("#cc-month").addClass("is-invalid");
                            validBilling = false;
                        }
                } 

                let today = new Date();
                if(validExp === true) {
                    if (ccCardNum !== null && Number(expYear) > today.getFullYear()) {

                     } else  if (Number(expYear) === today.getFullYear()) { 
                         
                        if (Number(expMonth) >= today.getMonth()) {


                        } else {
                            $("#expmonth").text("Your card is expired.");
                            $("#cc-month").removeClass("is-valid").addClass("is-invalid");
                            $("#expyear").text("Your card is expired.")
                            $("#cc-year").removeClass("is-valid").addClass("is-invalid");
                            validBilling = false;
                        }
                        
                    }

                }

                if (item === undefined || item === "cc-year") {
                    $("#cc-year").removeClass("is-valid").removeClass("is-invalid");
                    if (expYear  !== "" ) {
                        $("#cc-year").addClass("is-valid");
                    } else {
                            $("#cc-year").addClass("is-invalid");
                            validBilling = false;
                        }
                } 

                if (item === undefined || item === "cc-cvv") {
                    $("#cc-cvv").removeClass("is-valid").removeClass("is-invalid");
                    if (isValidCVV(cvvCode))  $("#cc-cvv").addClass("is-valid");
                     else {
                            $("#cc-cvv").addClass("is-invalid");
                            validBilling = false;
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

    // CART UPDATE
    function cartUpdate() {
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

            let cheeseOp = $("#cheeseoption");
            let sauceOp = $("#sauceoption");
           
            $("#doughtype").empty();
           $("#doughtype").append(pizzadough);

           $("#sizechoice").empty();
           if (size !== "Choose...") {
           $("#sizechoice").append(size);
           }

           $("#cheesechoice").empty();
           if (cheeseOp.prop("disabled") === false) {
           $("#cheesechoice").append(cheese);
           }

           $("#saucechoice").empty();
           if (sauceOp.prop("disabled") === false) {
           $("#saucechoice").append(sauce);
           }


           let strToppings = "";
           for(i = 0; i < pizzatopping.length; i++) {
               strToppings += pizzatopping[i] + " ";
           } 
           $("#toppingchoice").empty();
           if (strToppings.length !== 0) {
           $("#toppingchoice").append(strToppings); 
           }

    }


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
          
        let order = confirm("Finished your order?");
        if (order === true ) {

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
        $("#orderConfirm").hide();
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
            cartUpdate();
            
        });

        $("#sizeoption").change(function() {
            buildingPizza();
            totalPrice();
            cartUpdate();
        });
        $("#cheeseoption").change(function() {
            totalPrice();
            cartUpdate();
        });
        $("#sauceoption").change(function() {
            totalPrice();
            cartUpdate();
        });
        $("#toppingoption").change(function() {
            totalPrice();
            cartUpdate();
        });

        

        // CLICK NEXT TO BUILD PIZZA
        $("button#next").click (function() {    

            if (validateAddressInfo() === true) {
            $("#ordering-box").show();
            $('#address-box').hide();
            }
  
           

        });

        $("button#checkout").click (function() {
            let emailAd = $("#email").val();
            
            if ( validateBillingInfo() === true) {
                
                
                $("#orderConfirm").show();
                $("#receiptEmail").text(emailAd);
                $("#headtext").hide();
                $("#billing-box").hide();
                $("#bar-fixed").hide();

                
            }

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
                document.getElementById('secondaryaddress').value=""; 
                document.getElementById('secondaryaddress2').value=""; 
                document.getElementById('secondarycity').value=""; 
                document.getElementById('secondarystate').value=""; 
                document.getElementById('secondaryzip').value=""; 
            }


      });
        
      

     
    }, false);
});






    



