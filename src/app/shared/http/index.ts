import axios from "axios";

const http = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND });

/*
 * Internal APIs (BFF)
 */

export const bff = async (
  url: string,
  method: "GET" | "POST",
  body?: any,
  isFormData: boolean = false
): Promise<{
  status: number;
  statusText: string;
  data: any;
}> => {
  try {
    const call = await fetch(`/api/${url}`, {
      method,
      body: isFormData ? body : JSON.stringify(body),
    });

    return {
      status: call?.status,
      statusText: call?.statusText,
      data: await call?.json(),
    };
  } catch (error) {
    return {
      status: 500,
      statusText: "BFF Response Error",
      data: error,
    };
  }
};

export default http;
