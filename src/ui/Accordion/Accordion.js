import React, { useState, useRef } from "react";
import "./Accordion.css";

const items = [
  {
    id: "game",
    title: "누구나 연결되는 새로운 즐거움",
    subTitle: "Game",
    image:
      "https://static.nhnent.com/static/site/corp/images/main/playBanner001.png",
    link: "/ko-KR/services?tab=game",
  },
  {
    id: "paymentAd",
    title: "생활 속 어디서나 쉽고 편리하게",
    subTitle: "Payment•Ad",
    image:
      "https://static.nhnent.com/static/site/corp/images/main/playBanner002.png",
    link: "/ko-KR/services?tab=paymentAd",
  },
  {
    id: "commerce",
    title: "더 넓은 세상으로의 연결",
    subTitle: "Commerce",
    image:
      "https://static.nhnent.com/static/site/corp/images/main/playBanner003.png",
    link: "/ko-KR/services?tab=commerce",
  },
  {
    id: "technology",
    title: "유연한 기술력으로 연결된 안전한 비즈니스",
    subTitle: "Technology",
    image:
      "https://static.nhnent.com/static/site/corp/images/main/playBanner004.png",
    link: "/ko-KR/services?tab=technology",
  },
  {
    id: "contents",
    title: "나를 위한 새로운 발견",
    subTitle: "Contents",
    image:
      "https://static.nhnent.com/static/site/corp/images/main/playBanner005.png",
    link: "/ko-KR/services?tab=contents",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (index, link = null) => {
    setCurrentIndex(index);
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return "slide active";
    if (index === currentIndex - 1 || index === currentIndex + 1)
      return "slide adjacent";
    return "slide hidden";
  };

  return (
    <div className="carousel-container">
      <ul className="carousel-track">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={getSlideClass(index)}
            onClick={() => handleNavigation(index, item.link)} // 클릭 시 handleNavigation 함수 호출
          >
            <div className="carousel-content">
              <div className="carousel-overlay" />
              <img
                src={item.image}
                alt={item.subTitle}
                className="carousel-image"
              />
              {currentIndex === index && (
                <div className="carousel-text">
                  <h1>{item.title}</h1>
                  <h2>{item.subTitle}</h2>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* 슬라이드 하단 버튼 */}
      <div className="carousel-buttons">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={currentIndex === index ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
