export const getAllNotes = (req, res) => {
    res.status(200).send("You got 5 notes");
}

export const createNote=(req, res) => {
    res.status(201).json({
      message: "Note created successfully!"
})}


export const updatedNote = (req, res) => {
    res.status(200).json({
      message: "Note updated successfully!"
})};

export const deleteNote = (req, res) => {
    res.status(200).json({
      message: "Note deleted successfully!"}
)};