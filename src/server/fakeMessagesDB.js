import { r } from "server/fakeAccountsDB";

export const users = {
  1: {
    name: "Евгений",
    avatarUrl: "/avatars/1.jpg",
  },
  2: {
    name: "Мария",
    avatarUrl: "/avatars/2.jpg",
  },
};

export const messages = [
  {
    type: "text",
    userId: 1,
    date: r(),
    content: "привет как дела",
  },
  {
    type: "text",
    userId: 2,
    date: r(),
    content: "хорошо, а у тебя?",
  },

  {
    type: "text",
    userId: 1,
    date: r(),
    content:
      "До вечера должен оклематься \n" +
      "Недельку, думаю, лома поваляется \n" +
      "А так минимум месяц нельзя скакать, поднимать ниче и сидеть долго",
  },
  {
    type: "text",
    userId: 1,
    date: r(),
    content: "привет как дела",
  },
  {
    type: "text",
    userId: 2,
    date: r(),
    content: "хорошо, а у тебя?",
  },

  {
    type: "text",
    userId: 1,
    date: r(),
    content:
      "До вечера должен оклематься \n" +
      "Недельку, думаю, лома поваляется \n" +
      "А так минимум месяц нельзя скакать, поднимать ниче и сидеть долго",
  },
  {
    type: "text",
    userId: 1,
    date: r(),
    content: "привет как дела",
  },
  {
    type: "text",
    userId: 2,
    date: r(),
    content: "хорошо, а у тебя?",
  },
  {
    type: "text",
    userId: 1,
    date: r(),
    content:
      "До вечера должен оклематься \n" +
      "Недельку, думаю, лома поваляется \n" +
      "А так минимум месяц нельзя скакать, поднимать ниче и сидеть долго",
  },
  {
    type: "text",
    userId: 1,
    date: r(),
    content: "привет как дела",
  },
  {
    type: "text",
    userId: 2,
    date: r(),
    content: "хорошо, а у тебя?",
  },
  {
    type: "text",
    userId: 1,
    date: r(),
    content: `До вечера должен оклематься \n
      Недельку, думаю, лома поь ниче и сидеть долго`,
  },
];
