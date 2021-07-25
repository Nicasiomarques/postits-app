import { useNote } from "../../contexts/Note";
import { NoteCard } from "../NoteCard";
import style from './NoteList.module.css'

export const NotesList: React.FC = () => {
  const { notes, removeNote } = useNote();
  return (
    <div className={style.notes__container}>
      {notes.map(note =>
        <NoteCard
          onClick={() => removeNote(note._id)}
          key={note._id}
          {...note}
        />
      )}
    </div>
  )
}