import { useEffect, useState } from 'react';
import CardList from '../components/card-list';
import Search from '../components/search-bar';
import loader from '../data/loader';
import { Photo, SearchPhotos } from '../models/unsplash';

export default function Home() {
  const [items, setItems] = useState<Photo[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const data = loader<SearchPhotos>(query);
    data.then((items) => setItems(items.results));
  }, [query]);

  return (
    <div>
      <Search onSubmit={setQuery} />
      <CardList items={items} />
    </div>
  );
}
