var benefitsCards = document.getElementsByClassName('benefits__cards');
var CurrentScroll = benefitsCards[0].scrollTop;
var CurrentWinScroll = window.pageYOffset;

var showBenefitsCards = function () {
	console.log('jojola');
	if (CurrentWinScroll > 500) {
		console.log('adio');
	}
}


window.addEventListener('scroll', showBenefitsCards);