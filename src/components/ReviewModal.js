import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating'
import axios from "axios";
import { useParams } from 'react-router-dom';
import moment from "moment/moment";
import { postrating } from '../apis/postrating';
import { getratingdata } from '../apis/getratingdata';

export default function ReviewModal() {
    let {content_id}=useParams();
    const subsr= localStorage.getItem('subsr');

    //review get 요청 useState
    const [review, setReview] = useState();
    //rating get 요청 useState
    const [rating, setRating] = useState();
    const [isRated, setIsRated] = useState(false);
    //rating_date 설정 useState
    const [ratingDate, setRatingDate] = useState();
    const rating_date = moment(ratingDate).format('yyyy-MM-DD HH:mm');

    //rating get요청
    useEffect(() => {
      const checkRatings = async () => {
        try {
          const response = await getratingdata(content_id);
          const found = response.filter((item) => item.subsr === subsr);
          if (found.length > 0) {
            setRating(found[found.length-1].rating);
            setReview(found[found.length-1].review);
            setRatingDate(found[found.length-1].ratingDate);
            setIsRated(true);
          } else{
            setRating(0);
            setReview();
            setIsRated(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkRatings();
    }, [subsr, content_id]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000';
  }

  function closeModal() {
    setIsOpen(false);
    setRating(0);
  }

  const handleChange = ((e)=> {
    setReview(e.target.value);
  })

    const rate = (rating)=>{
        setRating(rating);
        setRatingDate(new Date());
    }
    //POST Rating 
    const handleRating = async() => {
        await postrating(content_id, subsr, rating, review, rating_date);
    };

    const clickSubmit = async(e) => {
      if(rating === 0){
        alert("평점을 메겨주세요");
        e.preventDefault();
      }else{
        await handleRating();
      }
    }

  return (
    <div>
      <button 
        onClick={openModal}>
          {isRated ? "리뷰수정":"리뷰작성"}
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{content_id}</h2> */}
        <button onClick={closeModal}>×</button>
        <div>
        {<Rating
            fillColor="#A50034"
            size="35"
            initialValue={rating}
            onClick={rate}
            />}  
        </div>
        <form>
          <textarea
          maxLength={100}
          value={review}
          onChange={handleChange}
          placeholder='리뷰는 최대 100자까지 작성 가능합니다.'
          style={{width: '490px', height:'150px', border: '1px solid', tesxtAlign:'justify'}}
          />
          <button onClick={clickSubmit}>등록하기</button>
        </form>
      </Modal>
    </div>
  );
}

const customStyles = {
    content: {
      width: '500px',
      height: '500px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };