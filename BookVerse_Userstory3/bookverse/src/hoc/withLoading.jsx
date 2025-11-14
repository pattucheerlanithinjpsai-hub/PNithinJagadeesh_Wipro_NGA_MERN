import { useState, useEffect } from 'react';

function withLoading(Component) {
  return function WrappedComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Component {...props} loading={loading} />;
  }
}

export default withLoading;
