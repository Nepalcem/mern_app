import Note from "../models/Note.js";

async function getAllNotes(req, res) {
  try {
    const notesData = await Note.find();
    res.status(200).json({
      message: "You fetched notes successfully",
      data: notesData,
    });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Error fetching the database" });
  }
}

async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    if (!title || !content) {
      res.status(500).json({ message: "missing fields" });
      return;
    }
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json({ message: "post created", data: savedNote });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Error fetching the database" });
  }
}

async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title && !content) {
      return res.status(500).json({ message: "missing fields" });
    }
    const id = req.params.id;

    const serverResponse = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!serverResponse) {
      return res.status(404).json({ message: "ID is not valid" });
    }

    res.status(200).json({ message: "post updated", data: serverResponse });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Error fetching the database" });
  }
}

async function deleteNote(req, res) {
  try {
    const id = req.params.id;
    const onDeleteRespone = await Note.findByIdAndDelete(id);
     if (!onDeleteRespone) {
       return res
         .status(404)
         .json({
           message: "ID is not valid or post with such ID doesn't exist",
         });
     }
    res.status(200).json({ message: "post deleted", data: onDeleteRespone });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).json({ message: "Error fetching the database" });
  }
}

export { getAllNotes, createNote, updateNote, deleteNote };
