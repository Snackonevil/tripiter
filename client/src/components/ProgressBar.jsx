import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div>ProgressBar</div>;
}
