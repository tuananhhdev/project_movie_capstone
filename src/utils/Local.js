export const setLocal = (data, key = "user_token") => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = (key = "user_token") => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
