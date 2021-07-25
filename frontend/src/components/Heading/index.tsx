import style from './Heading.module.css'

export const Heading: React.FC = ({ children }) =>
  <div className="margin-y-medium">
    <h1 className={style.title}>{children}</h1>
  </div>