import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const footMenu = [
  {
    id: 1,
    title: "Links",
    menu: [
      {
        id: 1,
        link: "Home",
        path: "/",
      },
      {
        id: 2,
        link: "About",
        path: "/",
      },
      {
        id: 3,
        link: "Services",
        path: "/",
      },
      {
        id: 4,
        link: "Projects",
        path: "/",
      },
      {
        id: 5,
        link: "Contact",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    menu: [
      {
        id: 1,
        link: "Web Design",
        path: "/",
      },
      {
        id: 2,
        link: "Web Development",
        path: "/",
      },
      {
        id: 3,
        link: "Business Strategy",
        path: "/",
      },
      {
        id: 4,
        link: "Data Analysis",
        path: "/",
      },
      {
        id: 5,
        link: "Graphic Design",
        path: "/",
      },
    ],
  },
];

export const footSocial = [
  {
    id: 2,
    icon: <FaTwitter />,
    path: "#",
  },
  {
    id: 1,
    icon: <FaFacebookF />,
    path: "#",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    path: "#",
  },
];
