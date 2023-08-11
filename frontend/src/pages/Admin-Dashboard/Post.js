import SettingDashboard from "./Dashboard";
import { AiOutlineSearch } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import {
  BiSolidCommentDetail,
  BiChevronDown,
  BiChevronUp,
} from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";
import MoreOptions from "./MoreOptions";

const AdminPostsData = [
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/news/thumb16-1623461349.jpg",
    title:
      "​​Chinese restaurateur’s experience in Nepal during the Maoist insurgency",
    date: "17 Aug",
    commentCount: "17",
    editor: "Saugat Adhikari",
    category: "Health",
    published: false,
  },
  {
    pic: "https://previews.123rf.com/images/idealnabraj/idealnabraj1809/idealnabraj180900205/108763207-massive-tangle-of-cables-and-wires-in-the-city-of-kathmandu-nepal.jpg",
    title:
      "​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles ​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles",
    date: "17 July",
    commentCount: "11",
    editor: "Ramesh Parsain",
    category: "Education",
    published: true,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/third-party/5g-1658619760.png",
    title: "​Nepal waiting and waiting for 5G mobile technology",
    date: "12 Jun",
    commentCount: "27",
    editor: "Anil Bhandari",
    category: "Science & Tech",
    published: true,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/news/thumb16-1623461349.jpg",
    title:
      "​​Chinese restaurateur’s experience in Nepal during the Maoist insurgency",
    date: "17 Aug",
    commentCount: "17",
    editor: "Saugat Adhikari",
    category: "Health",
    published: true,
  },
  {
    pic: "https://previews.123rf.com/images/idealnabraj/idealnabraj1809/idealnabraj180900205/108763207-massive-tangle-of-cables-and-wires-in-the-city-of-kathmandu-nepal.jpg",
    title:
      "​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles ​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles",
    date: "17 July",
    commentCount: "11",
    editor: "Ramesh Parsain",
    category: "Education",
    published: true,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/third-party/5g-1658619760.png",
    title: "​Nepal waiting and waiting for 5G mobile technology",
    date: "12 Jun",
    commentCount: "27",
    editor: "Anil Bhandari",
    category: "Science & Tech",
    published: false,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/news/thumb16-1623461349.jpg",
    title:
      "​​Chinese restaurateur’s experience in Nepal during the Maoist insurgency",
    date: "17 Aug",
    commentCount: "17",
    editor: "Saugat Adhikari",
    category: "Health",
    published: true,
  },
  {
    pic: "https://previews.123rf.com/images/idealnabraj/idealnabraj1809/idealnabraj180900205/108763207-massive-tangle-of-cables-and-wires-in-the-city-of-kathmandu-nepal.jpg",
    title:
      "​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles ​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles",
    date: "17 July",
    commentCount: "11",
    editor: "Ramesh Parsain",
    category: "Education",
    published: true,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/third-party/5g-1658619760.png",
    title: "​Nepal waiting and waiting for 5G mobile technology",
    date: "12 Jun",
    commentCount: "27",
    editor: "Anil Bhandari",
    category: "Science & Tech",
    published: false,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/news/thumb16-1623461349.jpg",
    title:
      "​​Chinese restaurateur’s experience in Nepal during the Maoist insurgency",
    date: "17 Aug",
    commentCount: "17",
    editor: "Saugat Adhikari",
    category: "Health",
    published: true,
  },
  {
    pic: "https://previews.123rf.com/images/idealnabraj/idealnabraj1809/idealnabraj180900205/108763207-massive-tangle-of-cables-and-wires-in-the-city-of-kathmandu-nepal.jpg",
    title:
      "​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles ​Kathmandu metropolis clears nearly 100 tonnes of cable clutter from utility poles",
    date: "17 July",
    commentCount: "11",
    editor: "Ramesh Parsain",
    category: "Education",
    published: false,
  },
  {
    pic: "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/third-party/5g-1658619760.png",
    title: "​Nepal waiting and waiting for 5G mobile technology",
    date: "12 Jun",
    commentCount: "27",
    editor: "Anil Bhandari",
    category: "Science & Tech",
    published: true,
  },
 
];

