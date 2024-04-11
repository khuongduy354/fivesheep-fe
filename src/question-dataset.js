export const multileChoices = [
  {
    conversations: [
      {
        from: "",
        to: "Cừu",
        content:
          "Hôm nay hãy cùng cừu lên mạng xã hội để xem có thông tin gì vui nhé!",
        decisionIdx: -1,
      },
      {
        from: "",
        to: "Cừu",
        content: "Ối có một người bạn nhắn tin cho Cừu nè!",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: " Hi Cừu, ảnh đại diện của cậu dễ thương quá!",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Chào bạn, chúng mình đã gặp nhau chưa nhỉ?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Chúng mình học cùng trường đó, có lẽ Cừu không nhớ tớ rồi.",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Ra là chúng mình cùng trường, rất vui được làm quen với bạn!",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Rất vui được làm quen với Cừu.",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Cừu ơi, tớ đang tham gia hoạt động này của cô giáo giới thiệu. Lớp tớ có nhiều bạn tham gia lắm, Cừu có muốn tham gia không?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Ôi hoạt động gì vậy nhỉ? Có hoạt động hay mà tớ không biết sao?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Khi tham gia Cừu còn có cơ hội được nhận thưởng nữa đó, phần thưởng sẽ được gửi về trường.",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Tớ gửi mã QR, Cừu quét rồi nghiên cứu tham gia nha!",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Hoạt động gì mà tớ không biết vậy nhỉ?",
        decisionIdx: 0,
      },

      { from: "annon", to: "sheep", content: "dasffdsf", decisionIdx: 0 },
    ],
    decisions: [
      {
        question: "Bạn nhỏ ơi, Cừu có nên quét mã tham gia không?",
        answers: [
          {
            idxLetter: "A",
            answer:
              " Nút hành động 1: Tất nhiên rồi, đây là bạn cùng trường mà!",
            state: 1, // 1 correct, -1 incorrect, 0 neutral
          },
          {
            idxLetter: "B",
            answer:
              "Nút hành động 2: Tớ nghĩ là Cừu cần thêm thông tin về cuộc thi này đó!",
            state: 1,
          },
          {
            idxLetter: "C",
            answer: "To fetch the wool currency from the server",
            state: 1,
          },
        ],
      },
    ],
  },
];
