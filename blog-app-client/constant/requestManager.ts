import { IPostComment, LoginInputType, RegisterInputType } from "@/types";
import axios from "axios";
import { BASE_URL } from ".";

export const createComment = async (data: IPostComment) => {
  const { data: response } = await axios.post(`${BASE_URL}/comment`, data);
  return response;
};

export const handleLogin = async (formdata: LoginInputType) => {
  const { data } = await axios.post(`${BASE_URL}/login`, formdata);
  return data;
};
export const handleRegister = async (formdata: RegisterInputType) => {
  const { data } = await axios.post(`${BASE_URL}/register`, formdata);
  return data;
};
