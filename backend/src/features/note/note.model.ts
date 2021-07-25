import { Schema, Document, model } from 'mongoose'
import Note from './note.type'

const noteSchema = new Schema({
  subject: String,
  description: String,
})

export default model<Note & Document>('Note', noteSchema)