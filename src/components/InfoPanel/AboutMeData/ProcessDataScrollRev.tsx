// THIS FUNC TAKES A PARAGRAPH AND SPLITS IT INTO LINES SO IT CAN BE ANIMATED LINE AT A TIME
export default function ProcessDataScrollRev(AboutMeData: any) {
  let allDataSorted = [];

  for (let i = 0; i < AboutMeData.length; i++) {
    const splittingText = AboutMeData[i].text.split(" ");
    let paragraphOfSplitLines = [];
    for (let i = 0; i < splittingText.length; i += 6) {
      let arrOfLineOfWords: string[] = [];

      let wordsInALine =
        splittingText[i] +
        " " +
        splittingText[i + 1] +
        " " +
        splittingText[i + 2] +
        " " +
        splittingText[i + 3] +
        " " +
        splittingText[i + 4] +
        " " +
        splittingText[i + 5];

      let removeUndefinded = wordsInALine.replaceAll("undefined", "");

      arrOfLineOfWords.push(removeUndefinded.trim());

      paragraphOfSplitLines.push(arrOfLineOfWords);
    }
    allDataSorted.push(paragraphOfSplitLines);
  }
  return allDataSorted;
}
