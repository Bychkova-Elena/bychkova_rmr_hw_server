export const validPassword = (value: string): string | undefined => {
  let reg = /^[\w\dА-я]+$/;
  if (value == "" || value == undefined || value == null) {
    return "Обязательное поле";
  }
  if (value.length < 4) {
    return "Пароль должен содержать минимум 4 символа";
  } else if (!reg.test(value)) {
    return "Пароль может содержать только буквы и цифры";
  }
};

export const validPhone = (value: string): string | undefined => {
  let reg =
    /^(\+7|\+976)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  if (value == "" || value == undefined || value == null) {
    return "Обязательное поле";
  }
  if (value.length !== 12 && value.length !== 14 && !reg.test(value)) {
    return "Поддерживаются только номера России/Монголии";
  }
};
