import { createContext, useCallback, useReducer } from "react";

// Create Context
const DoraContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  COLOR: "COLOR",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
};
const { BLOG, COLOR, PORTFOLIO_MODAL } = type;

// Initial Value
const initialState = {
  color: "yellow",
  blog: null,
  blogs: [
    {
      id: 1,
      date: "23 Oct 2022",
      img: "https://i0.wp.com/www.zekagraphic.com/wp-content/uploads/2021/09/39-Best-Graphic-Design-Blogs-For-Inspiration.jpg?fit=1920%2C1080&ssl=1",
      title: "User interface design or user interface engineering",
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "https://neilpatel.com/wp-content/uploads/fly-images/47522/blog-post-image-guide-1200x675-c.jpg",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "https://www.rasmussen.edu/images/rasmussenlibraries/blogs/graphic-design-blogs-19f9365b5-450e-4b97-8263-d44fe9a6c941.jpg",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
    {
      id: 1,
      date: "23 Oct 2022",
      img: "https://i0.wp.com/www.zekagraphic.com/wp-content/uploads/2021/09/39-Best-Graphic-Design-Blogs-For-Inspiration.jpg?fit=1920%2C1080&ssl=1",
      title: "User interface design or user interface engineering",
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "https://static.wixstatic.com/media/0e0314_20c9171713d947b8bd599af42798f491~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e0314_20c9171713d947b8bd599af42798f491~mv2.png",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "https://i.graphicmama.com/blog/wp-content/uploads/2020/09/16071525/15-Inspiring-Blog-Design-Examples.png",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
  ],
  portfolio_modal: false,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};

// Watson State
const DoraState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Page Color
  const colorChange = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const blogDetails = useCallback((value) => {
    dispatch({
      type: BLOG,
      payload: value,
    });
  }, []);

  const portfolio_modal_show = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_MODAL,
      payload: value,
    });
  }, []);

  const { color, blog, blogs, portfolio_modal } = state;
  return (
    <DoraContext.Provider
      value={{
        color,
        colorChange,
        blogs,
        blog,
        blogDetails,
        portfolio_modal,
        portfolio_modal_show,
      }}
    >
      {children}
    </DoraContext.Provider>
  );
};

export default DoraState;
export { DoraContext };
