import { Component, ErrorInfo, ReactNode } from 'react';

interface IState {
  hasError: boolean, message: string
}

export class ErrorBoundary extends Component<{ children: ReactNode }> {

  state: IState = {
    hasError: false,
    message: '',
  };

  static getDerivedStateFromError(error: Error): IState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <pre>{this.state.message}</pre>;
    }

    return this.props.children;
  }

}
