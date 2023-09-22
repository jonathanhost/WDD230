document.querySelector("#modify").innerHTML = `<p> Last Modification: ${document.lastModified}</p>`;

document.getElementById("year").innerHTML = new Date().getFullYear();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards_links = document.querySelectorAll(".card ul");
const card = document.querySelectorAll(".card");
const body = document.querySelector("body");
const content = document.querySelector(".content");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        body.style.background = "#000";
		modeButton.textContent = "❎";
        content.style.background = "#000";
        for (let i = 0; i < cards_links.length; i++) {
			cards_links[i].style.color = "white";
            cards_links[i].style.background = "black";
		}
        for (let i = 0; i < card.length; i++) {
			card[i].style.background = "black";
		}
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
