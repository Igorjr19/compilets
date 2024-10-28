import { Token } from 'moo';
import './error-tab.css';

interface ErrorTabProps {
  tokens: Token[];
  parserResult: unknown[];
}

function ErrorTab(props: ErrorTabProps) {
  const tokenErrors = props.tokens.filter((token) => token.type === 'error');
  const parserErrors =
    props.parserResult.filter((result) => result instanceof Error) || [];
  const errors = [...tokenErrors, ...parserErrors];

  return (
    <div className="error-tab">
      <div>
        <ul>
          {errors.map((error, index) =>
            error instanceof Error ? (
              <li key={index}>{error.message}</li>
            ) : (
              <li key={index}>
                {`${error.value} - not recognized token at ln ${error.line}, col ${error.col}`}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default ErrorTab;
