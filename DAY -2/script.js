const famousMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump"
];  

// Function to display famous movies in the console
function displayFamousMovies() {
    console.log("Famous Movies of All Time:");
    famousMovies.forEach(movie => {
        console.log("- " + movie);
    });
}
// Call the function to display movies
displayFamousMovies();