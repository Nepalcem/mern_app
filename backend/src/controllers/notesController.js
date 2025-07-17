function getAllNotes(req, res) {
  res.status(200).send("you fetched 1 note");
};

function createNote(req, res) {
  res.status(201).json({ message: "post created" });
};

function updateNote(req, res) {
  res.status(200).json({ message: "post updated" });
};

function deleteNote(req, res) {
  res.status(200).json({ message: "post deleted!" });
};

export { getAllNotes, createNote, updateNote, deleteNote };