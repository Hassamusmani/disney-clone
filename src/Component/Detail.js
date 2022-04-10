import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 25rem);
  overflow-x: hidden;
  display: block;
  top: 7rem;
  padding: 0 calc(3.5vw + 0.5rem);
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  opacity: 0.8;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;

    @media(max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 17rem;
  padding-bottom: 2.4rem;
  width: 100%;

  img {
    max-width: 60rem;
    min-width: 20rem;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 87.4rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 2.4rem 0;
  min-height: 5.6rem;
`;

const Player = styled.button`
  font-size: 1.5rem;
  margin: 0 2.2rem 0 0;
  padding: 0 2.4rem;
  height: 5.6rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  border: none;

  img {
    width: 3.2rem;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }

  @media(max-width: 768px) {
    height: 4.5rem;
    padding: 0 2.2rem;
    font-size: 1.2rem;
    margin: 0 1rem 0 0;

    img {
      width: 2.5rem;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 0.1rem solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 1.6rem;
  height: 4.4rem;
  width: 4.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 0.2rem solid #fff;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 0.2rem;
      transform: translate(1px, 0px) rotate(0deg);
      width: 1.6rem;
    }
    &:nth-child(2) {
      height: 1.6rem;
      transform: translateX(-8px) rotate(0deg);
      width: 0.2rem;
    }
  }
`;

const GroupWatch = styled.div`
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;

  div {
    height: 4rem;
    width: 4rem;
    background: rgba(0, 0, 0);
    border-radius: 50%;

    img{
      width: 100%;
    }
  }
`;

const SubTitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1.5rem;
  min-height: 2rem;

  @media(max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  padding: 1.6rem 0;
  color: rgb(249, 249, 249);

  @media(max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  console.log(id)
  useEffect(async () => {
    try {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDetailData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  }, [id])

  return <Container>
    <Background>
      <img src={detailData.backgroundImg} alt="" />
    </Background>
    <ImageTitle>
      <img src={detailData.titleImg} alt="" />
    </ImageTitle>
    <ContentMeta>
      <Controls>
        <Player>
          <img src="/Assets/Images/play-icon-black.png" alt="player" />
          <span>Play</span>
        </Player>
        <Trailer>
          <img src="/Assets/Images/play-icon-white.png" alt="Trailer" />
          <span>Trailer</span>
        </Trailer>
        <AddList>
          <span />
          <span />
        </AddList>
        <GroupWatch>
          <div>
            <img src="/Assets/Images/group-icon.png" alt="group" />
          </div>
        </GroupWatch>
      </Controls>

      <SubTitles>{detailData.subTitle}</SubTitles>
      <Description>{detailData.description}</Description>
    </ContentMeta>
  </Container>
}

export default Detail;