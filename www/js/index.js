/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PinCodeChallengeHandler;

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
    document.getElementById("getBalance").addEventListener("click", getBalance, false);
    
    // ChallengeHandler
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
        var prmpt = prompt(msg, "");
        if(prmpt){ // calling submitChallengeAnswer with the entered value
            PinCodeChallengeHandler.submitChallengeAnswer({"pin":prmpt});
        }            
        else{ // calling submitFailure in case user pressed the cancel button
            PinCodeChallengeHandler.submitFailure();   
        }                            
    };

    PinCodeChallengeHandler.handleFailure = function(error) {
        WL.Logger.debug("Challenge Handler Failure!");
        alert("No Remaining Attempts!"); 
    };

    PinCodeChallengeHandler.processSuccess = function (data) {
        WL.Logger.debug("Challenge Handler Success!");
    }
    // ChallengeHandler end
}

function getBalance() {
    var resourceRequest = new WLResourceRequest("/adapters/ResourceAdapter/balance",WLResourceRequest.GET);

    resourceRequest.send().then(
        function(response) {
            WL.Logger.debug("resourceRequest.send success: "+ response.responseText);           
            document.getElementById("balanceLabel").innerHTML = response.responseText;
        },
        function(response) {
            WL.Logger.debug(response.responseText);
            document.getElementById("balanceLabel").innerHTML = response.errorMsg;
        }
    );
}
