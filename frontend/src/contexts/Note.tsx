import React from "react";
import { toast } from "react-toastify";
import {
  createNote,
  NoteProps,
  getAllNotes,
  deleteNote,
  NoteWithIDProps,
} from "../services/notesApi";
import { errorChecker } from "../utils/error-api";


type NoteContextData = {
  notes: NoteWithIDProps[],
  removeNote: (id: string) => void;
  addNote: (note: NoteProps) => void;
}

const NoteContext = React.createContext({} as NoteContextData)

export const NoteContextProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = React.useState<NoteWithIDProps[]>([])

  React.useEffect(() => {
    getAllNotes()
      .then(response => response.data)
      .then(setNotes)
      .catch(error => {
        toast(errorChecker(error), { type: 'error' })
      })
  }, [])

  const addNote = async (note: NoteProps) => {
    if (!note.description.trim() || !note.description.trim()) {
      toast("O Assunto e Texto são obrigatorios.", { type: 'error' })
      return
    }

    try {
      const response = await createNote(note)
      setNotes(prevNotes => [...prevNotes, response.data])
      toast("Um nova nota foi adicionada sua lista", {
        type: 'success'
      })
    } catch (error) {
      toast(errorChecker(error), { type: 'error' })
    }
  }

  const removeNote = async (id: string) => {
    const canRemove = window.confirm('Tem a certeza que quer apagar esta nota?')

    if (canRemove) {
      try {
        await deleteNote(id)
        setNotes(prevNotes => [...prevNotes.filter(note => note._id !== id)])
        toast("Nota Enviada para o lixo", {
          type: 'success'
        })
      } catch (error) {
        toast(errorChecker(error), { type: 'error' })
      }
    }
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}

export const useNote = () => React.useContext(NoteContext)