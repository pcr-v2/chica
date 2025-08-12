"use client";

import { Button, styled } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getMe } from "@/app/actions/auth/getMe";
import { getContentsList } from "@/app/actions/contents/getContentsListAction";

export type FileType = "image" | "video";

export interface IItem {
  id: string; // 서버에서 받아온 경우 숫자형 id도 string으로 변환해서 사용
  type: FileType;
  url: string; // CloudFront URL or ObjectURL
  fileName?: string; // 서버에서 온 데이터용 (uuid 부분)
  fileType?: string; // 확장자 (jpeg, mp4 등)
  schoolId?: string;
  seq?: number;
  contentsStatus?: boolean;
  file?: File; // 업로드할 때 클라이언트에서만 존재
}

export default function ScreenSaver() {
  const [items, setItems] = useState<IItem[]>([]);

  const { data: me } = useQuery({
    queryKey: ["get-me"],
    queryFn: () => getMe(),
    staleTime: 0,
  });

  const { data } = useQuery({
    queryKey: ["contentsList", me],
    queryFn: () =>
      getContentsList({
        schoolId: me?.data?.schoolId!,
      }),
    // initialData: contentsList,
    staleTime: 0,
    enabled: !!me,
  });

  useEffect(() => {
    if (data?.result) {
      setItems(
        data.result.map((content) => ({
          id: content.id.toString(),
          type: content.fileType === "mp4" ? "video" : "image",
          url: `${process.env.NEXT_PUBLIC_AWS_CLOUD_FRONT_KEY}/${content.schoolId}/${content.fileName}.${content.fileType}`,
          fileName: content.fileName,
          fileType: content.fileType,
          schoolId: content.schoolId,
          seq: content.seq,
          contentsStatus: content.contentsStatus,
        })),
      );
    }
  }, [data]);

  console.log("items", items);

  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const currentIndex = swiper.realIndex;
    const currentItem = items[currentIndex];
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
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        // e.stopPropagation();
        // e.preventDefault();
      }}
      onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
        // e.stopPropagation();
        // e.preventDefault();
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        pointerEvents: "auto", // 이 div가 이벤트를 받도록 보장
      }}
    >
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
        {items.map((item, index) => (
          <SlideST key={index}>
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.url}
                style={{ width: "100%", objectFit: "cover" }}
                autoPlay
                muted
                playsInline
                onEnded={() => {
                  swiperRef.current.slideNext();
                }}
              />
            ) : (
              <img
                src={item.url}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  maxHeight: "100dvh",
                }}
              />
            )}
          </SlideST>
        ))}
      </SwiperST>
    </div>
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
    maxHeight: "100dvh",
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
