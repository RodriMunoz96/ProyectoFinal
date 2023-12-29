import axios from "axios";

export const authenticateUser = () => async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("No token found in sessionStorage");
    return { success: false };
  }

  try {
    const response = await axios.get("http://localhost:3000/authenticate", {
      headers: { Authorization: token },
    });
    const sessionUserId = response.data.userId.userId;

    console.log("Token verification successful:", sessionUserId);
    sessionStorage.setItem("userId", sessionUserId);

    return { success: true };
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return { success: false };
  }
};
