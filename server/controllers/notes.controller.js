import Notes from "../model/Notes.js";

export const allNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const noteSchema = new Notes({ title, description });
    await noteSchema.save();
    res.status(201).send("created success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const oneNote = async(req, res) => {
  try {
    const { id } = req.params;
    const oneNoteId = await Notes.findById(id)
    res.status(200).json(oneNoteId)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateNote = async(req, res) => {
 try {
    const { id } = req.params;
    const updateNote = await Notes.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).json(updateNote)
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
};
export const deleteNote = async(req, res) => {
  try {
    const { id } = req.params;
    await Notes.findByIdAndDelete(id)
    res.status(204).send('Deleted')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
