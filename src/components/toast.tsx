import { Component, ReactNode } from 'react';

interface ToastProps {
  message: string;
}
interface ToastState {
  isVisible: boolean;
}

class Toast extends Component<ToastProps, ToastState> {
  constructor(props: ToastProps) {
    super(props);
    this.state = { isVisible: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isVisible: false }), 3000);
  }
  render(): ReactNode {
    console.log('toasty');
    return (
      <div className="fixed bottom-32 right-10 translate-y-full opacity-0 transition-opacity">
        <div className="m-7 bg-slate-700 px-5 py-6 text-slate-200">{this.props.message}</div>
      </div>
    );
  }
}
export default Toast;
