import { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(firebaseApp);

const useStorage = file => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const upload = uploadBytes(storageRef, file);
    upload.on(
      'state_changed',
      snapshot => {
        let progressPct =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPct);
      },
      err => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(upload.snapshot.ref);
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
