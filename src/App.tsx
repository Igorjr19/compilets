import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeFileTab, setActiveFileTab] = useState('tab1');
  const [activeToolTab, setActiveToolTab] = useState('tab1');

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
          <ul className="nav">
            <li
              className={activeFileTab === 'tab1' ? 'active' : ''}
              onClick={() => setActiveFileTab('tab1')}
            >
              Tab 1
            </li>
            <li
              className={activeFileTab === 'tab2' ? 'active' : ''}
              onClick={() => setActiveFileTab('tab2')}
            >
              Tab 2
            </li>
          </ul>
          <div className="file-content"></div>
        </div>
        <div className="tools-area">
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
        </div>
      </div>
    </div>
  );
};

export default App;
