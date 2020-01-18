import React from "react";

// TODO: cleanup + rethink - it be gross
const upperCaseAndSplit = (title, splitCharacter = " ", className) =>
  title
    .toUpperCase()
    .split(splitCharacter)
    .map(line => line.trim())
    .map(line => <div className={className}>{line}</div>);

const upperCaseAndSplita = title =>
  title
    .toUpperCase()
    .split(" ")
    .map(line => line.trim())
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

export { upperCaseAndSplit, upperCaseAndSplita };
