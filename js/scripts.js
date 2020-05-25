

$(function() {
    'use strict';
    
    let totalPriceArray = [];
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
                    return letters.test(value);
                   
                } else {
                    return false;
                }
    
            }
    
            //VALIDATE LASTNAME
            function isValidLastName(value) {
                'use strict';
                let validLastName = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
                if (value.length > 0) {
                    return letters.test(value);
                   
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
                if (value.length > 0 || value.length <= 2) {
                return validState.test(value);
                } else {
                    return false;
                }
            }
    
            // VALIDATE ZIP
            function isValildZip(value) {
                let validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
                if (value.length > 0) {
                    return validZip.test(zip);
    
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
                    if (addressType !== "0" ) {
                        $("#address-type").addClass("is-valid");
                    } else {
                            $$("#address-type").addClass("is-invalid");
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
   
            };


    //PIZZA PRICE CALCULATION
    function totalPrice () {
        let price = 0;
        let topping;
        let costOfSize = $("select#sizeoption").val();
        let costOfCheese = $("select#cheeseoption").val();
        let costOfSauce = $("select#sauceoption").val();
        let costofTopping;
        if (costOfSize !== null) {
            price += Number(costOfSize);
            price += Number(costOfCheese);
            price += Number(costOfSauce);
            let toppingCount = 0;
            let toppingEa = "";
            $("input[name='topping']:checked").each(function() {
                toppingCount++;
                toppingEa =  toppingEa + $(this).val() + ", ";
            });
            price += 0.99 * toppingCount;
        }
        window.console.log("total = " + price);

        $("#ordertotal").text("$ " + price.toFixed(2));
        $("#ordertotal2").text("$ " + price.toFixed(2));
        if (costOfSize !== null ) {
            $("#doughtotal").text($("input[name='optDough']:checked").val());
            $("#sizetotal").text(Number(costOfSize));
            $("#cheesetotal").text(Number(costOfCheese));
            $("#saucetotal").text(Number(costOfSauce));
            $("#toppingtotal").text(toppingEa.slice(0, toppingEa.length - 2));
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
    // let buildingPizza;
    function buildingPizza() {
    let doughType = $("input[name='Dough-option']").val();
    let pizzaSize = $("#sizeoption").val();
    let cheeseOp = $("$cheeseoption").val();
    let sauceOp = $("#sauceoption").val();
    let toppingOp = $("input[name='topping']");
        if ( doughType === null || pizzaSize === null) {
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

        } else {
            return false;

        }


    });

    // FORM VALIDATION
    window.addEventListener('load', function() {
        $("#ordering-box").hide();
        $("#billing-box").hide();
        $("input#otheraddress").hide();

        $("select#address-type").change(function() {
            let otherAddress = $("select#address-type option:selected").val();
        if( otherAddress === "other") {
            $("input#otheraddress").slideDown("slow");
        } else {
            return false;
        }

        });

        
        // ORDER FORM UPDATE
        let updateform;
        $("input[name='Dough-option']").change(function() {
            window.console.log($(this).val());
            dropdownSizeList($(this).val());
            totalPrice();
            
        });

        

        // CLICK NEXT TO BUILD PIZZA
        $("button#next").click (function() {    

            // event.preventDefault();
            $("#ordering-box").show();
            
            

        });
    

      // AUTOFILL IF USE SAME ADDRESS 
       
      $('input[type="checkbox"]').click(function() {
          
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






    



