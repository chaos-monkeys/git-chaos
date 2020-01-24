import React from 'react';

const uuidv1 = require('uuid/v1');


// TODO: cleanup + rethink - it be gross
const upperCaseAndBreak = (title: string) => title
  .toUpperCase()
  .trim()
  .split(' ')
  .reduce((words: JSX.Element[], word: string, index: number, original) => {
    const isLastWord = original.length - 1 === index;
    // add a <br> if it's not the last word
    if (isLastWord) {
      words.push(<React.Fragment key={uuidv1()}>{word}</React.Fragment>);
    } else {
      words.push(
        <React.Fragment key={uuidv1()}>
          {word}
          <br />
        </React.Fragment>,
      );
    }

    return words;
  }, []);

export default upperCaseAndBreak;
