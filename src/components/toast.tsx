import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
}

const Toast = (props: ToastProps) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className={`fixed -top-20 right-10 translate-y-full 
      ${visible ? 'opacity-100' : 'opacity-0'}      
      transition-transform`}
    >
      <div className="m-7 bg-slate-700 px-5 py-6 text-slate-200">{props.message}</div>
    </div>
  );
};
export default Toast;
