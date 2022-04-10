import styled from "styled-components";
import { auth, provider, signInWithPopup, onAuthStateChanged, signOut } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { actions as userActions, selectUserName, selectUserPhoto } from "../features/user/userSlice"
import { useEffect } from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.6rem;
  letter-spacing: 1.6rem;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 8rem;
  margin-top: 0.4rem;
  max-height: 7rem;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 2.5rem;

  a{
    display: flex;
    align-items: center;
    padding: 0 1.2rem;

    img{
      height: 2rem;
      min-width: 2rem;
      width: 2rem;
      z-index: auto;
    }

    span {
      margin-left: 0.8rem;
      color: rgb(249, 249, 249);
      font-size: 1.4rem;
      letter-spacing: 0.142rem;
      line-height: 1.08;
      padding: 0.2rem 0;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before{
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 0.4rem 0.4rem;
        bottom: -6px;
        content: "";
        height: 0.2rem;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover{
      span:before{
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
      }
    }
  }
  @media(max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  border: 0.1rem solid #f9f9f9;
  border-radius: 0.4rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover{
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 4.8rem;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 0.1rem solid rgb(151, 151, 151, 0.34);
  border-radius: 0.4rem;
  box-shadow: rgb(0 0 0 / 50%) 0 0 1.8px 0;
  padding: 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  width: 100px;
  white-space: nowrap;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  width: 4.8rem;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const setUser = (user) => {
    dispatch(userActions.setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }));
  }

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
      }).catch(error => alert(error.message))
    } else {
      signOut(auth).then(() => {
        dispatch(userActions.setSignOutState());
        history.push("/");
      }).catch(error => alert(error.message))
    }
  }

  return <Nav>
    <Logo href="/home">
      <img src="Assets/Images/logo.svg" alt="Disney+" />
    </Logo>
    {!userName ? <Login onClick={handleAuth}>login</Login>
      :
      <>
        <NavMenu>
          <a href="/">
            <img src="Assets/Images/home-icon.svg" alt="home" />
            <span>home</span>
          </a>
          <a href="/">
            <img src="Assets/Images/search-icon.svg" alt="search" />
            <span>search</span>
          </a>
          <a href="/">
            <img src="Assets/Images/watchlist-icon.svg" alt="search" />
            <span>watchlist</span>
          </a>
          <a href="/">
            <img src="Assets/Images/original-icon.svg" alt="search" />
            <span>originals</span>
          </a>
          <a href="/">
            <img src="Assets/Images/movie-icon.svg" alt="search" />
            <span>movies</span>
          </a>
          <a href="/">
            <img src="Assets/Images/series-icon.svg" alt="search" />
            <span>series</span>
          </a>
        </NavMenu>
        <SignOut>
          <UserImg src={userPhoto} alt={userName} />
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      </>
    }
  </Nav>
}

export default Header;