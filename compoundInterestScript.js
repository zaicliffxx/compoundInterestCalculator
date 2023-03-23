function calculate() {
        var prin = document.getElementById("principal").value;
        var iR = document.getElementById("interestRate").value / 100;
        var peri = document.getElementById("periods").value;
        let compoundFrequency = 12;
        
    // Error handling //
    
        //At least one radio button must be checked.
        let radioButtons = document.querySelectorAll('input[type="radio"]');
        let checkedRadioButton = false;

        for (let i = 0; i < radioButtons.length; i++) {
          if (radioButtons[i].checked) {
            checkedRadioButton = true;
            break;
          }
        }
        if (!checkedRadioButton) {
          alert("Please select a compound frequency");
          return;
        }
        
        //Check for empty fields.
        if (!prin || !iR || !peri) {
           alert("All fields are required and must be filled in.");
           return;
        }
        
        //Check for numeric values.
        if (isNaN(prin) || isNaN(iR) || isNaN(peri)) {
           alert("All fields must be numeric.");
           return;
        }
        
        //Input must be positive integers.
        if (prin <= 0 || iR <= 0 || peri <= 0) {
           alert("Principal, interest rate, and periods must be positive values.");
           return;
        }
        
        //Convert the input to float to allow calculation.
        principal = parseFloat(prin);
        interestRate = parseFloat(iR);
        periods = parseFloat(peri);
        
        
        //Assign respective CF factor to corresponding radio button.
        if (document.getElementById("quarterly").checked) {
          compoundFrequency = 4;
        } else if (document.getElementById("semiannually").checked) {
          compoundFrequency = 2;
        } else if (document.getElementById("annually").checked) {
          compoundFrequency = 1;
        }
        
        //Caculate IR and FV based on the formula and round to 2 decimals.
        var interestEarned = (principal * Math.pow(1 + (interestRate / compoundFrequency),
            compoundFrequency * periods) - principal).toFixed(2);
        var futureValue = (principal * Math.pow(1 + (interestRate / compoundFrequency),
            compoundFrequency * periods)).toFixed(2);

        document.getElementById("interestEarned").value = "$" + interestEarned;
        document.getElementById("futureValue").value = "$" + futureValue;
      };
      
