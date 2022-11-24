import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "../../firebase";
import FlipMove from "react-flip-move";
import { collection, onSnapshot } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const readRef = collection(db, "posts");
      const unsub = onSnapshot(readRef, snapshot => setPosts(snapshot.docs.map(doc => doc.data())));
      return unsub;
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
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
