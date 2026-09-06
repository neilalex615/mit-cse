// js/resources-data.js
//
// TO ADD A PDF: paste the normal Google Drive share link into `driveLink`.
//   Get it via: right-click file in Drive -> Share -> "Anyone with the link" -> Copy link.
//   The code below extracts the file ID and builds the preview + download URLs itself.
//
// TO ADD A VIDEO (Courses tab, or Skills tab): add { title, url } with the YouTube link.
// ---- Prompts for the "Problems" tab copy button ----
const PROBLEM_INTRO_PROMPT =
`I'm a beginner C student solving the problem "Check Prime Number" on GeeksforGeeks.
First, briefly explain:
1. GfG Page Anatomy: What Input/Output Format, Constraints, and Examples mean.
2. Compile & Run vs. Submit: The difference between testing sample cases vs. hidden test cases.
3. General Workflow: A simple step-by-step approach for solving any coding problem.
Then, for this problem, provide:
1. Simple explanation: What is it asking, in plain English?
2. Example: Walk through a sample input/output step-by-step.
3. Guiding questions: Ask a few questions to help me build the logic myself.
Strict Rules:
* NO code, algorithms, or direct steps to solve it.
* If I say I'm stuck, give me exactly ONE small conceptual hint.
* If your assumed input/output format differs from my GfG page, ask me to paste the constraints.
* Only review or write code if I explicitly paste my attempt and ask for feedback.`;

