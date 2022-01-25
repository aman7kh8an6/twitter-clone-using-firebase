import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar, Button, Input} from '@material-ui/core';
import db from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) =>{
    e.preventDefault();
    const colRef = collection(db, "posts");
    addDoc(colRef, {
      displayName: "Aman Khan",
      username: "khan20251998",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1249985398777888768/FUOnZLeV_400x400.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return <div className='tweetBox'>
      <form>
          <div className='tweetBox__input'>
          <Avatar src="https://pbs.twimg.com/profile_images/1249985398777888768/FUOnZLeV_400x400.jpg" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
          </div>
          <input
             onChange={e => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
          type="text"
        />
          <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">  Tweet</Button>
      </form>
  </div>;
}

export default TweetBox;
