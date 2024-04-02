import { create } from "zustand";

const useStore = create((set) => {
  // Check if email exists in local storage
  const storedEmail = localStorage.getItem("userEmail");

  return {
    userData: {
      email: "", // Initialize with stored email if available
    },
    setUserData: (email) => {
      set({ userData: { email } });
      // Store email in local storage
    },
  };
});

export default useStore;
