import React from 'react'
import ReactStars from 'react-rating-stars-component'
import "../App.css";



function Commentsection(props) {
    return (
        <div>
        <h4>Add your own comments</h4>
        <textarea onChange={props.textChanged} className="block"></textarea> 
        <br></br>
        <button onClick={props.handleComment} className="button">Submit</button>
        <ReactStars count={5} size={24} activeColor="#ffd700" onChange={props.ratingChanged} classNames="star" />,
     
        </div>
    )   
}

export default Commentsection
