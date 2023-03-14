import NavBar from './nav-bar';
export default function Header(props: { title: string }) {
  return (
    <div className="max-w-xl mx-auto ">
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">{props.title}</h1>
        <NavBar />
      </div>
    </div>
  );
}
