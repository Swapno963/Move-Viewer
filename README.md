# Movie Viewer

## Movie API Implementation

✓ Created an API endpoint `/api/movies` to display all movies from the `data.js` file stored in the `dist` folder.

✓ Implemented another API endpoint `/api/movie/{id}` to handle GET, PATCH, and DELETE requests for individual movies. This endpoint successfully retrieves movie details by id, updates the title property with a PATCH request, and deletes movies with a DELETE request.

✓ Dynamically imported data from the provided `data.js` file and displayed the movies on the UI in a card format and utilized dynamic import.

✓ Implemented a Movie Details Modal that opens when clicking on the details button of each movie. URL routes were structured as `/movies/:movieId`. Parallel Routing and Intercepting Routing were implemented to ensure seamless navigation and page reloading functionality.

✓ Implemented a Not Found page to display when navigating to non-existent routes in the application. Additionally, a specific message is displayed for movie details requests with non-existent ids.

✓ Successfully implemented multi-language support for the entire assignment. Provided language options for Bengali and English, with language preference automatically selected based on the browser's default settings.


