import { Photo } from '../models/unsplash';
import Card from './card';

interface PhotoProps {
  items: Photo[];
}

export default function CardList(props: PhotoProps) {
  console.log(props.items);
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
      <div className="">
        <h1 className="text-center text-2xl font-bold text-green-600 ">No results found</h1>
      </div>
    );
  }
}
