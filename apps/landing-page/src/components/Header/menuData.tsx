import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Community",
    path: "/community",
    newTab: false,
  },
  {
    id: 33,
    title: "Projects",
    path: "https://openpathfinder-application.vercel.app/login",
    newTab: true,
  },
  {
    id: 3,
    title: "Blog",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Project Discovery",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      },
      {
        id: 42,
        title: "Community Collobration",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      },
      {
        id: 43,
        title: "Mentorship Program",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      },
      {
        id: 44,
        title: "Learning Resources",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      },
      {
        id: 45,
        title: "Progress Tracking",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      },
      {
        id: 46,
        title: "Event Listing",
        path: "https://openpathfinder-application.vercel.app/login",
        newTab: true,
      }
    ],
  },
  {
    id: 5,
    title: "About",
    path: "/",
    newTab: false,
  }
];
export default menuData;
