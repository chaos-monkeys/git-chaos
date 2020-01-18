import React from 'react';

// TODO: cleanup + rethink - it be gross
const upperCaseAndSplitIntoDivs = (title: string, splitCharacter: string = '', className?: string) => title
  .toUpperCase()
  .trim()
  .split(splitCharacter)
  .map((line) => <div className={className}>{line}</div>);

const upperCaseAndBreak = (title: string) => title
  .toUpperCase()
  .trim()
  .split(' ')
  .reduce((words, word, index, original) => {
    const isLastWord = original.length - 1 === index;
    // add a <br> if it's not the last word
    if (isLastWord) {
      words.push(<>{word}</>);
    } else {
      words.push(
        <>
          {word}
          <br />
        </>,
      );
    }

    return words;
  }, []);

export { upperCaseAndSplitIntoDivs, upperCaseAndBreak };
