import * as dotenv from 'dotenv'

import App from "./app";
import validateEnv from "./utils/valitateEnv";
import NoteController from "./features/note/note.controller";

dotenv.config()
validateEnv()

const app = new App([
  new NoteController()
])

app.run();