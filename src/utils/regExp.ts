export const formatPhoneNumber = (value: string) => {
  const onlyNums = value.replace(/\D/g, "");

  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7)
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidLoginId = (id: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(id);
};

export const isValidPassword = (pw: string): boolean => {
  const hasNumber = /[0-9]/.test(pw);
  const hasSpecial = /[^a-zA-Z0-9]/.test(pw);
  const isCorrectLength = pw.length >= 8 && pw.length <= 12;
  return hasNumber && hasSpecial && isCorrectLength;
};

export const isValidTeacherName = (name: string): boolean => {
  return /^[a-zA-Z0-9가-힣]{2,10}$/.test(name);
};
