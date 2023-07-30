import { useRef, useState } from "react";
import * as moment from "moment";
import { addComment, commentsData, removeComment } from "./Comments";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { IoMdSend, IoMdTrash } from "react-icons/io";

function CommentSection() {
  const textareaRef = useRef(null);
  const [newComment, setNewComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const timeAgo = (timestamp) => {
    return moment(timestamp).fromNow().toString();
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") {
      return; // Prevent submitting empty comments
    }

    const comment = {
      id: Date.now(),
      text: newComment.trim(),
      timestamp: new Date().toLocaleString(),
      profileImg:
        "https://static.vecteezy.com/system/resources/previews/019/011/193/original/user-icon-fake-photo-sign-profile-button-simple-style-social-media-poster-background-symbol-user-brand-logo-design-element-user-t-shirt-printing-for-sticker-vector.jpg",
      profileName: "Unknown User",
    };

    // setComments([...comments, comment]);
    addComment(comment);
    setNewComment("");
    handleTextareaResize();
  };

  const handleTextareaResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
      textareaRef.current.style.maxHeight = "8rem";
    }
  };

  const handleDeleteComment = (commentId) => {
    removeComment(commentId);
  };

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div className="flex flex-col bg-gray-100 w-full gap-4 border-y-2 border-gray-300 px-4 md:px-8 py-4 md:py-8">
      {/* label and text area */}
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-medium text-sm md:text-lg">
          <BiSolidCommentDetail className="flex flex-shrink-0" /> Comments
        </span>

        <div className="flex items-center flex-row gap-2 md:gap-4 w-full rounded-lg flex-nowrap ">
          <textarea
            ref={textareaRef}
            placeholder="Type your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex sm:flex-shrink w-full rounded-lg px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none lg:overflow-hidden text-sm md:text-base font-serif"
            onInput={handleTextareaResize}
          />
          {/* post comment button */}
          <button
            type="submit"
            onClick={handleCommentSubmit}
            className="text-txtLight text-lg cursor-pointer focus:outline-none focus:ring-2 rounded-sm focus:ring-gray-400 "
          >
            <IoMdSend />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-hidden">
        {commentsData.length === 0 ? (
          <p className="text-txtLight">No comments yet.</p>
        ) : (
          <ul className="list-reset flex flex-col gap-2 md:gap-4">
            {/* show at most 3 comments firstly */}
            {commentsData
              .slice(0, showAllComments ? undefined : 3)
              .map((comment) => (
                <li
                  key={comment.id}
                  className="flex flex-wrap items-center gap-2  md:gap-4 p-2 "
                >
                  <div className="flex gap-2 md:gap-4 items-center w-full ">
                    <div className="w-7 h-7 md:w-[3rem] md:h-[3rem] rounded-full bg-gray-300 flex-shrink-0 object-cover overflow-hidden border-gray-300 border-2">
                      {" "}
                      <img
                        src={comment.profileImg}
                        alt="user img"
                        className="w-full h-full"
                      />
                    </div>
                    <div className=" flex flex-col gap-2 w-full md:w-[90%]">
                      <div className="flex gap-2 justify-between flex-wrap">
                        <p className="cursor-pointer text-sm font-bold">
                          {comment.profileName}
                        </p>
                        <div className="flex">
                          <span className=" text-gray-400 text-xs md:text-sm">
                            {timeAgo(comment.timestamp)}
                          </span>

                          <button
                            onClick={() => handleDeleteComment(comment.id)}
                            className="text-gray-400 focus:outline-none focus:ring-2 rounded-md focus:ring-gray-400 ml-2"
                          >
                            <IoMdTrash />
                          </button>
                        </div>
                      </div>
                      <p className="break-words bg-gray-200 p-2 md:p-3 rounded-md text-xs md:text-base font-serif leading-relaxed tracking-wide">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
        {/* Show "View All" button if there are more than 3 comments */}
        {commentsData.length > 3 && (
          <button
            onClick={toggleShowAllComments}
            className="md:px-2 border-2 border-gray-300 rounded-md w-[50%] sm:w-[30%] md:w-[30%] self-center text-dark bg-white flex justify-center items-center font-medium text-xs md:text-sm focus:outline-2 focus:outline-txtLight"
          >
            {showAllComments ? "View Less" : "View All"}
            {showAllComments ? (
              <BiChevronUp className="text-2xl" />
            ) : (
              <BiChevronDown className="text-2xl" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
