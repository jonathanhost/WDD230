const baseURL = "https://jonathanhost.github.io/wdd230/";

const membersLink = "https://jonathanhost.github.io/wdd230/chamber/data/members.json";

const cardSection = document.querySelector('.cards');

async function getMembers() {
    const response = await fetch(membersLink);
    const data = await response.json();
    console.log(data)
    displayMembers(data.weeks);
  }


  function displayLinks(weeks) {

    weeks.forEach(link => {
        const li = document.createElement('li');
        const links = link.links;

        li.innerHTML = `${link.week}: `
        links.forEach(url => {
            const a = document.createElement('a'); 
            a.innerHTML = ` ${url.title} `
            a.setAttribute('href', `${url.url}`);
            console.log(url);
            li.appendChild(a);

        });


        ul.appendChild(li)
        
        
    });

  }

  
  getMembers();