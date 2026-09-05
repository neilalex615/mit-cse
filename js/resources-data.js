// js/resources-data.js
//
// TO ADD A PDF: paste the normal Google Drive share link into `driveLink`.
//   Get it via: right-click file in Drive -> Share -> "Anyone with the link" -> Copy link.
//   The code below extracts the file ID and builds the preview + download URLs itself.
//
// TO ADD A VIDEO (Courses tab, or Skills tab): add { title, url } with the YouTube link.

const RESOURCES = {
  calculus: { name: "Calculus",                  study: [{ title: "Module 1", driveLink: "https://drive.google.com/file/d/1wA4lssfDhFF7QtradiMzJSjiUiRx-_OX/view?usp=sharing" }], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1lYmsiTw1wvxb5IBltRmvpxSSUYhN9o_o/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1SbJwqd4yRL8VaLt0NwhoHhvX5dioltMp/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1xZjghLNQKPxW5HZXqfwblzy-uXJ-6tzn/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1FC4OpAUCXmGF_oczO-F-6vVuzxJoLGQt/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1G5MjVsH0U45OarW3S_gA5xeCLg33ueCK/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/180-ssRjtbjjBdBuq9UksdQb-8q7JTgPr/view?usp=sharing" },

  ] },
  english:  { name: "Foundation English",        study: [], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1zPuvY0sqN4sWt_bM65MJi5jVFdEpBtD6/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1yd6wq-KNDK2bt0zMMXr7tgt81TflC8VK/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1RZuhnXQKz4xUBNfWHFKyCpo2RZKENdlz/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1A5huRLiElmqfKcm1SCx0Q_6mcZ9hwYcO/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1bwMwTCydGxqMxmLlkxreAp26LJFCumgt/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1dxiU_DPnpoGzpZGRbI7YA3Do2W-fRx53/view?usp=sharing" },


  ] },
  physics:  { name: "Engineering Physics",       study: [
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
      { title: "How to Install C Compiler", url: "https://www.youtube.com/watch?v=ADrTxCB0jCs" }
    ],
  },

  ct:    { name: "Computational Thinking", study: [
    { title: "Unit 1", driveLink: "https://drive.google.com/file/d/1OHdfIGwr74xamV61ktR2vRPu_ZMpUoO2/view?usp=sharing" },
    { title: "Unit 2", driveLink: "https://drive.google.com/file/d/1nAtSVpkqgpB3IuuhLpr1KDkhMHHLZJu_/view?usp=sharing" },

  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1Me3smCHRgIx93puzU0WpdLCFyO-bUM0e/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1cfdXRF1wCwG_fRVJC8PqQkfCb-bELusr/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/1AIXEK3bkRi9l8L7oc9Uj1R9RmkKNgWQy/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1uSYwW1TqumgRTfyoE-EFQg6GlWS9EFit/view?usp=sharing" },
  ] },
  tamil: { name: "Heritage of Tamils",     study: [
    { title: "Unit 1 - Tamil Notes", driveLink: "https://drive.google.com/file/d/1JwDvUMEIAyUZeG6TFdK42avWLxLq3XlR/view?usp=sharing" },
  ], pyqs: [
    { title: "CA 1 - 2023", driveLink: "https://drive.google.com/file/d/1kCNbcAd9pwYK6GLRDou9YFklUVVWL7et/view?usp=sharing" },
    { title: "CA 2 - 2023", driveLink: "https://drive.google.com/file/d/1F0jiqEmIkvJI8M98DbTHKBaNiDa8qOk_/view?usp=sharing" },
    { title: "CA 1 - 2024", driveLink: "https://drive.google.com/file/d/19okYO6pE3KxHjFR9VplPMEHuWuQhcc2o/view?usp=sharing" },
    { title: "CA 2 - 2024", driveLink: "https://drive.google.com/file/d/1oF-ZEJ_6NR-hK4dEvK_GTHHBuMpj8USs/view?usp=sharing" },
    { title: "End Sem - 2023", driveLink: "https://drive.google.com/file/d/1BCqAp8NbDDhrnmyjaCxsg7VYXKHm5w2b/view?usp=sharing" },
    { title: "End Sem - 2024", driveLink: "https://drive.google.com/file/d/1NutBW-tWfU8TlzLfifvTkqI9uyAUoBTX/view?usp=sharing" },
  ] },


};