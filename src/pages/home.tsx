import Header from '../components/header';
import CardList from '../components/card-list';
import SearchBar from '../components/search-bar';

export default function Home() {
  return (
    <div>
      <div className="bg-sky-300">
        <Header title="Main Page" />
      </div>
      <div>
        <SearchBar />{' '}
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
}
