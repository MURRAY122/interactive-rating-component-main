const ratingBox = document.getElementById('ratingContent');
const thanksBox = document.getElementById('thanksContent');
const ratingsBtns = document.querySelectorAll(".section__content__ratings__btn");
const ratingSubmit = document.getElementById('ratingSubmit');
const ratingMessage = document.getElementById('rating');
let rating = 0;

// Set selected rating
function setRating(rateElement){
    [].map.call(ratingsBtns, function(element) {
        element.classList.remove('rating-active');
        if(rateElement == element.innerHTML){
            rating = element.innerHTML;
            element.classList.add('rating-active');
        }
    });
}

// Display thank you message content
function submitRating(){
    //If no rating is set, alert user
    if(rating > 5 || rating <= 0){
    alert('Please select a rating before submitting')
    } else {
        // Set rating on thank you box content
        ratingMessage.innerHTML = rating;
        //Hide rating box
        ratingBox.classList.add('hide');
        //Show thanks content
        thanksBox.classList.remove('hide');
    }
}

// Start and add event listeners
function main(){
[].map.call(ratingsBtns, function(element) {
    element.addEventListener("click",function (){ 
        setRating(element.innerHTML);
    });
});

ratingSubmit.addEventListener("click",function (){ 
    submitRating();
});
}

main();