export default async function fetchClothing() {
  const response = await fetch('https://fakestoreapi.com/products', {
    mode: 'cors',
  });
  if (!response.ok) {
    throw new Error('Network response not ok')
  }
  return response.json();
}  