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
  if (visible) {
    return (
      <div className={'fixed -top-20 right-10 translate-y-full opacity-100 transition-opacity'}>
        <div className="m-7 bg-slate-700 px-5 py-6 text-slate-200">{props.message}</div>
      </div>
    );
  } else return null;
};
export default Toast;
