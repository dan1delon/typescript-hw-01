import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1");
