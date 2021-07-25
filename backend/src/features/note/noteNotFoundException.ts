import HttpException from "../../utils/httpException";

export default class NoteNotFoundException extends HttpException {
  constructor(id: string) {
    super(404, `note not found with id ${id}`)
  }
}