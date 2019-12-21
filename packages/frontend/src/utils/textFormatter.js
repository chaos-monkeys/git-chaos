import React from "react";

const upperCaseAndSplit = title =>
  title
    .toUpperCase()
    .split(" ")
    .map(word => word.trim())
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

export default upperCaseAndSplit;
