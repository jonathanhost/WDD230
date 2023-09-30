const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const data = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
let days = data - lastVisit ;
console.log(days)
if (numVisits !== 0) 
{
	visitsDisplay.textContent = numVisits;
	if(days < 86400000)
	{
		visitsDisplay.textContent = "Back so soon! Awesome!";
	}
	else
	{
		if(days <= 172800000)
		{
			visitsDisplay.textContent = `You last visited 1 day ago.`;
		}
		else
		{
			let difference = days / 86400000;
			visitsDisplay.textContent = `You last visited ${difference} days ago.`;

		}
	}
} else 
{
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
	localStorage.setItem("lastVisit-ls", data);
}







console.log(data - lastVisit)


numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", data);
