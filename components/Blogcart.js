import React from 'react'
import {BsCalendarCheckFill}  from 'react-icons/bs';
import {FaComment,FaEnvelopeSquare} from 'react-icons/fa';

const Cart =(props)=>{
    return(
      <>
      <style jsx>
      {`
      
      .card{
        border:1px solid transparent !important;
       
      }
      .card_title{
        font-size:1.2rem;
        padding-top:10px;
      }
      .card_title:hover{
        color:#ce3c83;
        cursor:pointer;
      }
      
      .comment_sec{
        color:gray;
        text-align:center;
      }
  .btn_read{
    background-color:#ce3c83;
    color:white;
    font-weight:bold;
    border:1px solid transparent;
    padding:10px 25px;
    border-radius:5px;
  }
  .btn_read:hover{
    background-color:gray;
    color:white;
    cursor:pointer;
  }
  .para_content{
    font-size:0.8rem;
  }
  .container{
    padding-top:20px;
  }
 
      `}
      </style>

   
        <div className='container'>
          <div className='row'>
          <div className='cards'>
            <div className='card'>
           <img src={props.image} alt='' className='card_img' />
              <div className='card_info'>
                <div className='d-flex justify-content-between my-3 comment_sec'>
                  <div className=''>
                <BsCalendarCheckFill className='icons'/> <span>April 21,18</span>
                </div>
                <div className=''>
                <FaComment className='icons'/> <span>0 Comments</span>
                </div>
                <div className=''>
                <FaEnvelopeSquare className='icons'/><span>News</span>
                </div>
                </div>
                <h3 className='card_title'> {props.title}</h3>
                <p className='para_content'>{props.para}</p>
                <a href={props.link} target="blank"><button className='btn_read'> Read More</button></a>
              </div>
            </div>
          </div>
          </div>
        </div>
        </>
    )
}
export default Cart; 