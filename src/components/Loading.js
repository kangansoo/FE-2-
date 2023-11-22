import React from 'react'
import {Background, LoadingText} from './Styles';
import loadingInfinity from '../assets/loadingInfinity.gif'

export const Loading = () => {
  return (
    <Background>
        <LoadingText>잠시만 기다려주세요</LoadingText>
        <img src={loadingInfinity} alt="Loading" />
    </Background>
  )
};

