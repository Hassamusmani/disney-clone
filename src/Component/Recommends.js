import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectRecommended } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 0 0 2.6rem;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem, rgb(0 0 0 / 73%) 0 1.6rem 1.8rem -1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 0.3rem solid rgba(249, 249, 249, 0.1);

  img{
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 0.5s ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 4rem 5.8rem -1.6rem, rgb(0 0 0 / 72%) 0 3rem 2.2rem -1rem;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Recommends = () => {
  const recommendedMovies = useSelector(selectRecommended);

  return <Container>
    <h4>Recommended For You</h4>
    <Content>
      {
        recommendedMovies?.map((movie, key) => (
          <Wrap key={key}>
            <Link to={"/detail/" + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))
      }
    </Content>
  </Container>
}

export default Recommends;