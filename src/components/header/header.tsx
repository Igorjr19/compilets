import './header.css';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
