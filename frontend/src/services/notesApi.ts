import { endpoints } from "../helpers/endpoints";
import { APIConnector } from "./Api";

export type NoteProps = {
  subject: string,
  description: string
}

export type NoteWithIDProps = NoteProps & {
  _id: string
}

export const createNote = async (note: NoteProps) =>
  await APIConnector.post<NoteWithIDProps>(endpoints.NOTES, note);

export const getAllNotes = async () =>
  await APIConnector.get<NoteWithIDProps[]>(endpoints.NOTES);

export const deleteNote = async (_id: string) =>
  await APIConnector.delete(`${endpoints.NOTES}/${_id}`);