import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export default function GenderQuestion({gtitle, gquestionList}) {
    const [checkedElement, setCheckedElement] = useState(-1);
    const onChangeRadioButton = (e) => {
        //e.target.value의 기본은 string
        setCheckedElement(Number(e.target.value));
    }

    return (
    
    <QuestionWrap>
        <div>{gtitle}</div>
        <div>
            {
                gquestionList.map((question, index) => (
                <RadioWrap key={index}>
                    <input 
                        type='radio'
                        value={index}
                        checked={checkedElement === index}
                        onChange={onChangeRadioButton}
                        />
                    <div>{question}</div>
                </RadioWrap>
            
                ))
            }
        </div>
    </QuestionWrap>
 
    )
}

const QuestionWrap = styled.div`
    
    margin-bottom: 16px;

    .questionTitle {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: bold;
    }

`;

const RadioWrap = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 8px;


`;