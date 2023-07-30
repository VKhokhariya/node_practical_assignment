const fetch = await import('node-fetch').then((mod) => mod.default);;

async function fetchGoogleData() {
  const searchQuery = 'expressjs.com/en/starter/hello-world.html'; // Replace with your desired search query
  const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Google. Status: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    console.log(data); // Display the HTML content of the Google search page
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchGoogleData();