// src/components/Sidebar.tsx
import React, { useState } from 'react';
import './sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({
    files: false,
    edit: false,
    find: false,
    compile: false,
    execute: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <button
        className={`toggle-button ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        {isOpen ? '◀' : '▶'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <div onClick={() => toggleSubmenu('files')}>
              {openSubmenus.files ? '▼' : '▶'} Arquivo
            </div>
            {openSubmenus.files && (
              <ul className="submenu">
                <li>
                  <a href="#new">Novo</a>
                </li>
                <li>
                  <a href="#open">Abrir</a>
                </li>
                <li>
                  <a href="#save">Salvar</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleSubmenu('edit')}>
              {openSubmenus.edit ? '▼' : '▶'} Editar
            </div>
            {openSubmenus.edit && (
              <ul className="submenu">
                <li>
                  <a href="#undo">Desfazer</a>
                </li>
                <li>
                  <a href="#redo">Refazer</a>
                </li>
                <li>
                  <a href="#cut">Cortar</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleSubmenu('find')}>
              {openSubmenus.find ? '▼' : '▶'} Localizar
            </div>
            {openSubmenus.find && (
              <ul className="submenu">
                <li>
                  <a href="#find-text">Localizar Texto</a>
                </li>
                <li>
                  <a href="#replace">Substituir</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleSubmenu('compile')}>
              {openSubmenus.compile ? '▼' : '▶'} Compilar
            </div>
            {openSubmenus.compile && (
              <ul className="submenu">
                <li>
                  <a href="#compile-code">Compilar Código</a>
                </li>
                <li>
                  <a href="#build">Construir</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleSubmenu('execute')}>
              {openSubmenus.execute ? '▼' : '▶'} Executar
            </div>
            {openSubmenus.execute && (
              <ul className="submenu">
                <li>
                  <a href="#run">Executar</a>
                </li>
                <li>
                  <a href="#debug">Depurar</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
