(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substring(0,5+Math.random()*5);
        captchaValue = value;
    }

    function removeContent(){
        inputField.value = "";
        captcha.innerText = "";
        statusTxt.style.display = "none";
       }

    function setCaptcha(){
        let html = captchaValue.split("").map((char)=>{
            const rotate = Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span
            style="
            transform: rotate(${rotate}deg);
            color: black;
            font-size: 20px;
            font-family:${fonts[font]}
            "
            >${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }


    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function(){
            generateCaptcha();
            setCaptcha();
            removeContent();
        });
        generateCaptcha();
            setCaptcha();
        // removeContent();
    }
    initCaptcha();

    document.querySelector(".login-form #login-btn").addEventListener("click",function(){
        let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
        if(inputCaptchaValue === captchaValue){
            alert("Logged In!", "success");
        }else {
            alert("Invalid captcha");
        }
    });
})();

let btnclear =document.querySelector('button');
let inputs =document.querySelectorAll('input');

btnclear.addEventListener('click', () => {
    inputs.forEach(input =>input.value ='');
});