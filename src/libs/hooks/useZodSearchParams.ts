"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { parseSearchParams } from "zod-search-params";

/**
 * Object를 URLSearchParams로 변환한다.
 * @param object 원본 Object
 * @returns {URLSearchParams}
 */
function toURLSearchParams(object: object) {
  const searchParams = new URLSearchParams();
  for (let [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      for (let item of value) {
        if (item != null && item !== "") {
          searchParams.append(key, item);
        }
      }
    } else {
      if (value != null && value !== "") {
        searchParams.append(key, value);
      }
    }
  }
  return searchParams;
}

export function useZodSearchParams<Z extends z.ZodSchema>(
  schema: Z,
  defaultValue: z.input<Z>,
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const parsed: z.input<Z> | undefined = useMemo(
    () => (parseSearchParams as any)(schema, searchParams),
    [searchParams, schema],
  );
  const query = useMemo(
    () => parsed ?? defaultValue,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [parsed],
  );

  // const push = (newQuery: z.input<Z>) => {
  //   router.push(pathname + "?" + toURLSearchParams(newQuery).toString());
  // };
  // const replace = (newQuery: z.input<Z>) => {
  //   router.replace(pathname + "?" + toURLSearchParams(newQuery).toString());
  // };

  // TODO 0210
  const push = (newQuery: z.input<Z>) => {
    const currentParams = new URLSearchParams(searchParams.toString());

    // 기존 query 유지하면서 새로운 query 추가
    Object.entries(newQuery).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item != null && item !== "") {
            currentParams.append(key, item);
          }
        });
      } else {
        if (value != null && value !== "") {
          currentParams.set(key, String(value));
        }
      }
    });

    router.push(`${pathname}?${currentParams.toString()}`);
  };

  const replace = (newQuery: z.input<Z>) => {
    const currentParams = new URLSearchParams(searchParams.toString());

    Object.entries(newQuery).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          currentParams.delete(key); // 빈 배열이면 해당 파라미터 삭제
        } else {
          currentParams.delete(key);
          value.forEach((item) => {
            if (item != null && item !== "") {
              currentParams.append(key, item);
            }
          });
        }
      } else {
        if (value == null || value === "") {
          currentParams.delete(key); // null 또는 빈 문자열도 삭제
        } else {
          currentParams.set(key, String(value));
        }
      }
    });

    router.replace(`${pathname}?${currentParams.toString()}`);
  };

  // 파싱 실패시 경고 메시지를 띄우고 기본값으로 초기화한다.
  // zod에 성공한 필드만 리턴하는 기능은 없기 때문에, 실패한 경우에는 전체 기본값으로 초기화한다.
  useEffect(() => {
    if (parsed == null) {
      toast.error("잘못된 요청입니다.");
      router.replace(
        pathname + "?" + toURLSearchParams(defaultValue).toString(),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed, pathname, router]);

  return [query, push, replace] as const;
}
