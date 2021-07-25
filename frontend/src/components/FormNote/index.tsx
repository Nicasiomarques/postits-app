import React, { FormEvent } from "react";
import { useNote } from "../../contexts/Note";
import { NoteProps } from "../../services/notesApi";
import { ButtonCustom } from "../ButtonCustom";
import { Field, TextArea } from "../Fields";
import { Form } from "../Form";

export const FormNote: React.FC<React.HTMLProps<FormData>> = ({ ...rest }) => {
  const { addNote } = useNote()
  const [note, setNote] = React.useState<NoteProps>({
    description: '', subject: ''
  })

  const handleNote = (event: any) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value })
  }

  const clearFields = () =>
    setNote({ subject: '', description: '' })

  const handleSubmit = (_: FormEvent) => {
    addNote(note)
    clearFields()
  }

  return (
    <Form {...rest}>
      <Field
        name="subject"
        placeholder="Assunto"
        onChange={handleNote}
        value={note?.subject}
        required
      />

      <TextArea
        name="description"
        placeholder="Texto"
        onChange={handleNote}
        value={note?.description}
        required
      />

      <div className="align-right">
        <ButtonCustom onClick={handleSubmit}>
          Criar nota
        </ButtonCustom>
      </div>
    </Form>
  )
}