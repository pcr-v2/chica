"use client";

import { Button, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testList = [
  { type: "video", src: "test1.mp4" },
  { type: "image", src: "test1.png" },
  { type: "image", src: "test2.png" },
  { type: "image", src: "test3.png" },
  { type: "image", src: "test4.png" },
  { type: "video", src: "test1.mp4" },
  // { type: "video", src: "test1.mp4" },
  // { type: "video", src: "test1.mp4" },
];

export default function ScreenSaver() {
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const currentIndex = swiper.realIndex;
    const currentItem = testList[currentIndex];
    // console.log("currentItem", currentItem);
    // 타임아웃 초기화
    timeouts.current.forEach((t) => clearTimeout(t));
    timeouts.current = [];

    if (currentItem.type === "video") {
      const videoEl = videoRefs.current[currentIndex];
      if (videoEl) {
        // videoEl.currentTime = 0;
        videoEl.play();
      }
    } else if (currentItem.type === "image") {
      // 10초 후 다음 슬라이드로
      const timeoutId = setTimeout(() => {
        swiper.slideNext();
      }, 5000);
      timeouts.current.push(timeoutId);
    }
  };

  useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <SwiperST
      direction="vertical"
      modules={[Autoplay, Pagination]}
      loop
      onSlideChange={handleSlideChange}
      className="mySwiper"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {testList.map((item, index) => (
        <SlideST key={index}>
          {item.type === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={`/video/${item.src}`}
              style={{ width: "100%" }}
              autoPlay
              muted
              playsInline
              onEnded={() => {
                // console.log("영상 끝남");
                // console.log("swiperRef.current", swiperRef.current);
                swiperRef.current.slideNext();
              }}
            />
          ) : (
            <img
              src={`/${item.src}`}
              style={{
                width: "100%",
                objectFit: "contain",
                maxHeight: "100dvh",
              }}
            />
          )}
          <AbSpan>{index + 1}번 슬라이드</AbSpan>
        </SlideST>
      ))}
    </SwiperST>
  );
}

const SwiperST = styled(Swiper)(() => {
  return {
    top: 0,
    left: "50%",
    width: "100%",
    height: "100dvh",
    maxWidth: "1024px",
    position: "absolute",
    transform: "translate(-50%)",
  };
});

const SlideST = styled(SwiperSlide)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  };
});

const AbSpan = styled("span")(() => {
  return {
    top: "50%",
    left: "50%",
    zIndex: 999999999,
    fontWeight: 900,
    color: "#fa0000",
    fontSize: "100px",
    position: "absolute",
  };
});
