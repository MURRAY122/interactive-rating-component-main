const ratingBox = document.getElementById('ratingContent');
const thanksBox = document.getElementById('thanksContent');
const rating = document.getElementById('rating');


// Display thank you message content
function giveRating(value){
    // Set rating on thank you box content
    rating.innerHTML = value;
    //Hide rating box
    ratingBox.classList.add('hide');
    //Show thanks content
    thanksBox.classList.remove('hide');
}