import React from "react";
import Image from "next/image";
import dp from "./assets/Profile-Pic.png";
import ellipse from "./assets/More.png";
import postImg from "./assets/post.png";
import like from "./assets/like.png";
import comment from "./assets/comment.png";
import send from "./assets/send.png";
import bookmark from "./assets/bookmark.png";
import smiley from "./assets/Emoji.png";

const Post = () => {
  return (
    <div className="post-body flex-col">
      <div className="header flex justify-between p-2">
        <div className="flex gap-2 items-center text-xs font-semibold">
          <Image src={dp} alt="dp" width={32} height={32} />
          TerryLucas
        </div>
        <Image src={ellipse} alt="ellipse" className="hover:cursor-pointer" />
      </div>
      <div className="image">
        <Image src={postImg} alt="post image" />
      </div>
      <div className="footer flex-col justify-start text-sm font-semibold px-3 py-1">
        <div className="footer-icons flex justify-between ">
          <div className="icons-left flex justify-start">
            <Image src={like} alt="like" />
            <Image src={comment} alt="comment" />
            <Image src={send} alt="send" />
          </div>
          <div>
            <Image src={bookmark} alt="bookmark" />
          </div>
        </div>
        <div className="likes">1069 likes</div>
        <div className="comment">
          <span>{"TerryLucas \t"}</span>
          <span className="font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            recusandae?
          </span>
        </div>
        <div className="font-light text-gray-500">
          <div>view all 100 comments</div>
          <div className="text-xs">1 Hour ago</div>
        </div>
        <br />
        <hr />
        <div className="commentBox flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <Image src={smiley} alt="smiley" />
            <span>Add a comment</span>
          </div>
          <div className="text-blue-300">Post</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
