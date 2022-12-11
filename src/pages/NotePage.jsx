import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

function NotePage() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchNotes() {
    setIsLoading(true);
    const response = await fetch("http://localhost:4000/api/v1/notes");
    const notes = await response.json();
    return notes;
  }

  useEffect(() => {
    fetchNotes().then((data) => {
      if (data.status) {
        setNotes(data.notes);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> :  notes.map((note) => {
        console.log(note);
        return (
          <div key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NotePage;
