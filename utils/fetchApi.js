import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '5475765878mshc519ca94047ae04p160736jsn1ce9ee16b6e2',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}