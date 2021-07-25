import { ReactNode } from 'react';

type AppProps = {
  LeftContent: ReactNode;
  RightContent: ReactNode;
  Separator: ReactNode
}

const App: React.FC<AppProps> = ({ LeftContent, RightContent, Separator }) => {
  return (
    <main>
      <div className="main__left">{LeftContent}</div>
      {Separator}
      <div className="main__right">{RightContent}</div>
    </main >
  );
}

export default App;