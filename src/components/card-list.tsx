import { Photo } from '../models/unsplash';
import Card from './card';

interface PhotoProps {
  items: Photo[];
}

export default function CardList(props: PhotoProps) {
  if (props.items.length !== 0) {
    return (
      <div role="list" className="mx-auto flex max-w-5xl flex-row flex-wrap">
        {props.items.map((item: Photo) => {
          return <Card photo={item} key={item.id} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="no-result">
        <h2 className="text-center text-2xl font-bold text-green-600 ">No results found</h2>
      </div>
    );
  }
}
