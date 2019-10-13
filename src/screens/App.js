import React, { useState, useEffect } from 'react';
import youtubeData from '../utils/data';
import CardList from '../components/CardList';
import CardSkeleton from '../components/CardSkeleton';
// import Navbar from '../components/Navbar';

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState([false]);

  // load effect
  useEffect(() => {
    // @ts-ignore
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(youtubeData);
      // @ts-ignore
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      {loading && <CardSkeleton />}
      {/* <p style={{ fontSize: 50, color: "red" }}>Ups error.....</p> */}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
}

export default App;
