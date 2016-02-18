IBM MobileFirst Platform Foundation
===
## PinCodeCordova
A sample application demonstrating use of the CredentialsValidation Security Check.

### Tutorials
https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/authentication-and-security/credentials-validation/

### Usage

1. Use either Maven or MobileFirst Developer CLI to [build and deploy the available `ResourceAdapter` and `PinCodeAttempts` adapters](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/adapters/creating-adapters/).
2. From a command-line window, navigate to the project's root folder and run the command: `mfpdev app register`.
3. In the MobileFirst console, under **Applications** → **PinCodeCordova** → **Security** → **Map scope elements to security checks.**, add a mapping from `accessRestricted` to `PinCodeAttempts`.
4. Back in the command-line:
    - Add a platform by running the `cordova platform add` command.
    - Run the Cordova application by running the `cordova run` command.

CredentialsValidation Security Check adapter: https://github.com/MobileFirst-Platform-Developer-Center/SecurityCheckAdapters/tree/release80

### Supported Levels
IBM MobileFirst Platform Foundation 8.0

### License
Copyright 2015 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
att
http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
