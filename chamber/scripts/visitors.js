const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const data = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
const millisecondsInADay = 24 * 60 * 60 * 1000;
const daysSinceLastVisit = Math.floor((data - lastVisit) / millisecondsInADay);
console.log(daysSinceLastVisit)

if (lastVisit){


	if (daysSinceLastVisit === 0) {
		visitsDisplay.textContent = 'Back so soon! Awesome!';
	} else {
		visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
	}


} else {
// This is the user's first visit
visitsDisplay.textContent = 'Welcome! Let us know if you have any questions.';
localStorage.setItem('lastVisit-ls', data);
}










