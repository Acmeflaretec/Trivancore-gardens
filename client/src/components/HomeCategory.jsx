import React, { useRef } from 'react';
import styled from 'styled-components';

const categories = [
  { id: 1, name: 'Electronics', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 2, name: 'Fashion', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 3, name: 'Home & Kitchen', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 4, name: 'Books', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 5, name: 'Toys & Games', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 6, name: 'Beauty', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 7, name: 'Sports', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  { id: 8, name: 'Automotive', image: 'https://img.freepik.com/premium-vector/2000-x-2000_1074119-2876.jpg?w=740' },
  // Add more categories as needed
];

const CategorySection = styled.section`
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2E7D32;
  margin-bottom: 24px;
  text-align: center;
`;

const CategoryScrollContainer = styled.div`
  position: relative;
`;

const CategoryScroll = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryCard = styled.div`
  flex: 0 0 200px;
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  scroll-snap-align: start;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CategoryName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #34495e;
  padding: 12px;
  text-align: center;
  background-color: #fff;
  margin: 0;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(100, 100, 100, 0.7); /* Changed to a light gray color */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(100, 100, 100, 0.9); /* Slightly darker on hover */
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


function HomeCategory() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <CategorySection>
      <SectionTitle>Explore Popular Categories</SectionTitle>
      <CategoryScrollContainer>
        <ScrollButton className="left" onClick={() => scroll('left')}>
          ‹
        </ScrollButton>
        <CategoryScroll ref={scrollRef}>
          {categories.map((category) => (
            <CategoryCard key={category.id}>
              <CategoryImage src={category.image} alt={category.name} />
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          ))}
        </CategoryScroll>
        <ScrollButton className="right" onClick={() => scroll('right')}>
          ›
        </ScrollButton>
      </CategoryScrollContainer>
    </CategorySection>
  );
}

export default HomeCategory;