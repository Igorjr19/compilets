import { Token } from 'moo';
import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import './App.css';
import DefaultTable from './components/default-table/default-table';
import { tokenize } from './lexic/lexic';

const App: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState('tab1');
  const [lexemeTable, setLexemeTable] = useState<Token[]>([]);
  const [code, setCode] = useState<string>('');
  const [lineCount, setLineCount] = useState<number>(1);

  const handleCodeChange = (code: string) => {
    setCode(code);
    setLexemeTable(tokenize(code));
    setLineCount(code.split('\n').length);
  };

  const handleOpenFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setCode(content);
          setLexemeTable(tokenize(content));
          setLineCount(content.split('\n').length);
        }
      };
      fileReader.readAsText(file);
    }
  };

  const handleSaveFile = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <ul>
          <li>
            Arquivo
            <ul>
              <li>Novo</li>
              <li>Abrir</li>
              <li>Salvar</li>
              <li>Salvar Como</li>
              <li>Fechar</li>
            </ul>
          </li>

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
          <button className="save-btn" onClick={handleSaveFile}>
            Salvar
          </button>
          <input
            className="open-file"
            type="file"
            accept=".txt"
            onChange={handleOpenFile}
          />
          <ul className="nav-tools">
            <li
              className={activeToolTab === 'tab1' ? 'active' : ''}
              onClick={() => setActiveToolTab('tab1')}
            >
              Logs de Compilação
            </li>
            <li
              className={activeToolTab === 'tab2' ? 'active' : ''}
              onClick={() => setActiveToolTab('tab2')}
            >
              Tabela de Lexemas
            </li>
          </ul>
          {activeToolTab === 'tab2' && (
            <div className="lexeme-table">
              <DefaultTable
                labels={['Lexema', 'Tipo', 'Linha', 'Coluna']}
                columns={['value', 'type', 'line', 'col']}
                data={lexemeTable}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
