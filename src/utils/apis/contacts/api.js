import axiosWithConfig from "./axiosWithConfig";
export const storeMessage = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post("/messages", newData);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const fetchAllMessages = async () => {
  try {
    const response = await axiosWithConfig.get("/messages");

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const fetchMessage = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/messages/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};
