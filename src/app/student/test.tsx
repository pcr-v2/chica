// type Student = {
//     id: number;
//     name: string;
//     gender: "male" | "female";
//     isBrushed: boolean;
//     height: string;
//     weight: string;
//   };

//   type Class = Student[];
//   type Grade = {
//     [key: number]: Class;
//   };

//   type School = {
//     [key: number]: Grade;
//   };

//   // ✅ 한글 이름 생성을 위한 음절 조합
//   const familyNames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
//   const middleNames = ["민", "서", "지", "현", "윤", "하", "도", "수", "아", "영"];
//   const lastNames = ["준", "희", "진", "우", "연", "빈", "율", "채", "훈", "예"];

//   // ✅ 랜덤 한글 이름 (3~4글자)
//   function getRandomKoreanName(): string {
//     const nameLength = Math.random() < 0.5 ? 2 : 3; // 성+이름(1 or 2)
//     const family = familyNames[Math.floor(Math.random() * familyNames.length)];
//     const first = middleNames[Math.floor(Math.random() * middleNames.length)];
//     const second =
//       lastNames[Math.floor(Math.random() * lastNames.length)];

//     return nameLength === 2
//       ? family + first
//       : family + first + second;
//   }

//   // ✅ 키, 몸무게 랜덤
//   function getRandomHeight(): string {
//     return (120 + Math.floor(Math.random() * 40)).toString(); // 120~159
//   }

//   function getRandomWeight(): string {
//     return `${25 + Math.floor(Math.random() * 20)}kg`; // 25kg~44kg
//   }

//   // ✅ 학생 생성
//   function generateStudent(id: number): Student {
//     return {
//       id,
//       name: getRandomKoreanName(),
//       gender: Math.random() < 0.5 ? "male" : "female",
//       isBrushed: Math.random() < 0.5,
//       height: getRandomHeight(),
//       weight: getRandomWeight()
//     };
//   }

//   // ✅ School 전체 생성 함수
//   function generateSchoolData(): School {
//     const school: School = {};
//     let studentId = 1;

//     for (let grade = 1; grade <= 6; grade++) {
//       const numClasses = Math.floor(Math.random() * 5) + 1; // 1~5반
//       school[grade] = {};

//       for (let classNum = 1; classNum <= numClasses; classNum++) {
//         const numStudents = Math.floor(Math.random() * 5) + 1; // 1~5명
//         const classData: Class = [];

//         for (let i = 0; i < numStudents; i++) {
//           classData.push(generateStudent(studentId++));
//         }

//         school[grade][classNum] = classData;
//       }
//     }

//     return school;
//   }
