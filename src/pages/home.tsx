import CardList from '../components/card-list';
import Search from '../components/search-bar';

import Loading from '../components/loading';
import { useSearchPhotosQuery } from '../store/unsplash/unsplash.api';
import { useSelector } from '../store';

export default function Home() {
  const { isLoading, isError, data } = useSearchPhotosQuery(
    useSelector((store) => store.searchValue)
  );

  return (
    <div>
      <Search />
      {isError && <h3>error</h3>}
      {!isLoading ? data && <CardList items={data} /> : <Loading />}
    </div>
  );
}
