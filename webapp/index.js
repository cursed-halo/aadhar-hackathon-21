<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  <body>
  <script src='https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js'></script>
  <script type="module">
     import fs from 'fs';

  </script>
  <script>
    
 
    async function Otp()
    {
    
        let data={
 "langCode": "en",
 "captchaLength": "3",
 "captchaType": "2"};
 var captcha;
let url="https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha";
var response= await fetch(url,{method:'POST',headers:{ 
  "Content-Type": 'application/json',
  

},

body:JSON.stringify({
 "langCode": "en",
 "captchaLength": "3",
 "captchaType": "2"}),


}).then(function(response){return response.json();}).then(function(json){
  captcha=json.captchaBase64String;
});


var response1= await fetch(url,{method:'POST',headers:{ 
  "Content-Type": 'application/json',
  "x-request-id": "",
"appid": "MYAADHAAR",
"Accept-Language":'en_in',
  

},

body:JSON.stringify({
 "uidNumber": "",
 "captchaTxnId": "mbQxiUT4NtnP",
 "captchaValue": "dvw2kz",
 "transactionId": "MYAADHAAR:"
}),


}).then(function(response){return response.json();}).then(function(json){
  captcha=json.captchaBase64String;
});
var image = new Image();

image.src = 'data:image/png;base64,'+captcha;

document.body.appendChild(image);







    }
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  </body>
  <script src='https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js'></script>
  <script type="module">
     import fs from 'fs';

  </script>
  <script>
    
 
    async function Otp()
    {
    
        let data={
 "langCode": "en",
 "captchaLength": "3",
 "captchaType": "2"};
 var captcha;
let url="https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha";
var response= await fetch(url,{method:'POST',headers:{ 
  "Content-Type": 'application/json',
  

},

body:JSON.stringify({
 "langCode": "en",
 "captchaLength": "3",
 "captchaType": "2"}),


}).then(function(response){return response.json();}).then(function(json){
  captcha=json.captchaBase64String;
});


var response1= await fetch(url,{method:'POST',headers:{ 
  "Content-Type": 'application/json',
  "x-request-id": "",
"appid": "MYAADHAAR",
"Accept-Language":'en_in',
  

},

body:JSON.stringify({
 "uidNumber": "",
 "captchaTxnId": "mbQxiUT4NtnP",
 "captchaValue": "dvw2kz",
 "transactionId": "MYAADHAAR:"
}),


}).then(function(response){return response.json();}).then(function(json){
  captcha=json.captchaBase64String;
});
var image = new Image();

image.src = 'data:image/png;base64,'+captcha;

document.body.appendChild(image);







    }
  </script>

