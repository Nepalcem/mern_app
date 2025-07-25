import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import toast from "react-hot-toast";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/notes");
      setNotes(res.data.data);
      setIsRateLimited(false);
    } catch (error) {
      console.log("Error fetching notes", error);
      if (error.response.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}
    </div>
  );
};

export default HomePage;
