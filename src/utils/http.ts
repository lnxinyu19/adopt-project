import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx',
});
