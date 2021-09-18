import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
   height: 70px;
   background-color: #090b13;
   display: flex;
   align-items: center;
   padding: 0 36px;
   overflow-x: hidden;
`;
const Logo = styled.img`
   width: 80px;
`;
const NavMenu = styled.div`
   display: flex;
   flex: 1 1 auto;
   margin-left: 25px;
   align-items: center;
   a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      img {
         height: 20px;
      }
      span {
         font-size: 13px;
         letter-spacing: 1.42px;
         position: relative;

         &::after {
            content: '';
            height: 1px;
            background-color: #fff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transition: all 0.25s ease 0s;
            transform: scaleX(0.5);
         }
      }
      &:hover {
         span {
            &::after {
               opacity: 1;
               transform: scaleX(1);
            }
         }
      }
   }
`;
const UserImage = styled.img`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   cursor: pointer;
`;

const Header = () => {
   return (
      <Nav>
         <Link to="/">
            <Logo src="/images/logo.svg" />
         </Link>
         <NavMenu>
            <a>
               <img src="/images/home-icon.svg" />
               <span>HOME</span>
            </a>
            <a>
               <img src="/images/search-icon.svg" />
               <span>SEARCH</span>
            </a>
            <a>
               <img src="/images/watchlist-icon.svg" />
               <span>WATCHLIST</span>
            </a>
            <a>
               <img src="/images/watchlist-icon.svg" />
               <span>WATCHLIST</span>
            </a>
            <a>
               <img src="/images/movie-icon.svg" />
               <span>MOVIE</span>
            </a>
            <a>
               <img src="/images/series-icon.svg" />
               <span>SERIES</span>
            </a>
         </NavMenu>
         <UserImage src="https://w7.pngwing.com/pngs/869/276/png-transparent-smiley-emoticon-smiley-miscellaneous-desktop-wallpaper-world-smile-day-thumbnail.png" />
      </Nav>
   );
};

export default Header;
