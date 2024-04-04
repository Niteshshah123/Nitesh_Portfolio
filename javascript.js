const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const massage = document.querySelector("#massage");
const emailpattern = /^[A-Za-z0-9_\.\-]+[@][A-Za-z]+[\.][a-zA-Z]+$/;
const namepattern = /^[A-Za-z\s]{2,}$/;
const numberpattern = /^[0-9]{10}$/;

function isvalid() {

    if (namepattern.test(name.value) && emailpattern.test(email.value)  && numberpattern.test(number.value) && massage.value.trim() !== "") {
        alert("We will Contact you soon!");
        return true;
    }else if (!namepattern.test(name.value)) {
        alert("your name shouldn't consist number");
        return false;
    } else if (!emailpattern.test(email.value)) {
        alert("your email Formate is Wrong");
        return false;
    }else if (!numberpattern.test(number.value)){
        alert("your Mobile No. should be of 10 digit");
        return false;
    } else if (massage.value.trim() == ""){
        alert("Write your message");
        return false;
    }else {
        alert("Sorry!!!, please fill all the Detail");
        return false;
    }
    
}