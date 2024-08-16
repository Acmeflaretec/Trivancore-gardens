import React, { useState, useEffect } from 'react';
import MiddleNav from '../components/MiddleNav';
import Footer from '../components/Footer';
import styled from 'styled-components';

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: center;
`;

const VideoCard = styled.div`
  position: relative;
  width: 300px;
  margin: 15px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoTitle = styled.div`
  padding: 10px;
  text-align: center;
  color: #333;
  font-size: 16px;
  background-color: #fff;
`;

function AllVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from your API or data source
    // This is a placeholder for demonstration
    setVideos([
      { id: 1, title: 'Video 1', youtubeId: 'dQw4w9WgXcQ' }, // Replace with actual YouTube video ID
      { id: 2, title: 'Video 2', youtubeId: 'eYq7WapuDLU' },
      // Add more videos here
    ]);
  }, []);

  return (
    <>
      <MiddleNav />
      <VideoGrid>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <VideoWrapper>
              <Iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideoGrid>
      <Footer />
    </>
  );
}

export default AllVideos;
