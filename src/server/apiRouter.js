import express from "express";
import {
  accounts,
  accountsOperations,
  deposits,
  depositsOperations,
} from "server/fakeAccountsDB";
import { messages, users } from "server/fakeMessagesDB";

const router = express.Router();

function getOperations(number, operations) {
  return operations
    .filter(operation => +operation.number === +number)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
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
  res.json(messages);
});

router.get("/users", async (req, res) => {
  res.json(users);
});

export default router;
