import { NextFunction, Request, Response, Router } from 'express'

import Note from './note.type'
import NoteModel from './note.model'
import Controller from '../../utils/controller'
import { NoteSchemaValidator } from './note.validators'
import { validatorMiddleware } from '../../middlewares/validator.middleware'
import NoteNotFoundException from './noteNotFoundException'

export default class noteController implements Controller {
  public path = '/notes'
  public router = Router()
  private note = NoteModel

  constructor() {
    this.initializeRoutes()
  }

  private createNote = async (request: Request, response: Response) => {
    const noteData: Note = request.body
    const noteCreated = new NoteModel(noteData)
    await noteCreated.save()
    response.json(noteCreated)
  }

  private getAllNotes = async (_: Request, response: Response) => {
    const notes: Note[] = await this.note.find()
    response.json(notes)
  }

  private deleteNote = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.params
    const isDeleted = await this.note.findByIdAndDelete(id)
    if (!isDeleted) {
      return next(new NoteNotFoundException(id))
    }
    response.status(204).json()
  }

  public initializeRoutes() {
    this.router.route(this.path)
      .get(this.getAllNotes)
      .post(validatorMiddleware(NoteSchemaValidator), this.createNote)

    this.router.delete(`${this.path}/:id`, this.deleteNote)
  }
}