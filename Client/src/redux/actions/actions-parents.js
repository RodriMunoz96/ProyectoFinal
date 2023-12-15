import axios from "axios";

const URL = "http://localhost:3001/parents";

export const createParent = (data) => {
  return async () => {
    try {
      const response = await axios.post(URL, data);
      return response
    } catch (error) {
      return error.message;
    }
  };
};
