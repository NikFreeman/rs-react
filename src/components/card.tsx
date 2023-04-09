import { Photo } from '../models/unsplash';

interface CardProps {
  photo: Photo;
}

export default function Card(props: CardProps) {
  const { urls, alt_description } = props.photo;
  return (
    <div
      role="listitem"
      className="m-5 w-60 flex-auto rounded-lg border bg-gradient-to-b from-cyan-100 to-blue-400 p-3"
    >
      <img
        className="mx-auto max-h-64 rounded-lg object-contain"
        src={urls.thumb}
        alt={alt_description}
      />
      <p>{alt_description}</p>
    </div>
  );
}
