import React, {useState, useEffect} from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';
import db from '../../firebase';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const colRef = collection(db, "posts");
  //   getDocs(colRef).then((snapshot)=>{
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [])
 
  useEffect(() => {
    const colRef = collection(db, "posts");

    onSnapshot(colRef, snapshot => {
      setPosts(snapshot.docs.map(doc=> doc.data()));
    })
  },[]);
  
  return (
    <div className='feed'>
            
            <div className='feed__header'>
                <h2> Hello </h2>
            </div>
            
            <TweetBox />

            <FlipMove>
            {posts.map(post => (
              <Post
                key={post.text} 
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
              />
            ))}
            </FlipMove>
    </div> 
    );
}

export default Feed;
