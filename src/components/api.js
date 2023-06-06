
const API_BASE_URL = 'https://data-api.omniflix.studio/listings?statuses[]=LISTED&verified=true&ipInfringement=false&sortBy=created_at&order=desc&limit=10'; 

const getNFTsFromOmniFlix = async () => {
try {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch NFTs from OmniFlix API');
  }
  const data = await response.json();
  console.log(data.result.list)
  return data.result.list; // Assuming the response contains an array of NFTs
} catch (error) {
  throw new Error(`Error fetching NFTs: ${error.message}`);
}
};
export default getNFTsFromOmniFlix;