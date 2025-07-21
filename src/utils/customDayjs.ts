import customDayjs from "dayjs";
import "dayjs/locale/ko";
import localeData from "dayjs/plugin/localeData";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

// ✅ locale 임포트

customDayjs.extend(utc);
customDayjs.extend(timezone);
customDayjs.extend(localeData);
customDayjs.extend(utc);
customDayjs.extend(timezone);

customDayjs.tz.setDefault("Asia/Seoul");

customDayjs.locale("ko"); // ✅ locale 설정

export default customDayjs;
