import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;
`;
const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: -1;
   opacity: 0.8;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;
const ImageTitle = styled.div`
   height: 30vh;
   min-height: 170px;
   width: 35vw;
   min-width: 200px;

   img {
      width: 100%;
      height: 100%;
      object-fit: contain;
   }
`;
const Controls = styled.div`
   display: flex;
   align-items: center;
`;
const PlayButton = styled.button`
   padding: 0px 24px;
   margin: 0px 22px 0px 0px;
   border: none;
   border-radius: 4px;
   font-size: 15px;
   display: flex;
   align-items: center;
   min-height: 56px;
   background: rgb(249, 249, 249);
   letter-spacing: 1.8px;
   cursor: pointer;
   transition: all 0.3s ease 0s;

   &:hover {
      background: rgb(198, 198, 198);
   }
`;
const TrailerButton = styled(PlayButton)`
   background: rgba(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249, 249, 249);
   text-transform: uppercase;
`;
const AddButton = styled.button`
   margin: 0px 16px 0px 0px;
   width: 44px;
   height: 44px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   border: 2px solid white;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
   span {
      font-size: 32px;
      color: #fff;
   }
`;
const GroupWatchButton = styled(AddButton)`
   background: #000;
`;
const Subtitle = styled.div`
   margin: 26px 0px 0px 0px;
   color: rgb(249, 249, 249);
   font-size: 15px;
   min-height: 20px;
`;
const Description = styled.div`
   line-height: 1.4;
   font-size: 20px;
   margin: 16px 0px 0px 0px;
   color: rgb(249, 249, 249);
`;

const Details = () => {
   return (
      <Container>
         <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" />
         </Background>
         <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" />
         </ImageTitle>
         <Controls>
            <PlayButton>
               <img src="/images/play-icon-black.png" />
               <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
               <img src="/images/play-icon-white.png" />
               <span>Trailer</span>
            </TrailerButton>
            <AddButton>
               <span>+</span>
            </AddButton>
            <GroupWatchButton>
               <img src="/images/group-icon.png" />
            </GroupWatchButton>
         </Controls>
         <Subtitle>2015 • 1h 35m • Coming of Age, Family, Animation</Subtitle>
         <Description>
            When 11-year-old Riley moves to a new city, her Emotions team up to help her through the
            transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and
            Sadness get lost, they must journey through unfamiliar places to get back home.
         </Description>
      </Container>
   );
};

export default Details;
