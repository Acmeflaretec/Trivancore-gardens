import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import MiddleNav from '../components/MiddleNav';
import Footer from '../components/Footer';
import axiosInstance from '../axios';

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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosInstance.get(`/videos/clientFetching?page=${page}&limit=9&status=true`);
        setVideos(response.data.videos);

        // Correctly calculate total pages based on the total number of videos
        const totalVideos = response.data.total;
        setTotalPages(Math.ceil(totalVideos / 9)); // Assuming 9 videos per page
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <MiddleNav />
      <VideoGrid>
        {videos.map((video) => (
          <VideoCard key={video._id}>
            <VideoWrapper>
              <Iframe
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
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
        style={{ margin: '20px auto', display: 'flex', justifyContent: 'center' }}
      />
      <Footer />
    </>
  );
}

export default AllVideos;
