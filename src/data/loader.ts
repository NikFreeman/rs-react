import axios from 'axios';

async function loader<T>(searchString: string): Promise<T> {
  const baseUrl = 'https://api.unsplash.com/search/photos?';
  // для работы с .env. Для упрощения работы крос-чекеров CLIENT_ID встроен в код
  // const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const CLIENT_ID = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  const url = `${baseUrl}query=${searchString}&per_page=12&orientation=landscape&client_id=${CLIENT_ID}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
}
export default loader;
