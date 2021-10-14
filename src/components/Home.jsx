import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from './../firebase';
import { useDispatch } from 'react-redux';

const Container = styled.main`
   min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&::before{
		content:'';
		background: url('/images/home-background.png') center center / cover fixed no-repeat;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
// const NavMenu = styled.div``

const Home = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		db.collection('movies').onSnapshot((snapshot) => {
			console.log(snapshot)
		})
	}, [])

   return (
      <Container>
         <ImgSlider/>
			<Viewers />
			<Movies />
      </Container>
   );
};

export default Home;
