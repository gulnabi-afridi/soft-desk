export const Data = {
  navibar: [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "Cabinet",
      path: "cabinet",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Events",
      path: "event",
    },
    {
      name: "PhotoGallery",
      path: "/photogallery",
    },
  ],
  heroData: [
    {
      img: "/Assets/hero/1.jpg",
    },
    {
      img: "/Assets/hero/2.jpg",
    },
    {
      img: "/Assets/hero/3.jpg",
    },
    {
      img: "/Assets/hero/4.jpg",
    },
    {
      img: "/Assets/hero/5.jpg",
    },
  ],
  FirstSlideData: [
    {
      id: "1",
      img: "/Assets/hero/1.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "2",
      img: "/Assets/hero/2.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "3",
      img: "/Assets/hero/3.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "4",
      img: "/Assets/hero/4.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "5",
      img: "/Assets/hero/5.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
  ],
  SecSlideData: [
    {
      id: "6",
      img: "/Assets/hero/1.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "7",
      img: "/Assets/hero/2.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "8",
      img: "/Assets/hero/3.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "9",
      img: "/Assets/hero/4.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
    {
      id: "10",
      img: "/Assets/hero/5.jpg",
      title: "event title",
      description:
        "Position Relative: Position relative means relative to the parent. Moves according to parent. Position absolute: Work relative to the HTML(The parent of absolute is not always root element).Position Fixed:  Work relative to the parent. Position Sticky Another point about position absolute is, position absolute works relative to a parent whose position is relative.",
    },
  ],
};

export const getEventById = (id) => {
  const combineArray = [...Data.FirstSlideData, ...Data.SecSlideData];
  const event = combineArray.find((item) => item.id === id);
  return event;
};
