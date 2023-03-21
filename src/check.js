var right = 0;
var notAttempted = 0;
for (var i = 0; i < 130; i++) {
  if (
    document
      .getElementsByClassName("question-pnl")
      [i].getElementsByClassName("bold")[5].textContent === " -- "
  ) {
    notAttempted++;
  }
  if (
    document
      .getElementsByClassName("question-pnl")
      [i].getElementsByClassName("rightAns")[0].textContent[0] ===
    document
      .getElementsByClassName("question-pnl")
      [i].getElementsByClassName("bold")[5].textContent
  ) {
    right++;
  }
}
wrong = 130 - notAttempted - right;
marks = right * 3 - wrong * 1;
console.log(
  "Attempted : " +
    (130 - notAttempted) +
    "\nRight Answers : " +
    right +
    "\nWrong Answers : " +
    wrong +
    "\nMarks : " +
    marks
);
