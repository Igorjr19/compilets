import { Keywords } from './enum/keywords.enum';
import { Procedures } from './enum/procedures.enum';
import { Types } from './enum/types.enum';

const keywords = Object.fromEntries(
  [...Object.values(Keywords)].map((keyword) => ['kw-' + keyword, keyword]),
);

const types = Object.fromEntries(
  [...Object.values(Types)].map((type) => ['type-' + type, type]),
);

const procedures = Object.fromEntries(
  [...Object.values(Procedures)].map((procedure) => [
    'procedure-' + procedure,
    procedure,
  ]),
);

export { keywords, procedures, types };
