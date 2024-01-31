const createCountryContainer = (country) => {
    const container = document.createElement('div');
    container.className = 'country-container';

    const img = document.createElement('img');
    img.setAttribute('src', country.flags.png);
    img.setAttribute('alt', country.flags.alt);
    container.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = 'Name: ' + country.name.common;
    container.appendChild(name);

    const population = document.createElement('h5');
    population.textContent = 'Population: '+ country.population;
    container.appendChild(population);

    return container;
}

const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach((country)=> {
            const countriesContainer = document.getElementById('countries');
            const countryContainer = createCountryContainer(country);
            countriesContainer.appendChild(countryContainer);
        })
    })
    .catch(error => console.log(error));
}

fetchData();