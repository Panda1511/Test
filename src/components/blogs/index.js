import Heading from "../common/Heading";
import Card from "./Card";
import * as images from "../../assets/blogs_image";

const blogs = [
  {
    src: images.blog1,
    title: "Why Lead Generation is Key for Business Growth",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    date: "Sept. 12, 2019",
    author: "Admin",
    comments: 3,
  },
  {
    src: images.blog2,
    title: "Why Lead Generation is Key for Business Growth",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    date: "Sept. 12, 2019",
    author: "Admin",
    comments: 3,
  },
  {
    src: images.blog3,
    title: "Why Lead Generation is Key for Business Growth",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    date: "Sept. 12, 2019",
    author: "Admin",
    comments: 3,
  },
];

const Blogs = () => {
  return (
    <div id="blogs" className="sect">
      <div className="container">
        <Heading text={"Our Blog"} />
        <p className="slogan">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="blogs-wrapper">
          {blogs.map((item, index) => {
            return (
              <Card
                key={index}
                src={item.src}
                title={item.title}
                desc={item.desc}
                date={item.date}
                author={item.author}
                comments={item.comments}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
