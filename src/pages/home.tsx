import { useEffect, useState } from 'react';
import CardList from '../components/card-list';
import Search from '../components/search-bar';
import loader from '../data/loader';
import { Photo, SearchPhotos } from '../models/unsplash';
import Loading from '../components/loading';

export default function Home() {
  const [items, setItems] = useState<Photo[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = loader<SearchPhotos>(query);
    data.then((items) => {
      setItems(items.results);
      setLoading(false);
    });
  }, [query]);

  return (
    <div>
      <Search onSubmit={setQuery} />
      {!loading ? <CardList items={items} /> : <Loading />}
    </div>
  );
}
