import styled from "styled-components";

const Container = styled.div`
  margin-top: 3rem;
  padding: 3rem 0 2.6rem;
  display: grid;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem, rgb(0 0 0 / 73%) 0 1.6rem 1.8rem -1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    inset: 0;
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 4rem 5.8rem -1.6rem, rgb(0 0 0 / 72%) 0 3rem 2.2rem -1rem;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

const Viewers = (props) => {
  return <Container>
    <Wrap>
      <img src="Assets/Images/viewers-disney.png" alt="viewer-1" />
      <video autoPlay={true} loop={true} playsInline={true} muted>
        <source src="Assets/Videos/1564674844-disney.mp4" type="video/mp4" />
      </video>
    </Wrap>
    <Wrap>
      <img src="Assets/Images/viewers-marvel.png" alt="viewer-2" />
      <video autoPlay={true} loop={true} playsInline={true} muted>
        <source src="Assets/Videos/1564676115-marvel.mp4" type="video/mp4" />
      </video>
    </Wrap>
    <Wrap>
      <img src="Assets/Images/viewers-national.png" alt="viewer-3" />
      <video autoPlay={true} loop={true} playsInline={true} muted>
        <source src="Assets/Videos/1564676296-national-geographic.mp4" type="video/mp4" />
      </video>
    </Wrap>
    <Wrap>
      <img src="Assets/Images/viewers-pixar.png" alt="viewer-4" />
      <video autoPlay={true} loop={true} playsInline={true} muted>
        <source src="Assets/Videos/1564676714-pixar.mp4" type="video/mp4" />
      </video>
    </Wrap>
    <Wrap>
      <img src="Assets/Images/viewers-starwars.png" alt="viewer-5" />
      <video autoPlay={true} loop={true} playsInline={true} muted>
        <source src="Assets/Videos/1608229455-star-wars.mp4" type="video/mp4" />
      </video>
    </Wrap>
  </Container>
}

export default Viewers;