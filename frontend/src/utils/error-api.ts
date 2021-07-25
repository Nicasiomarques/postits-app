export const errorChecker = (error: Error) => {
  const errors: { [key: string]: string } = {
    "Network Error": 'Não conseguimos estabelecer a ligação com o servidor verifique a conexão',
  }
  return errors[error.message] || 'Estamos com problemas em realizar a operação contate-nos por favor'
}