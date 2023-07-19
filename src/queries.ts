export const createShop = () => {
  return `INSERT INTO shop (goodsqty, goodsname ,buyer)
      VALUES (22, 'Spagetti', 'Gocrazy');`;
};

export const getAllShop = () => {
  return `SELECT * FROM shop`;
};
export const getShopById = (id: string) => {
  return `SELECT * FROM shop WHERE id=${id}`;
};

export const updateShop = (id: string) => {
  return `UPDATE shop
      SET 
      "goodsqty" = $1,
      goodsname = $2,
      buyer= $3 WHERE id=${id}`;
};

export const deleteShop = (
  id: string,

) => {
  return `DELETE FROM shop WHERE id=${id}`;
};
