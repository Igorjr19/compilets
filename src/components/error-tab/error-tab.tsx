import { Token } from 'moo';
import './error-tab.css';

interface ErrorTabProps {
  tokens: Token[];
  syntaticResult: string[];
  semanticResult: string[];
}

function ErrorTab(props: ErrorTabProps) {
  const tokenErrors = props.tokens
    .filter((token) => token.type === 'error')
    .map(
      (token) =>
        `Erro na linha ${token.line}, coluna ${token.col}: Token não reconhecido '${token.text}'`,
    );
  const errors = [
    ...tokenErrors,
    ...props.syntaticResult,
    ...props.semanticResult,
  ];

  return (
    <div className="error-tab">
      <div>
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ErrorTab;
