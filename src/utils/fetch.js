export async function get(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
    alert("ERROR WHILE FETCHING DATA");
  }
}
