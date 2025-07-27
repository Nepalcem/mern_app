import toast from "react-hot-toast";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import NoteCard from "../components/NoteCard";
import api from "../utils/axiosUtils";


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/notes");
      setNotes(res.data.data);
      setIsRateLimited(false);
    } catch (error) {
      console.log("Error fetching notes", error);
      toast.error("Error fetching notes");
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
      <div className="max-w-7xl mx-auto pt-8 pl-8">
        {loading && (
          <div className="text-center text-primary py-10">Loading Notes...</div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
