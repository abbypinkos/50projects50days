const poke_container = document.getElementById('poke-container')
const pokemon_count = 151
const colors = {
    fire: '#F5AC78',
    grass: '#A7DB8D',
	electric: '#FAE078',
	water: '#9DB7F5',
	ground: '#EBD69D',
	rock: '#D1C17D',
	fairy: '#F4BDC9',
	poison: '#C183C1',
	bug: '#C6D16E',
	dragon: '#A27DFA',
	psychic: '#FA92B2',
	flying: '#C6B7F5',
	fighting: '#D67873',
	normal: '#C6C6A7'
}

const main_types = Object.keys(colors)

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]
    
    pokemonEl.style.backgroundColor = color

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">type: <span>${type}</span></small><div class="type-bg"></div>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemon()