import axios from "axios";

export const authenticateUser = () => async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("No token found in sessionStorage");
    return { success: false };
  }

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   "Content-Type": "application/json",
  // };
  try {
    console.log("Token before request:", token);
    const response = await axios.get("http://localhost:3000/authenticate", {
      headers: { Authorization: token },
    });

    console.log("Token verification successful:", response.data);

    return { success: true };
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return { success: false };
  }
};
