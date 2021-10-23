window.onload = function(){
const backProjectBtn = document.querySelector('.back-project');
const iconBookmark = document.querySelector('.icon-bookmark');
const bookmarkText = document.querySelector(".icon-bookmark p");
const textBackedNumber = document.querySelector('.backed');
const textTotalNumber = document.querySelector('.total');
const progresLine = document.querySelector('.bar');
const textBambooLeft = document.querySelector('.bamboo-left');
const bambooBackNumber = document.querySelector('.bamboo-number');
const textBlackLeft = document.querySelector('.black-left');
const blackBackNumber = document.querySelector('.black-number');
const textMahoganyLeft = document.querySelector('.mahogany-left');
const mahoganyBackNumber = document.querySelector('.mahogany-number');
const backProject = document.querySelector('.back');
const pledgeActive = document.querySelectorAll('.click-active');
const allEntries = document.querySelectorAll('.entry');
const bambooEntry = document.querySelector('.bamboo-entry');
const blackEntry = document.querySelector('.black-entry');
const mahoganyEntry = document.querySelector('.mahogany-entry');
const continueBtns = document.querySelectorAll('.continue');
const thanks = document.querySelector('.thanks');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const closeMobileNav = document.querySelector('.close-menu');
const closeBackModal = document.querySelector('.close-modal');
const mask = document.querySelector('.mask');
const rewardBtns = document.querySelectorAll('.reward');
const gotIt = document.querySelector('.got-it');
const mahagonyEl = document.getElementById("mahagony");
const mahagonyBackEl = document.querySelector('.back-mahogany');
const mahagonyBtn = document.getElementById("mahogany-btn");


var moneySum = 89914;
var percentage;
var backers = 5007;
var days = 56;

var bambooNumber = 101;
var blackNumber = 64;
var mahoganyNumber = 1;

backProjectBtn.addEventListener('click', () => {
    showBackProject();
    removeActive();
});
closeBackModal.addEventListener('click', () => {
    removeBackProject();
});
mask.addEventListener('click', () => {
    removeBackProject();
    thanks.style.display = "none";
});

rewardBtns.forEach( item => {
    item.addEventListener("click", () => {
        showBackProject();
        showActive(item);
    });
});

function showActive(reward) {
    removeActive();
    if(reward.classList.contains("bamboo-reward")) {
        bambooEntry.parentElement.classList.add("active");
        bambooEntry.style.display = "flex";
    }
    if(reward.classList.contains("black-reward")) {
     blackEntry.parentElement.classList.add("active");
     blackEntry.style.display = "flex";
     }
     if(reward.classList.contains("mahogany-reward")) {
        mahoganyEntry.parentElement.classList.add("active");
        mahoganyEntry.style.display = "flex";
        }
}
function removeActive() {
    allEntries.forEach( entry => {
        entry.parentElement.classList.remove("active");
        entry.style.display = "";
});
}

function showBackProject() {
    backProject.style.display = "block";
    mask.style.display = "block";
}

function removeBackProject(){
    backProject.style.display = "";
    mask.style.display = "";
}

pledgeActive.forEach( pledge => {
    pledge.addEventListener('click', ()=> {
        removeActive();
        pledge.parentElement.parentElement.classList.add("active");
        pledge.parentElement.parentElement.lastChild.previousSibling.style.display = "flex";
    });
});



function makePercentage(value){
    percentage = value / 100000;
    percentage = Math.round((percentage.toFixed(2))*100);
    if(percentage > 100){
        percentage = 100;
    }
    return percentage;
}

continueBtns.forEach( btn => {
    btn.addEventListener('click', ()=>{
        var inputVal = parseInt(btn.previousSibling.previousSibling.value);
        if(isNaN(inputVal)){
            btn.parentElement.classList.add('error');
            return;
        }
        if(btn.classList.contains("bamboo-continue")) {
            if(inputVal < 25) {
                btn.parentElement.classList.add('error');
            return;
            }
        }
        if(btn.classList.contains("black-continue")) {
            if(inputVal < 75) {
                btn.parentElement.classList.add('error');
            return;
            }
        }
        if(btn.classList.contains("mahogany-continue")) {
            if(inputVal < 200) {
               btn.parentElement.classList.add('error');
                return;
            }
        }   
        btn.parentElement.classList.remove('error');
        moneySum += inputVal;
        btn.previousSibling.previousSibling.value = "";
        backers++;
        textTotalNumber.innerHTML = backers;
        textBackedNumber.innerHTML = moneySum;
        makePercentage(moneySum);
        progresLine.style.width = percentage + "%";
        removeBackProject();
        thanks.style.display = "block";
        mask.style.display = "block";

        if(btn.classList.contains("bamboo-continue")) {
            bambooNumber--;
            textBambooLeft.innerHTML = bambooNumber;
            bambooBackNumber.innerHTML = bambooNumber;
        }
        if(btn.classList.contains("black-continue")) {
            blackNumber--;
            textBlackLeft.innerHTML = blackNumber;
            blackBackNumber.innerHTML = blackNumber;
        }
        if(btn.classList.contains("mahogany-continue")) {
            mahoganyNumber--;
            textMahoganyLeft.innerHTML = mahoganyNumber;
            mahoganyBackNumber.innerHTML = mahoganyNumber;
            if(mahoganyNumber==0)
            mahagonyEl.classList.add('disable');
            mahagonyBackEl.classList.add('disable');
            mahagonyBtn.innerHTML = "Out of stock";
        }

    });
});
    

gotIt.addEventListener('click', ()=>{
    removeBackProject();
    thanks.style.display = "";
});

hamburger.addEventListener('click', ()=>{
    mask.style.display = "block";
    mobileNav.style.display = "block";
    hamburger.style.display = "none";
    closeMobileNav.style.display = "block";
});
closeMobileNav.addEventListener('click', ()=>{
    mask.style.display = "";
    mobileNav.style.display = "";
    hamburger.style.display = "";
    closeMobileNav.style.display = "";
});
iconBookmark.addEventListener('click', () =>{
    iconBookmark.classList.toggle("active-btn");
    if (iconBookmark.classList.contains("active-btn")) {
        bookmarkText.innerHTML = "Bookmarked";
    } else {
        bookmarkText.innerHTML = "Bookmark";
    };
});

}