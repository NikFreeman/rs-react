// import { useEffect, useState } from 'react';
import CardList from '../components/card-list';
import Search from '../components/search-bar';

import { Photo } from '../models/unsplash';
import Loading from '../components/loading';
import { useSearchPhotosQuery } from '../store/unsplash/unsplash.api';

export default function Home() {
  const { isLoading, isError, data } = useSearchPhotosQuery('test');

  return (
    <div>
      <Search onSubmit={() => console.log('submit')} />
      {isError && <h3>error</h3>}
      {!isLoading ? <CardList items={data as Photo[]} /> : <Loading />}
    </div>
  );
}