function AdminPosts() {
  const [showAllPost, setShowAllPost] = useState(false);
  const [filter, setFilter] = useState("all");
  const [openOptionsIndex, setOpenOptionsIndex] = useState(-1);

  const toggleShowAllPost = () => {
    setShowAllPost(!showAllPost);
  };

  // filtering posts data based on dropdown selection
  let filteredPosts = AdminPostsData;

  if (filter === "published") {
    filteredPosts = AdminPostsData.filter((post) => post.published);
  }

  if (filter === "draft") {
    filteredPosts = AdminPostsData.filter((post) => !post.published);
  }

  return (
    <div
      className="flex w-full flex-col px-8"
      onClick={() => openOptionsIndex !== -1 && setOpenOptionsIndex(-1)} //closes the option if clicked outside the option
    >
      <SettingDashboard />
      <div className="flex flex-col bg-gray-100 w-full min-h-screen gap-2 pb-16">
        {/* Posts top start*/}
        <div className="flex justify-between items-center py-2 border-b-2 border-b-gray-300 px-4 gap-2">
          <span className="text-xl font-bold text-dark">Posts</span>
          <div className="relative w-[50%] md:w-[20%]">
            <input
              type="text"
              placeholder="Search ..."
              className="border border-gray-300 text-xs md:text-base rounded-md pl-8 pr-4 w-full py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {/* Posts top end */}
        <div className="flex px-4">
          <select
            className="flex border-[1px] border-gray-200 rounded-sm w-[6rem] md:w-[8rem] bg-transparent text-xs sm:text-base text-txtLight font-medium cursor-pointer focus:outline-txtLight"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All ({AdminPostsData.length})</option>
            <option value="published">
              Published (
              {AdminPostsData.filter((post) => post.published).length})
            </option>
            <option value="draft">
              Draft ({AdminPostsData.filter((post) => !post.published).length})
            </option>
          </select>
        </div>

        <div className="flex flex-col  gap-4 px-4 py-4 w-full">
          {AdminPostsData.length === 0 ? (
            <p className="text-txtLight">There is no post to show.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredPosts
                .slice(0, showAllPost ? undefined : 8)
                .map((val, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between rounded-md overflow-hidden  cursor-pointer"
                  >
                    <span className="flex text-sm text-txtLight ">{val.editor} / In {val.category}</span>
                    <div className="h-full">
                      <img
                        src={val.pic}
                        alt="related article 1"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col justify-between px-2 gap-2 sm:gap-3 ">
                      <span className="text-xs sm:text-sm font-bold line-clamp-2">
                        {val.title}
                      </span>
                      <div className="flex justify-between  items-center text-xs">
                        <p className="text-xs text-txtLight flex gap-2">
                          {val.published ? (
                            <p>Published</p>
                          ) : (
                            <p className="text-blue-600">DRAFT</p>
                          )}{" "}
                          • {val.date}
                        </p>
                        <div className="flex justify-between items-center gap-2 text-txtLight text-sm md:text-base bg-red- ">
                          <BsShareFill
                            className={
                              val.published
                                ? `hover:text-dark cursor-pointer text-sm`
                                : `hidden`
                            }
                          />
                          <p className="flex items-center text-sm gap-1">
                            {val.commentCount}
                            <BiSolidCommentDetail className="hover:text-dark cursor-pointer text-base" />
                          </p>
                          <FiMoreVertical
                            className="hover:text-dark cursor-pointer text-lg"
                            // for displaying options based on the index of post clicked
                            onClick={() =>
                              setOpenOptionsIndex(
                                index === openOptionsIndex ? -1 : index
                              )
                            }
                          />
                          {index === openOptionsIndex && (
                            <MoreOptions published={val.published} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {filteredPosts.length > 8 && (
            <button
              onClick={toggleShowAllPost}
              className="md:px-2 border-2 border-gray-300 rounded-md w-[50%] sm:w-[30%] md:w-[30%] self-center text-dark bg-white flex justify-center items-center font-medium text-xs md:text-sm focus:outline-2 focus:outline-txtLight mt-6"
            >
              {showAllPost ? "View Less" : "View All"}
              {showAllPost ? (
                <BiChevronUp className="text-2xl" />
              ) : (
                <BiChevronDown className="text-2xl" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPosts;
