import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axiosInstance from '../axios'

const VideoSection = styled.section`
  padding: 40px 20px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2E7D32;
  margin-bottom: 24px;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const VideoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #34495e;
  padding: 12px;
  margin: 0;
  text-align: center;
`;

const ViewMoreButton = styled(Link)`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: #4CAF50;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 25px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4CAF50;
  }
`;

function HomeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      await axiosInstance.get('/videos/clientFetching?limit=3&status=true')
        .then(response => {
          setVideos(response.data.videos);
        })
        .catch(error => {
          console.error('Error fetching videos:', error);
        });
    }
    fetchVideos()
  }, []);

  return (
    <VideoSection>
      <SectionTitle>Featured Videos</SectionTitle>
      <VideoGrid>
        {videos.map((video) => (
          <VideoCard key={video._id}>
            <VideoWrapper>
              <VideoIframe
                src={`https://www.youtube.com/embed/${video.url}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoCard>
        ))}
      </VideoGrid>
      <ViewMoreButton to="/allvideos">View More Videos</ViewMoreButton>
    </VideoSection>
  );
}

export default HomeVideos;
