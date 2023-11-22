import React from 'react'
import {Background, LoadingText} from './Styles';
import loadingInfinity from '../assets/loadingInfinity.gif'
import "../css/Loading.css"


export const Loading = () => {
  return (
    <Background className='LoadingBg'>
        <LoadingText>잠시만 기다려주세요</LoadingText>
        <img src={loadingInfinity} alt="Loading" />
    </Background>
  )
};

