import axios from 'axios';

const API_KEY = '31254208-ff4dd95c44a4a79ef6d4abce7';
let Api = `https://pixabay.com/api/`;

export const fetchImg = async (query, page = 1) => {
  const response = await axios.get(
    `${Api}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

// fetch("URL") // делаешь запрос. перед запросом запустают лоадер
//   .then(res => res.json()) // парсишь ответ
//   .then(res => {setState(res)}) // пользуешься ответом как угодно
//   .catch(error => alert(error.message)) // ловишь ошибку, ВСЕГДА
//   .finally(() => ) // произойдґт в любом случае. тут обічно стопают лоадер!

//   // then происходит при положительном ответе
//   // catch происходит если ответ пришел с ошибкой
//   // finally происходит в любом случае. неважно ошибка или нет) он не обязательний

//   //ЛИБО

// try {
//   setIsLoading(true)
//   const response = await fetch("URL")
//   const response2 = response.json()
//   setState(response2)

// } catch(error) {
//   alert(error.message)
// } finally {
//   setIsLoading(false)
// }
