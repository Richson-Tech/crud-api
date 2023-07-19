import { RequestHandler, query } from "express";
import * as queries from "../queries";
import { client } from "../database";

export const createShop: RequestHandler = async (req, res, next) => {
  let shop = req.body;
  const query = queries.createShop();

  const result = await client.query(query);
  return res.send(result.rows);
};

export const getAllShop: RequestHandler = async (req, res, next) => {
  let shop = req.body;
  const query = queries.getAllShop();

  const result = await client.query(query);

  return res.send(result.rows);
};

export const updateShop: RequestHandler = async (req, res, next) => {
  let id = req.params.id;
  const { goodsqty, goodsname, buyer } = req.body;

  const getBookByIdQuery = queries.getShopById(id);

  const getBookResult = await client.query(getBookByIdQuery);

  if (getBookResult.rowCount > 0) {
    // checking if data exists
    const updateQuery = queries.updateShop(id);
    const updateResult = await client.query(updateQuery, [
      goodsqty,
      goodsname,
      buyer,
    ]);

    return res.send(updateResult.rows[0]);
  } else {
    return res.status(400).send({ message: "Record does not exist" });
  }
};

export const deleteShop: RequestHandler = async (req, res, next) => {
  let id = req.params.id;
  const query = queries.deleteShop(id);

  const result = await client.query(query);
};
