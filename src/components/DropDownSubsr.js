import React, { useState, useEffect, useRef } from 'react'
import '../css/DropDownSubsr.css'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function DropDownSubsr() {
    const subsr = localStorage.getItem('subsr')
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const navigate = useNavigate();

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // 클릭된 요소가 드롭다운 외부에 있으면 드롭다운을 닫음
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      // document에 클릭 이벤트 리스너 추가
      document.addEventListener('click', handleClickOutside);
  
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    const handleLogout = () => {
        setIsOpen(!isOpen);
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className='custom-ui'>
                <h1>로그아웃 확인</h1>
                <p>정말로 로그아웃하시겠습니까?</p>
                <button onClick={onClose}>닫기</button>
                <button
                  onClick={() => {
                    localStorage.removeItem('subsr', subsr);
                    navigate("../")
                    onClose();
                  }}
                >
                  로그아웃
                </button>
              </div>
            );
          },
        });
      };
      const handleMyPageClick = () => {
        setIsOpen(false);
      };

    return (
    <div className="dropdown" ref={dropdownRef}>
      <button
      className='dropdownbutton'
      onClick={toggleDropdown}>
        {subsr}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          안녕하세요
          <br />
          {subsr}님
            <Link to='../mypage' onClick={handleMyPageClick}>
                <p>마이페이지</p>
            </Link>
            <p onClick={handleLogout}>로그아웃</p>
        </div>
      )}
    </div>
  )
}
