import voca from 'voca';
// https://vocajs.com/
// npm install voca

const s1 = 'This is expression';

console.log(`01 ------> ${voca.camelCase(s1)}`);
console.log(`02 ------> ${voca.capitalize(s1)}`);
console.log(`03 ------> ${voca.decapitalize(s1)}`);
console.log(`04 ------> ${voca.kebabCase(s1)}`);
console.log(`05 ------> ${voca.lowerCase(s1)}`);
console.log(`06 ------> ${voca.snakeCase(s1)}`);
console.log(`07 ------> ${voca.swapCase(s1)}`);
console.log(`08 ------> ${voca.titleCase(s1)}`);
console.log(`09 ------> ${voca.upperCase(s1)}`);

console.log(`10 ------> ${voca.countSubstrings(s1, 'is')}`);
console.log(`11 ------> ${voca.countWhere(s1, (c, s, i) => voca.isBlank(c))}`);
console.log(`12 ------> ${voca.countWords(s1)}`);

console.log(`13 ------> ${voca.reverse(s1)}`);
console.log(`14 ------> ${voca.latinise('как прекрасен этот мир')}`);
console.log(`15 ------> ${voca.insert(s1, '...', 5)}`);
console.log(`16 ------> ${voca.escapeHtml('<p>wonderful world</p>')}`);
console.log(`17 ------> ${voca.words(s1).join('|')}`);

