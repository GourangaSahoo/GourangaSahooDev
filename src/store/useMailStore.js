import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const useMailStore = create(() => {
  return {
    send: async (data) => {
      // Wrap axios call inside toast.promise
      await toast.promise(
        axios.post("https://email-b5dk.onrender.com/send", data),
        {
          loading: "Sending email...",
          success: "Email sent successfully!",
          error: "Failed to send email.",
        }
      );
    },
  };
});
