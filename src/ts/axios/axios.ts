 
import axios, { Method } from "axios";
export const axiosparam01baseUrl: string = 'http://localhost:3001'

export const getData = async (apiName: string): Promise<any> => {
  try {
    const response = await axios.get(`${axiosparam01baseUrl}${apiName}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

