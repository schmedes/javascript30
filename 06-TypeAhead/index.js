const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const suggestions = document.querySelector('.suggestions');

const buildListItem = name => {
    const ListItem = document.createElement('li');
    ListItem.innerHTML = `${name.city} - ${name.state}`;
    return ListItem;
}
const fetchData = datalink => {
    return fetch(endpoint)
           .then(response => response.json());
}

const showSuggestions = async event => {
    console.log('called');
    const value = event.target.value.toUpperCase();
    if(value.length < 2) return;
    const hits = await fetchData(endpoint);
    suggestions.innerHTML = "";
    hits.filter( el => el.city.toUpperCase().includes(value) || el.state.toUpperCase().includes(value))
        .map(data => suggestions.appendChild(buildListItem(data)))
}

document.querySelector('.search').addEventListener('input',(e)=> showSuggestions(e));
