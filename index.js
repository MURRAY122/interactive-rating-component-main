const ratingBox = document.getElementById('ratingContent');
const thanksBox = document.getElementById('thanksContent');
const rating = document.getElementById('rating');



// Display thank you message content
function setRating(element){
    //Remove any rating-active class incase user changes rating value 
    const oldRating = document.getElementsByClassName('rating-active');
    if(oldRating.length != 0){
    oldRating[0].classList.remove('rating-active');
    }
    //Hide rating box
    element.classList.add('rating-active');
}

// Display thank you message content
function submitRating(){
    const activeRatings = document.getElementsByClassName('rating-active');
    //If no dom element has rating-active class alert user or display thank you
    if(activeRatings.length == 0){
    alert('Please select a rating before submitting')
    } else {
        // Set rating on thank you box content
        rating.innerHTML = activeRatings[0].value;
        //Hide rating box
        ratingBox.classList.add('hide');
        //Show thanks content
        thanksBox.classList.remove('hide');
    }
}