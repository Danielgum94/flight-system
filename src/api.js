// api.js

const API_BASE_URL = 'https://freetestapi.com';

export async function fetchFlights() {
  try {
    const response = await fetch(`${API_BASE_URL}/apis/airlines`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Assuming the API returns an array of flight objects
  } catch (error) {
    console.error('Error fetching flight data:', error);
    throw error;
  }
}
