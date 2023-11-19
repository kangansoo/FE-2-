import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import './DelConfirmAlert.css';

export default function DelConfirmAlert() {
    
    const handleDelete = () => {
        
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className='custom-ui'>
                <h1>리뷰 삭제 확인</h1>
                <p>정말로 삭제하시겠습니까?</p>
                <button onClick={onClose}>닫기</button>
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  삭제
                </button>
              </div>
            );
          },
        });
      }; 

  return (
    <div>
        <button className='delbutton' onClick={handleDelete}><h2>×</h2></button>
    </div>
  )
}
