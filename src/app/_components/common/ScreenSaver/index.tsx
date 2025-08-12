"use client";

import { Button, styled } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { startTransition, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getMe } from "@/app/actions/auth/getMe";
import { refreshToken } from "@/app/actions/auth/refreshToken";
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

  const router = useRouter();

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
      if (data.result.length <= 0) {
        // redirect("/home");
      }

      setItems(
        data.result
          .slice() // 원본 배열 보호용 복사
          .sort((a, b) => (a.seq ?? 0) - (b.seq ?? 0)) // seq 기준 오름차순 정렬, seq가 없으면 0으로 처리
          .map((content) => ({
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

  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const handleSlideChange = () => {
    const swiper = swiperRef.current;
    if (!swiper || items.length <= 0) return;

    const currentIndex = swiper.realIndex;
    const currentItem = items[currentIndex];
    // console.log("currentItem", currentItem);
    // 타임아웃 초기화
    timeouts.current.forEach((t) => clearTimeout(t));
    timeouts.current = [];

    if (currentItem?.type === "video") {
      const videoEl = videoRefs.current[currentIndex];
      if (videoEl) {
        // videoEl.currentTime = 0;
        videoEl.play();
      }
    } else if (currentItem?.type === "image") {
      // 10초 후 다음 슬라이드로
      const timeoutId = setTimeout(() => {
        swiper.slideNext();
      }, 10000);
      timeouts.current.push(timeoutId);
    }
  };

  useEffect(() => {
    return () => {
      timeouts.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    startTransition(() => {
      refreshToken().catch(() => {
        // 토큰 갱신 실패 시 로그인 페이지 이동
        window.location.href = "/signin";
      });
    });
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
      {items.length <= 0 ? (
        <SlideST
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            flexDirection: "column",
          }}
        >
          <img
            src="/images/logo/page-logo.png"
            style={{
              width: "100%",
              maxWidth: "500px",
              marginBottom: "64px",
            }}
          />

          <span style={{ fontSize: 32, fontWeight: 600, color: "#747d8a" }}>
            관리자에서 컨텐츠를 삽입해주세요.
          </span>
        </SlideST>
      ) : (
        items.map((item, index) => (
          <SlideST key={index}>
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.url}
                style={{
                  // minWidth: "768px",
                  width: "100%", // 가로 꽉 채움
                  height: "100%", // 비율 유지하며 세로 크기 자동 조절
                }}
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
        ))
      )}
    </SwiperST>
  );
}

const SwiperST = styled(Swiper)(() => {
  return {
    top: 0,
    left: "50%",
    width: "100%",
    display: "flex",
    height: "100dvh",
    maxWidth: "1024px",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    transform: "translate(-50%)",
  };
});

const SlideST = styled(SwiperSlide)(() => {
  return {
    width: "100%",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  };
});
