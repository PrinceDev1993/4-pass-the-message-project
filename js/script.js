//get input field
const message = document.querySelector("#message");

//get button
const messageBtn = document.querySelector(".btn");

//get the dsplay field
const deliveredMessage = document.querySelector(".message");

//get ommission Message 
const ommissionMessage  = document.querySelector(".ommissionMessage");

//trigger click event
messageBtn.addEventListener("click", displayMessage)
   
//func
function displayMessage () {
    console.log("yes");
    deliveredMessage.textContent = message.value;

    //ommission Message
    if (message.value === "") {
        setTimeout(() => {
            ommissionMessage.textContent = "Please enter a value to message";
            setTimeout(() => {
                ommissionMessage.textContent ="";
            }, 3000);
        }, 500);
    }

    //clear input field
    message.value="";
};

//trigger ENTER KEY
message.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        displayMessage();
    }
});

