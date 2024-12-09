import { TokenTypes } from '../../compiler/lexic/enum/token-types.enum';
import { operators, tokenize } from '../../compiler/lexic/lexic';
import './highlighter.css';

export interface HighlighterProps {
  code: string;
}

function Highlighter(props: HighlighterProps) {
  const tokens = tokenize(props.code);

  return (
    <div>
      {tokens.map((token, index) => {
        let className = 'default';

        if (token.type === 'keyword') {
          className = 'keyword';
        }
        if (token.type === 'identifier') {
          className = 'identifier';
        }
        if (token.type === 'type') {
          className = 'type';
        }
        if (operators.includes(token.type as TokenTypes)) {
          className = 'operator';
        }
        if (token.type === 'integer' || token.type === 'boolean') {
          className = 'literal';
        }

        return (
          <span className={className} key={index}>
            {token.text}
          </span>
        );
      })}
    </div>
  );
}

export default Highlighter;
