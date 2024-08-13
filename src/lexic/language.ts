const keywords = Object.fromEntries(
  ['if', 'else', 'while', 'for', 'return', 'break', 'continue', 'function'].map(
    (keyword) => ['kw-' + keyword, keyword],
  ),
);

const types = Object.fromEntries(
  ['int', 'double', 'string', 'boolean'].map((type) => ['type-' + type, type]),
);

export { keywords, types };
