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

export const deletePost = async (id: string) => {
  const { data } = await axios.delete(`${BASE_URL}/blog/${id}`);
  return data;
};

export const fetchPostDetails = async (slug: string) => {
  const { data } = await axios.get(`${BASE_URL}/blog/${slug}`);
  return data;
};
export const fetchRelated = async () => {
  const { data } = await axios.get(`${BASE_URL}/blog`);
  return data;
};

export const createPost = async (data: FormData) => {
  const { data: response } = await axios.post(`${BASE_URL}/blog`, data);
  return response;
};
export const updatePost = async (fields: { formData: any; postId: string }) => {
  const { formData, postId } = fields;
  const { data: response } = await axios.put(
    `${BASE_URL}/blog/${postId}`,
    formData
  );
  return response;
};
