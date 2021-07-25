import App from "../components/App"
import { FormNote } from "../components/FormNote"
import { Heading } from "../components/Heading"
import { NotesList } from "../components/NotesList"
import { Separator } from "../components/Separetor"

export const HomePage = () => {
  return (
    <App
      LeftContent={
        <>
          <Heading>Bloco de notas</Heading>
          <FormNote />
        </>
      }

      Separator={<Separator />}

      RightContent={
        <>
          <Heading>Suas notas</Heading>
          <NotesList />
        </>
      }
    />
  )
}