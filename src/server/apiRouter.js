import express from "express";
import {
  accounts,
  accountsOperations,
  deposits,
  depositsOperations,
  users,
} from "server/fakeAccountsDB";
import fs from "fs";
import path from "path";

const router = express.Router();
const fakeMessagesDBPath = path.resolve("./static/fakeMessagesDB.json");

function sortByDate(items) {
  return items.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getOperations(number, operations) {
  return sortByDate(
    operations.filter(operation => +operation.number === +number),
  );
}

function groupByDay(messages) {
  const byDay = {};
  messages.forEach(value => {
    const dateFormat = new Intl.DateTimeFormat("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const dateString = dateFormat.format(value.date);

    byDay[dateString] = byDay[dateString] || [];
    byDay[dateString].push(value);
  });

  return byDay;
}

function getLastOperations(items, operations) {
  return items.map(item => {
    const itemLastOperations = getOperations(item.number, operations)[0];

    return {
      ...item,
      dateOfTheLastOperation: itemLastOperations
        ? itemLastOperations.date
        : null,
      lastOperationSum: itemLastOperations ? itemLastOperations.sum : null,
    };
  });
}

function getItem(number, items) {
  return items.find(item => +item.number === +number);
}

function getMessages() {
  return fs.readFileSync(fakeMessagesDBPath, "utf8");
}

router.get("/test", async (req, res) => {
  res.json({ test: "ok" });
});

router.get("/accounts", async (req, res) => {
  res.json(getLastOperations(accounts, accountsOperations));
});

router.get("/accounts/:number", async (req, res) => {
  const { number } = req.params;
  res.json({
    ...getItem(number, accounts),
    operations: getOperations(number, accountsOperations),
  });
});

router.get("/deposits", async (req, res) => {
  res.json(getLastOperations(deposits, depositsOperations));
});

router.get("/deposits/:number", async (req, res) => {
  const { number } = req.params;
  res.json({
    ...getItem(number, deposits),
    operations: getOperations(number, depositsOperations),
  });
});

router.get("/messages", async (req, res) => {
  const messages = getMessages();

  res.json(groupByDay(JSON.parse(messages)));
});

router.get("/users", async (req, res) => {
  res.json(users);
});

router.post("/send-message", async (req, res) => {
  const oldMessages = JSON.parse(getMessages());
  const newMessages = [...oldMessages, req.body];
  fs.writeFileSync(fakeMessagesDBPath, JSON.stringify(newMessages), "utf8");

  res.json(newMessages);
});

export default router;
