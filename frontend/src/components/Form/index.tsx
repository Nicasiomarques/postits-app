import style from './Form.module.css'

export const Form: React.FC = ({ children }) => (
  <form className={style.form}>
    {children}
  </form>
)
