import { TOKEN } from "../utils/constants";

export const fetchDataProducts = async (setItems) => {
  const res = await fetch('https://api.react-learning.ru/products', {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  let responce = {}
  if (res.ok) {
    responce = await res.json();
    setItems(responce)
  }
  else {
    let answer = ''
    if (res.status > 499) answer = 'Ошибка сервера'
    else if (res.status > 399) {
      if (res.status === 401) answer = 'Ошибка авторизации'
      else answer = 'Ошибка запроса пользователя'
    }
    responce = { message: answer }
  }
}