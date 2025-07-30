import { styled } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ScreenSaver() {
  const swiperRef = useRef<any>(null);

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <SwiperST
      direction="vertical"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <SlideST>
        <video
          src="/video/test.mp4"
          style={{ width: "100%", height: "100%" }}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onPlay={() => {}}
        />
        <AbSpan>0번슬라이asdfasdfasdf드</AbSpan>
      </SlideST>
    </SwiperST>
  );
}

const SwiperST = styled(Swiper)(() => {
  return {
    width: "100%",
    height: "100%",
  };
});

const SlideST = styled(SwiperSlide)(() => {
  return {
    width: "100%",
  };
});

const AbSpan = styled("span")(() => {
  return {
    top: "50%",
    left: "50%",
    fontSize: "64px",
    fontWeight: 900,
    position: "absolute",
  };
});
