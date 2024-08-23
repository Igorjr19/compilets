import { Token } from 'moo';
import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import './App.css';
import ErrorTab from './components/error-tab/error-tab';
import LexemeTable from './components/lexeme-table/lexeme-table';
import { tokenize } from './lexic/lexic';

const App: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState('tab1');
  const [tokens, setToken] = useState<Token[]>([]);
  const [code, setCode] = useState<string>('');
  const [lineCount, setLineCount] = useState<number>(1);

  const handleCodeChange = (code: string) => {
    setCode(code);
    setToken(tokenize(code));
    setLineCount(code.split('\n').length);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <ul>
          <li>Arquivo</li>
          <li>Editar</li>
          <li>Exibir</li>
          <li>Localizar</li>
          <li>Compilar</li>
          <li>Executar</li>
        </ul>
      </div>
      {/* Content */}
      <div className="content">
        <div className="file-area">
          <div className="file-content">
            <div className="line-numbers">
              {lineCount &&
                Array.from({ length: lineCount }).map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
            </div>
            <Editor
              className="code-editor"
              padding={10}
              highlight={(code) => code}
              onValueChange={(code) => handleCodeChange(code)}
              value={code}
            />
          </div>
        </div>
        <div className="tools-area">
          <ul className="nav-tools">
            <li
              className={activeToolTab === 'tab1' ? 'active' : ''}
              onClick={() => setActiveToolTab('tab1')}
            >
              Problemas
            </li>
            <li
              className={activeToolTab === 'tab2' ? 'active' : ''}
              onClick={() => setActiveToolTab('tab2')}
            >
              Tabela de Lexemas
            </li>
            <li
              className={activeToolTab === 'tab3' ? 'active' : ''}
              onClick={() => setActiveToolTab('tab3')}
            >
              Logs de Compilação
            </li>
          </ul>
          {activeToolTab === 'tab1' && <ErrorTab tokens={tokens} />}
          {activeToolTab === 'tab2' && <LexemeTable tokens={tokens} />}
        </div>
      </div>
    </div>
  );
};

export default App;
