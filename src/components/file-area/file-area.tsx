import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import './file-area.css';

const FileArea: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [lineCount, setLineCount] = useState<number>(1);

  const handleCodeChange = (code: string) => {
    setCode(code);
    setLexemeTable(tokenize(code));
    setLineCount(code.split('\n').length);
  };

  return (
    <>
      <div className="file-area">
        <div className="file-content">
          <div className="line-numbers">
            {lineCount &&
              [...Array.from({ length: lineCount })].map((_, index) => (
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
    </>
  );
};

export default FileArea;
