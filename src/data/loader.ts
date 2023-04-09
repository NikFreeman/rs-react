import axios from 'axios';

async function loader<T>(searchString: string): Promise<T> {
  const baseUrl = 'https://api.unsplash.com/search/photos?';
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  console.log('loading', searchString);

  const url = `${baseUrl}query=${searchString}&per_page=12&orientation=landscape&client_id=${CLIENT_ID}`;
  console.log('loading', url);
  const res = await axios.get(url);
  return res.data;
}
export default loader;
