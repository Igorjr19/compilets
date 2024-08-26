import { Token } from 'moo';
import './error-tab.css';

interface ErrorTabProps {
  tokens: Token[];
}

function ErrorTab(props: ErrorTabProps) {
  const errorTokens = props.tokens.filter((token) => token.type === 'error');

  return (
    <div className="error-tab">
      <div>
        <ul>
          {errorTokens.map((token, index) => (
            <li key={index}>
              {`${token.value} - not recognized token at ln ${token.line}, col ${token.col}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ErrorTab;
