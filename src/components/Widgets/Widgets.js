import { Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import './Widgets.css'
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className="widgets__searchIcon"/>
        <Input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets__widgetContainer'> 
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1485297694658949123"} />
        <TwitterTimelineEmbed
          sourchType="profile"
          screenName="khan20251998"
          options={{height: 400}} />

        <TwitterShareButton
          url={"https://facebook.com/aman7kh8an6"}
          options={{ text: "#reactjs is awesome", via: "aman7kh8an6" }}
        />
      </div>
      
    </div>
    );
}

export default Widgets;
