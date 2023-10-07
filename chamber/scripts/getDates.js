document.querySelector("#modify").innerHTML = `<p> Last Modification: ${document.lastModified}</p>`;

document.getElementById("year").innerHTML = new Date().getFullYear();


var dateacess = new Date();

var dateformat = dateacess.toLocaleString();

document.getElementById("timestamp").value = dateformat;
