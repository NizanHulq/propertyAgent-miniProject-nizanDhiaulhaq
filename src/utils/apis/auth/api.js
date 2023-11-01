import axiosWithConfig from "../axiosWithConfig";

export const register = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post("/users", newData);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axiosWithConfig.get("/users");

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};
