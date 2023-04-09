import { Photo } from '../models/unsplash';

interface ModalProps {
  photo: Photo;
  onClose: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

function Modal(props: ModalProps) {
  const { urls, description, alt_description, height, width, likes, user } = props.photo;
  return (
    <div
      className="modal-close fixed top-0 left-0 bottom-0 right-0 overflow-y-auto bg-slate-700 bg-opacity-70"
      onClick={props.onClose}
    >
      <div className="relative mx-auto my-4 max-w-5xl  rounded-lg bg-slate-100">
        <button
          className="modal-close absolute -right-12 top-0 rounded-md border bg-white px-4 text-center hover:border-red-600 hover:bg-gray-500 hover:text-red-600"
          onClick={props.onClose}
        >
          X
        </button>
        <img
          className="mx-auto w-[95%] rounded-lg pt-4 "
          src={urls.regular}
          alt={alt_description}
        />
        <div className="mx-auto my-2 w-[95%]">
          <p className=" text-xs">
            <span className=" font-bold text-slate-800">Description:</span> {description}
          </p>
          <p className=" text-xs">
            <span className=" font-bold text-slate-800">Tags: </span>
            {alt_description}
          </p>
          <p className=" text-xs">
            <span className=" font-bold text-slate-800">Height:</span> {height} px
          </p>
          <p className=" text-xs">
            <span className=" font-bold text-slate-800">Width:</span> {width} px
          </p>
          <p className=" text-xs">
            <span className=" font-bold text-slate-800">Likes:</span> {likes}
          </p>
          <p className=" pb-2 text-xs">
            <span className=" font-bold text-slate-800">User:</span> {user.name}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
