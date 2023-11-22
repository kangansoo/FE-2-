import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import '../css/DelConfirmAlert.css';
import { delReview } from '../apis/deldetailrating';

export default function DelConfirmAlert() {


    
    const handleDelete = () => {
        
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className='custom-ui'>
                <h1>리뷰 삭제 확인</h1>
                <p>정말로 삭제하시겠습니까?</p>
                <button onClick={onClose}>취소</button>
                <button
                  onClick={() => {
                    delReview();
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
