import axiosWithConfig from "../axiosWithConfig";

export const storeProperty = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post("/properties", newData);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getAllProperties = async () => {
  try {
    const response = await axiosWithConfig.get("/properties");

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/properties/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const updateProperty = async (id, data) => {
  try {
    const newData = {
      ...data,
    };
    const response = await axiosWithConfig.put(`/properties/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteProperty = async (id) => {
  try {
    const response = await axiosWithConfig.delete(`/properties/${id}`);

    return response.data;
  } catch (error) {
    throw Error(error);
  }
};
