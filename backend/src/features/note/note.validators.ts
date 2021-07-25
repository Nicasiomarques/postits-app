import * as joi from 'joi'
import Note from './note.type'

export const NoteSchemaValidator: joi.Schema<Note> =
  joi.object({
    subject:
      joi.string()
        .trim()
        .required(),
    description:
      joi.string()
        .trim()
        .required(),
  })