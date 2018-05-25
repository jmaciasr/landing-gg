var benefitsCards = document.getElementsByClassName('benefits__cards');
var cardScroll = benefitsCards[0].offsetTop - 620;
var CurrentScroll = window.pageYOffset;

var showBenefitsCards = function () {
 console.log(window.pageYOffset);
 if (window.pageYOffset > cardScroll) {
  for (var i = 0; i < benefitsCards.length; i++) {
   benefitsCards[i].classList.remove('make-transparent');   
  }
 }
}


window.addEventListener('scroll', showBenefitsCards);