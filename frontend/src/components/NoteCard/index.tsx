import { HTMLProps } from 'react'
import { NoteProps } from '../../services/notesApi'
import style from './NoteCard.module.css'

type NoteCardProps = NoteProps & HTMLProps<HTMLDivElement>

export const NoteCard: React.FC<NoteCardProps> = ({ description, subject, ...rest }) =>
  <div className={style.note} {...rest}>
    <h3 className={style.note__subject}>{subject}</h3>
    <p>{description}</p>
  </div>