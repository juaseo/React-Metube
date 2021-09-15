import React, { useEffect, useState } from 'react';
import './app.css';
import VideosList from './components/videos_list/videos_list';

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBJOn8K2ImiJBfivhP_Xr9u_Gt8tWiYRmI", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.items);
        setvideos(result.items)
      })
      .catch(error => console.log('error', error));
    console.log('useEffect');
  }, []);
  return <VideosList videos={videos} />;
}

export default App;
