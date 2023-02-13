function designerPdfViewer(h, word) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let area = 0;

  // Necessary for options 1 and 2
  //   let lettersHeights = [];

  // Option 1

  //   for (let i = 0; i < word.length; i++) {
  //     let letterIndex = alphabet.indexOf(word[i]);
  //     lettersHeights.push(h[letterIndex]);
  //   }

  // Option 2

  //   word.split("").forEach((letter) => {
  //     const letterIndex = alphabet.indexOf(letter);
  //     lettersHeights.push(h[letterIndex]);
  //   });

  // Option 3

  const lettersHeights = Array.from(
    word,
    (letter) => h[alphabet.indexOf(letter)]
  );

  area = Math.max(...lettersHeights) * word.length;

  return area;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ],
    "zaba"
  )
);
