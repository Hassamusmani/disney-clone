import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import db from "../firebase";
import { actions } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 25rem);
  overflow-x: hidden;
  display: block;
  top: 7rem;
  padding: 0 calc(3.5vw + 0.5rem);

  &:before{
  background: url("Assets/Images/home-background.png") center center / cover no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
  }
`;
const Home = props => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(async () => {
    const snapshot = await getDocs(collection(db, "movies"));
    snapshot.docs.forEach((doc) => {
      switch (doc.data().type) {
        case 'recommend':
          recommends.push({ id: doc.id, ...doc.data() })
          break;
        case 'new':
          newDisneys.push({ id: doc.id, ...doc.data() })
          break;
        case 'original':
          originals.push({ id: doc.id, ...doc.data() })
          break;
        case 'trending':
          trendings.push({ id: doc.id, ...doc.data() })
          break;
      }
    });

    dispatch(actions.setMovies({
      recommended: recommends,
      newDisney: newDisneys,
      original: originals,
      trending: trendings,
    }))
  }, [userName])

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home;