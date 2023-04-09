import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Photo } from '../models/unsplash';
import Modal from './modal';

interface CardProps {
  photo: Photo;
}

export default function Card(props: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const { urls, alt_description, description } = props.photo;
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    event.stopPropagation();
    if ((event.target as Element).classList.contains('modal-close')) {
      setShowModal(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="listitem"
      className="pointer m-5 w-60 flex-auto rounded-lg border bg-gradient-to-b from-cyan-100 to-blue-400 p-3"
    >
      <img
        className="mx-auto max-h-64 rounded-lg object-contain"
        src={urls.thumb}
        alt={alt_description}
      />
      <p className=" text-xs opacity-70">
        <span className=" font-bold text-slate-800">Description:</span> {description}
      </p>
      {showModal &&
        createPortal(<Modal photo={props.photo} onClose={handleClose} />, document.body)}
    </div>
  );
}
