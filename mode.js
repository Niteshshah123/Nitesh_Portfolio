const body = document.querySelector("#upperbg");
const upperbg = document.querySelector("#upperbg");
const modebtn = document.querySelector("#btnmode");
const nav = document.querySelector("#nav");
const nav1 = document.querySelectorAll("#nav1 li a");
const nav2 = document.querySelectorAll("#nav2 li a button");
const lowerbg = document.querySelector("#lowerbg");
const personalinfo = document.querySelector("#personalinfo");
const btn = document.querySelector("#downloadbtn1");
const lower2bg = document.querySelector("#lower2bg");
const footer = document.querySelector("#footer");
const lowerdescription = document.querySelectorAll(".lowerdescription");
var theme = "light";

function modechange() {
    if (theme ==="light") {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        // lowerdescription.classList.remove('lowerdescription');
        // lowerdescription.classList.add('darklowerdescription');
        nav.style.color="White";
        nav.style.backgroundColor="#2D2D2D";
        nav1.forEach(element => {
            element.style.color="White";
        });
        nav2.forEach(element => {
            element.style.color="White";
        });
        btn.style.color="White";
        lowerbg.style.backgroundImage="url('https://lifehacker.com/imagery/articles/01HF2GHGBVV0HFTQMCX0STP5WF/hero-image.fill.size_1248x702.v1699834042.jpg')";
        lowerbg.style.color="white";
        personalinfo.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_qk8zYLa2Bqm8eGzH_fd5Gk0Ea-rLV3sIA&s')"
        personalinfo.style.color="white";
        lower2bg.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvTWf8Hgof3gIkVX7lIoBXuveF5I9J-FEgw&s')"
        lower2bg.style.color="white";
        footer.style.backgroundImage="url('darkfooter.jpeg')"
        footer.style.color="white";
        lowerdescription.forEach(element => {
            element.classList.remove('lowerdescription');
            element.classList.add('darklowerdescription');
        });
        // or, we can also use body.id= "darkmode" 
        // we don't have to add or remove the id while changing modes.

        theme="dark";
        upperbg.style.backgroundImage='url("https://wallpapers.com/images/hd/dark-theme-background-0rpr12gxz1cubb05.jpg")'
    }
    else{
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
        nav.style.color="black";
        nav.style.backgroundColor="#e8e8e8";
        nav1.forEach(element => {
            element.style.color="black";
        });
        nav2.forEach(element => {
            element.style.color="Black";
        });
        lowerbg.style.color="Black";
        lowerbg.style.backgroundImage="url('skillbg2.jpg')";
        personalinfo.style.backgroundImage="url('flower.jpg')"
        personalinfo.style.color="Black";
        lower2bg.style.backgroundImage="url('whitegold.jpg')"
        lower2bg.style.color="Black";
        footer.style.backgroundImage="url('stylebg.jpg')"
        footer.style.color="Black";
        btn.style.color="Black";
        lowerdescription.forEach(element => {
            element.classList.remove('darklowerdescription');
            element.classList.add('lowerdescription');
        });

        theme="light";
        upperbg.style.backgroundImage='url("back.webp")'
        
    }
}