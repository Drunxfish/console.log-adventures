// Fetches Pokemon data in json format and displays images/title
async function fetchPokemon() {
    try {
        // Fetching data using modern fetch API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 20)}`);


        // Handle errors
        if (!response.ok) {
            throw new Error("Could not fetch pokemon");
        }

        // Convert and display 
        const data = await response.json();
        const displayFront = document.getElementById("pokemonSpriteFront");
        const displayBack = document.getElementById("pokemonSpriteBack");
        const pokemonName = document.getElementById("pokemonName");

        // Update nodes
        displayFront.src = data.sprites.front_shiny;
        displayBack.src = data.sprites.back_shiny

        // Display nodes and update text
        pokemonName.textContent = `You've discovered ${data.name} !`;
        displayFront.style.display = "block";
        displayBack.style.display = "block";

    } catch (err) {
        console.log(err);
        document.getElementById("title").textContent = "Generation Failed!";
    }
}

// Generates pokemon on clicks
document.getElementById("pokemonGenerator").addEventListener("click", fetchPokemon);