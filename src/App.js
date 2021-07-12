import "./App.css";
import Comment from "./components/comment";
import React, { Component } from "react";
import Commentsection from "./components/commentsection";


export class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0
  }

  ratingChanged = (newRating) => {
    this.setState({
      vote: newRating
    })
  };
  
  textChanged = (e) => {
    this.setState({
      commentValue: e.target.value
    })

  }
  

  handleComment = () => {

    if(this.state.vote === 0){
      alert("yorum yapmadan önce yıldız seçmediniz")
    }
    else if(this.state.commentValue.length < 3){alert("yorumunuz 3 karakterden az olamaz")}

    else{console.log(this.state.vote)
    console.log(this.state.commentValue)

    const newState = this.state;
  
    newState.comments.push({ 
        text: this.state.commentValue, 
        vote: this.state.vote 
    });
    newState.commentValue = "";
    newState.vote = 0;
  
    this.setState({
      ...newState
    });}

    
  }

  render() {
    return (
      <div className="App">
        <Comment comments={this.state.comments}></Comment>
        <Commentsection handleComment={this.handleComment} ratingChanged = {this.ratingChanged} textChanged = {this.textChanged}></Commentsection>
      </div>
    );
  }
}

export default App;
