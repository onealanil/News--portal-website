import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import ArticleData from "./ArticleData";
import CommentSection from "./Comment";
import RelatedArticles from "./Related";
import SampleText from "./SampleArticle";
import LatestUpdatesSide from "../../components/Landing-news-section/LatestUpdatesSide";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  TelegramIcon,
  InstapaperIcon,
} from "react-share";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";

function Article() {
  return (
    <>
      <div className="flex w-[90%] xl:w-[85%] 2xl:w-[80%] items-center justify-center pt-4 mt-20">
        <div className="flex flex-col w-full gap-2 md:gap-4">
          <div className="flex w-[100%] gap-x-5 ">
            <div className=" flex md:w-[75%] flex-col gap-8 py-4 px-2">
              <div className="flex flex-col gap-2">
                {/* category */}
                <span className="flex gap-2 items-center text-txtLight text-xs sm:text-sm md:text-base">
                  <AiOutlineHome className="cursor-pointer hover:text-dark" /> /{" "}
                  <p className="underline text-[#434141] font-semibold cursor-pointer tracking-widest">
                    {" "}
                    {ArticleData[0].category}
                  </p>
                </span>
                {/* title */}
                <span className="text-dark font-bold text-xl tracking-wide leading-relaxed lg:text-2xl ">
                  {ArticleData[0].title}
                </span>
                {/* article editor */}
                <span className="text-gray-400 font-domine flex gap-2 items-center text-sm md:text-base">
                  {" "}
                  <AiTwotoneEdit /> {ArticleData[0].writer} |{" "}
                  {ArticleData[0].date}
                </span>
              </div>
              {/* share code start */}
              <div className="social-share flex flex-col md:flex-row justify-start items-center ">
                <div className="flex gap-2 my-3">
                  <FacebookShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <InstapaperShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <InstapaperIcon size={32} round />
                  </InstapaperShareButton>

                  <TwitterShareButton url="" quote="" hashtag="" description="">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>

                  <EmailShareButton url="" quote="" hashtag="" description="">
                    <EmailIcon size={32} round />
                  </EmailShareButton>

                  <TelegramShareButton
                    url=""
                    quote=""
                    hashtag=""
                    description=""
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                </div>
              </div>
              {/* share code end  */}
              <div className="flex flex-col gap-4 md:gap-8">
                {/* article image */}
                <img
                  src={ArticleData[2].src}
                  alt={ArticleData[0].alt}
                  className="w-[100%] h-96 md:h-[33rem] object-cover rounded-md"
                />
                {/* article text */}
                <p className="text-base leading-normal tracking-wide font-timesNewRoman">
                  {SampleText}
                </p>
                <p className="text-base leading-normal tracking-wide font-timesNewRoman">
                  {SampleText}
                </p>
                <p className="text-base leading-normal tracking-wide font-timesNewRoman">
                  Hanuman is a loyal servant of Lord Rama, while Sun Wukong is a
                  loyal follower of the Buddhist monk, Xuanzang. Both characters
                  are also known for their incredible strength and agility.
                  Hanuman is able to lift mountains and leap great distances,
                  while Sun Wukong is able to wield a magical staff that can
                  grow or shrink at will, and can also transform himself into a
                  giant or a tiny insect. In addition to these similarities,
                  there are also many other ways in which Hanuman influenced the
                  development of Sun Wukong's character. For example, both
                  characters are associated with the color red, and both are
                  often depicted wearing a red cape or other red clothing.
                  Furthermore, both characters are associated with the element
                  of fire. Hanuman is said to have the power to control fire,
                  while Sun Wukong is associated with the fiery nature of the
                  sun. Overall, it is clear that Hanuman had a significant
                  influence on the development of Sun Wukong's character. The
                  similarities between the two characters are too numerous to
                  ignore, and it is clear that the story of Hanuman has had a
                  lasting impact on Chinese mythology. In conclusion, the story
                  of Hanuman is a testament to the enduring power of mythology
                  and storytelling. Across Asia, his story has inspired
                  countless tales and legends, and has had a profound impact on
                  the development of many different cultures and traditions. The
                  influence of Hanuman on the character of Sun Wukong is just
                  one example of how his story continues to resonate with people
                  today, and will likely continue to do so for generations to
                  come.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <LatestUpdatesSide />
            </div>
          </div>

          <div className="w-full sm:w-[70%]">
            <CommentSection />
          </div>
          <RelatedArticles />
        </div>
      </div>
    </>
  );
}

export default Article;
