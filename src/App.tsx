import { Token as MooToken } from 'moo';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Editor from 'react-simple-code-editor';
import './App.css';
import CodeGenerator from './compiler/code-generation/CodeGenerator';
import { tokenize } from './compiler/lexic/lexic';
import Parser from './compiler/syntatic/parser';
import { LexicReturn } from './compiler/syntatic/types';
import ErrorTab from './components/error-tab/error-tab';
import Highlighter from './components/highlighter/highlighter';
import LexemeTable from './components/lexeme-table/lexeme-table';

const App: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState('tab1');
  const [lineCount, setLineCount] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCompiled, setIsCompiled] = useState(false);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const [code, setCode] = useState<string>('');
  const [tokens, setToken] = useState<MooToken[]>([]);
  const [lexicResult, setLexicResult] = useState<LexicReturn>();
  const [syntaticResult, setSyntaticResult] = useState<string[]>([]);
  const [semanticResult, setSemanticResult] = useState<string[]>([]);
  const [generator, setGenerator] = useState<CodeGenerator>();
  const [parser, setParser] = useState<Parser>(new Parser(''));

  const handleCodeChange = (code: string) => {
    const newParser = new Parser(code);
    setParser(newParser);
    setCode(code);
    setLineCount(code.split('\n').length);
    setToken(tokenize(code));
    setLexicResult(
      newParser.formatTokens(
        newParser.lexicAnalisys(),
        code.trim().replace(/\r?\n|\r/g, '\n'),
      ),
    );
    setSyntaticResult(newParser.sintatic());
    setSemanticResult(newParser.semantic());
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileValidation = async (file: File) => {
    if (file && file.type === 'text/plain') {
      file.text().then((text) => {
        handleCodeChange(text);
      });
    } else {
      setCode('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const file = inputFileRef.current?.files?.[0];
    if (file) await handleFileValidation(file);
    handleCloseModal();
  };

  const handleNewFile = () => {
    if (code.trim() !== '') {
      setShowConfirmModal(true);
    } else {
      setCode('');
      setLineCount(1);
    }
  };

  const handleConfirmNewFile = () => {
    setCode('');
    setLineCount(1);
    setShowConfirmModal(false);
  };

  const handleEdit = () => {
    setIsCompiled(false);
  };

  const handleCompile = () => {
    const generator = new CodeGenerator();
    setGenerator(generator);
    generator.start(parser.tree);
    setIsCompiled(true);
  };

  useEffect(() => {}, [code]);

  return (
    <>
      <Modal
        centered
        show={showModal}
        onHide={handleCloseModal}
        className="modal-load-file"
      >
        <Modal.Header closeButton>
          <Modal.Title>Carregar arquivo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Selecione o arquivo</Form.Label>
              <Form.Control type="file" multiple={false} ref={inputFileRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button type="submit">Carregar</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        centered
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Todo o conteúdo atual será perdido. Deseja continuar?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancelar
          </Button>
          <Button onClick={handleConfirmNewFile}>Confirmar</Button>
        </Modal.Footer>
      </Modal>

      <div className="app">
        {/* Header */}
        <div className="header">
          <ul>
            <li onMouseLeave={() => setIsDropdownOpen(false)}>
              <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Arquivo
              </span>
              {isDropdownOpen && (
                <ul className="submenu">
                  <li onClick={handleNewFile}>Novo</li>
                  <li onClick={handleShowModal}>Abrir</li>
                  <li>Salvar</li>
                </ul>
              )}
            </li>
            <li onClick={handleEdit}>Editar</li>
            <li>Exibir</li>
            <li>Localizar</li>
            <li onClick={handleCompile}>Compilar</li>
            <li>Executar</li>
          </ul>
        </div>
        {/* Content */}
        <div className="content">
          <div className="file-area">
            {isCompiled && (
              <h1 className="code-generate-title">Código Gerado</h1>
            )}
            <div className="file-content">
              {isCompiled ? (
                <>
                  <div className="line-numbers">
                    {generator?.code &&
                      Array.from({
                        length: generator?.code
                          .split(/\r?\n/)
                          .filter((value) => value.trim()).length,
                      }).map((_, index) => (
                        <span key={index}>{index + 1}</span>
                      ))}
                  </div>
                  <Editor
                    contentEditable={false}
                    className="code-editor"
                    padding={10}
                    highlight={(code) => code}
                    value={generator?.code || ''}
                    onValueChange={() => null}
                  />
                </>
              ) : (
                <>
                  <div className="line-numbers">
                    {lineCount &&
                      Array.from({ length: lineCount }).map((_, index) => (
                        <span key={index}>{index + 1}</span>
                      ))}
                  </div>
                  <Editor
                    className="code-editor"
                    padding={10}
                    highlight={(code) => <Highlighter code={code} />}
                    onValueChange={(code) => handleCodeChange(code)}
                    value={code}
                  />
                </>
              )}
            </div>
          </div>
          {isCompiled ? (
            <></>
          ) : (
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
              {activeToolTab === 'tab1' && (
                <ErrorTab
                  tokens={tokens}
                  syntaticResult={syntaticResult}
                  semanticResult={semanticResult}
                />
              )}
              {activeToolTab === 'tab2' && <LexemeTable tokens={tokens} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
