import { HTMLProps } from "react"

import style from './Fields.module.css'

export const Field: React.FC<HTMLProps<HTMLInputElement>> = ({ ...rest }) =>
  <input
    className={style.form__field}
    type="text"
    autoComplete="off"
    {...rest}
  />

export const TextArea: React.FC<HTMLProps<HTMLTextAreaElement>> = ({ ...rest }) =>
  <textarea
    className={[style.form__field, style.form__textarea].join(' ')}
    name="description"
    autoComplete="off"
    {...rest}
  />