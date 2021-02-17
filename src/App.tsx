import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Posts from './components/Posts';
import axios from './service/axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {data} = await axios('posts');
      dispatch({ type: 'SET_POSTS', posts: data})
      setIsLoading(false);
    })()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <Search/>
      {
        !isLoading ? <Posts/> : 'Загрузка...'
      }
    </>
  );
}

export default App;
