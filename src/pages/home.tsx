import Header from '../components/header';
import CardList from '../components/card-list';

export default function Home() {
  return (
    <div>
      <div className="bg-sky-300">
        <Header title="Main Page" />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
}
