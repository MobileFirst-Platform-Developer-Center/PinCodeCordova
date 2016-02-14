PinCodeChallengeHandler = WL.Client.createWLChallengeHandler("PinCodeAttempts");

PinCodeChallengeHandler.handleChallenge = function(challenge) {
    var msg = "";
    
    // Create the title string for the prompt
    if(challenge.errorMsg != null){
        msg =  challenge.errorMsg + "\n";
    }
    else{
        msg = "This data requires a PIN code.\n";
    }
    msg += "Remaining attempts: " + challenge.remainingAttempts  
    
    // Display a prompt for user to enter the pin code     
    var pinCode = prompt(msg, "");
    if(pinCode){ // calling submitChallengeAnswer with the entered value
        PinCodeChallengeHandler.submitChallengeAnswer({"pin":pinCode});
    }            
    else{ // calling submitFailure in case user pressed the cancel button
        PinCodeChallengeHandler.submitFailure();   
    }                            
};