const PROBLEM_PROMPT_TEMPLATE =
`I'm a beginner C student solving the problem "[Problem Name]" on GeeksforGeeks.
Please act as my tutor and provide:
1. A simple explanation: What is this asking, in plain English?
2. An example: Provide a sample input/output and walk through it step-by-step.
3. Edge cases: What tricky scenarios (e.g., negative numbers, empty inputs) should I watch out for?
4. Guiding questions: Ask me a few questions to help me build the logic myself.
Strict Rules:
* NO code, NO algorithms, and NO direct steps to solve it.
* If I say I'm stuck, give me exactly ONE small conceptual hint.
* If your assumed input/output format differs from my GfG page, just ask me to paste the exact constraints.
* Only review or write code if I explicitly paste my attempt and ask for feedback.`;
const RESOURCES = {
  calculus: { name: "Calculus",                  study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/1HjueCTj9-V6mihqk7TzLBC3d3KzKj7Ed/view?usp=sharing" },
    { title: "Module 1", driveLink: "https://drive.google.com/file/d/1wA4lssfDhFF7QtradiMzJSjiUiRx-_OX/view?usp=sharing" }], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1lYmsiTw1wvxb5IBltRmvpxSSUYhN9o_o/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1SbJwqd4yRL8VaLt0NwhoHhvX5dioltMp/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1xZjghLNQKPxW5HZXqfwblzy-uXJ-6tzn/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1FC4OpAUCXmGF_oczO-F-6vVuzxJoLGQt/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1G5MjVsH0U45OarW3S_gA5xeCLg33ueCK/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/180-ssRjtbjjBdBuq9UksdQb-8q7JTgPr/view?usp=sharing" },

  ] },
  english:  { name: "Foundation English",        study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/1Dn2iMMHZJVn07syXEWLHLNgxnpBHdisl/view?usp=sharing" },
  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1zPuvY0sqN4sWt_bM65MJi5jVFdEpBtD6/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1yd6wq-KNDK2bt0zMMXr7tgt81TflC8VK/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1RZuhnXQKz4xUBNfWHFKyCpo2RZKENdlz/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1A5huRLiElmqfKcm1SCx0Q_6mcZ9hwYcO/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1bwMwTCydGxqMxmLlkxreAp26LJFCumgt/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1dxiU_DPnpoGzpZGRbI7YA3Do2W-fRx53/view?usp=sharing" },


  ] },
  physics:  { name: "Engineering Physics",       study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/1hOViSQmhkyqK0pKVO87fprLU38tcXAm6/view?usp=sharing" },
    { title: "Handwritten Notes", driveLink: "https://drive.google.com/file/d/1Yf308GLH2x6R2Cy8nq5LZS55stWojOqq/view?usp=sharing" },
  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1WTJFkQJ11IDb42wo4fjYNcimAf1SFagi/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1_84QN5_BPTXWHoG6a_-5dZYCuPMELLCN/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1DhWQ59Zu46TJAgz7E2n7E5lanaAX-6jK/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1Ddv020AugprFhtAyaS-cAvF_1cva8JAy/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1h8vf36AOvxoamMn1P-PXHs3_9jW5I6CQ/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1GhVKk_Z3jiXNioH56fq9Kd2UHxpZJXgM/view?usp=sharing" },
  ] },
  eee:      { name: "FEEE",  study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/1R2pGAaLpBpsEDG2VbaRGhBNZThSF6u1m/view?usp=sharing" },
    { title: "Unit 1", driveLink: "https://drive.google.com/file/d/1Yf308GLH2x6R2Cy8nq5LZS55stWojOqq/view?usp=sharing" },
  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1xgrPON3mdAMSTO3Tjff7B47-H-hgOg3e/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/13AyTXEhzSMMqeTy7FStxLiSfp70nTszF/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/13AyTXEhzSMMqeTy7FStxLiSfp70nTszF/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1d1yQp0FKpszNmtQp09SmCGjzbbc-WLY7/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1d1yQp0FKpszNmtQp09SmCGjzbbc-WLY7/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1ejlN9rbX61aY2lV9WNyAvnaqnCEDnbxg/view?usp=sharing" },
  ] },

  c: {
    name: "Programming in C",
    hasCourses: true,
    study: [
      // { title: "Unit 1 Notes", driveLink: "https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing" },
      { title: "Syllabus", driveLink: "https://drive.google.com/file/d/15jmeHORr0ZvROVfiiPomc-eIql-4GwIz/view?usp=sharing" },
      { title: "Unit 1", driveLink: "https://drive.google.com/file/d/1APjwZbcsgy-4PBL52Ux_yG10GXOTQQaA/view?usp=sharing" }
    ],
    pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1Ob2-x8Pdz3T_CeBBD7T19PEinu4LROuU/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1FTwZ-6PWg-NKAMWhEnEqdprdU2q6SmS5/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1ppyBZhc5lObDiFNxpSOheHUXvIcMzXLN/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/17jClVqWn6fMTdX_P_geDn2MK2jWgOzLL/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1WmUGVOZ9hCifXF2osGE_7sgjrcGcLSAF/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/18ZItVCJf5XPSOgoFvJBNz0U2VXJXRBxs/view?usp=sharing" },
    ],
    courses: [
      // { title: "Pointers Explained", url: "https://youtu.be/xxxxxxxx" },
      { title: "C Programming Full Course", url: "https://www.youtube.com/watch?v=xND0t1pr3KY", type:"video"},
      { title: "How to Install C Compiler", url: "https://www.youtube.com/watch?v=ADrTxCB0jCs", type:"video"},
      { title: "Coding C App (Android)", url: "https://play.google.com/store/apps/details?id=com.kvassyu.coding2.c&hl=en&pli=1", type: "tool" },
      { title: "Online C Compiler", url: "https://www.programiz.com/c-programming/online-compiler/", type: "tool" },
    ],
  },

  ct:    { name: "Computational Thinking", study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/12rR7ErOuoM67Gg1Ts9U7jdKWIcXIFisJ/view?usp=sharing" },
    { title: "Unit 1", driveLink: "https://drive.google.com/file/d/1OHdfIGwr74xamV61ktR2vRPu_ZMpUoO2/view?usp=sharing" },
    { title: "Unit 2", driveLink: "https://drive.google.com/file/d/1nAtSVpkqgpB3IuuhLpr1KDkhMHHLZJu_/view?usp=sharing" },

  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1Me3smCHRgIx93puzU0WpdLCFyO-bUM0e/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1cfdXRF1wCwG_fRVJC8PqQkfCb-bELusr/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1AIXEK3bkRi9l8L7oc9Uj1R9RmkKNgWQy/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1uSYwW1TqumgRTfyoE-EFQg6GlWS9EFit/view?usp=sharing" },
  ] },
  tamil: { name: "Heritage of Tamils",     study: [
    { title: "Syllabus", driveLink: "https://drive.google.com/file/d/1w4zgAqPAhT7oq3iSAtNUd7SJ3DZlSo27/view?usp=sharing" },
    { title: "Unit 1 - Tamil Notes", driveLink: "https://drive.google.com/file/d/1JwDvUMEIAyUZeG6TFdK42avWLxLq3XlR/view?usp=sharing" },
  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1kCNbcAd9pwYK6GLRDou9YFklUVVWL7et/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1F0jiqEmIkvJI8M98DbTHKBaNiDa8qOk_/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/19okYO6pE3KxHjFR9VplPMEHuWuQhcc2o/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1oF-ZEJ_6NR-hK4dEvK_GTHHBuMpj8USs/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1BCqAp8NbDDhrnmyjaCxsg7VYXKHm5w2b/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1NutBW-tWfU8TlzLfifvTkqI9uyAUoBTX/view?usp=sharing" },
  ] },

  skills: {
    name: "Skills",
    isSkills: true,
    problems: [
      { title: "Prime Number", url: "https://www.geeksforgeeks.org/problems/prime-number2314/1", difficulty: "easy" },
      { title: "Sum of Digits", url: "https://www.geeksforgeeks.org/problems/sum-of-digits1742/1", difficulty: "easy" },
      { title: "Factorial", url: "https://www.geeksforgeeks.org/problems/factorial5739/1", difficulty: "easy" },
      { title: "Nth Fibonacci Number", url: "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1", difficulty: "easy" },
      { title: "Largest Element in Array", url: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1", difficulty: "easy" },
      { title: "Reverse a String", url: "https://www.geeksforgeeks.org/problems/reverse-a-string/1", difficulty: "easy" },
      { title: "Palindrome String", url: "https://www.geeksforgeeks.org/problems/palindrome-string0817/1", difficulty: "easy" },
      { title: "Consonants and Vowels Check", url: "https://www.geeksforgeeks.org/problems/consonants-and-vowels-check-java/1", difficulty: "easy" },
      { title: "GCD of Two Numbers", url: "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1", difficulty: "easy" },
      { title: "Search an Element in an Array", url: "https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1", difficulty: "easy" },
      { title: "Palindrome Number", url: "https://www.geeksforgeeks.org/problems/palindrome0746/1", difficulty: "easy" },
      { title: "Print 1 To N Without Loop", url: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops3621/1", difficulty: "easy" },

      { title: "Binary Search", url: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1", difficulty: "med" },
      { title: "Second Largest Element in an Array", url: "https://www.geeksforgeeks.org/problems/second-largest3735/1", difficulty: "med" },
      { title: "Rotate Array by One", url: "https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1", difficulty: "med" },
      { title: "Anagram", url: "https://www.geeksforgeeks.org/problems/anagram-1587115620/1", difficulty: "med" },
      { title: "Reverse Words in a String", url: "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1", difficulty: "med" },
      { title: "Missing Number in Array", url: "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1", difficulty: "med" },
      { title: "Fibonacci Using Recursion", url: "https://www.geeksforgeeks.org/problems/fibonacci-using-recursion/1", difficulty: "med" },
      { title: "Power Set Using Recursion", url: "https://www.geeksforgeeks.org/problems/power-set-using-recursion/1", difficulty: "med" },
      { title: "Sort 0s, 1s and 2s", url: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1", difficulty: "med" },

      { title: "Kadane's Algorithm", url: "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1", difficulty: "hard" },
      { title: "Trapping Rain Water", url: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1", difficulty: "hard" },
    ],
    practice: [
      // { title: "Recursion Explained", url: "https://youtu.be/xxxxxxxx" },
      { title: "Git and Github", url: "https://www.youtube.com/watch?v=mAFoROnOfHs", type: "video"},
      { title: "SpeedCoder", url: "https://www.speedcoder.net/", type: "tool" },


    ],
  },

};