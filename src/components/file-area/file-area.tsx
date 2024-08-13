import React, { useState } from 'react';
import './file-area.css';

const FileArea: React.FC = () => {
  const [activeFileTab, setActiveFileTab] = useState('tab1');

  return (
    <>
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
    </>
  );
};

export default FileArea;
