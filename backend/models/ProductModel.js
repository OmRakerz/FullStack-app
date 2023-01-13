//импортное соединение
import db from "../config/database.js";


//получить все продукты
export const getProducts = (result) => {
  db.query("SELECT * FROM product", (err, results) => {
    if (err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
    });
};


//получить один продукт
//чтобы получить один продукт мы получаем id от controllers
export const getProductById = (id, result) => {
    db.query(
    "SELECT * FROM PRODUCT WHERE product_id = ?",
    [id],
    (err, results) => {
        if (err) {
        console.log(err);
        result(err, null);
        } else {
        result(null, results[0]);
        }
    }
    );
};


//вставить товар в БД
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
    if (err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
    });
};


//Обновить продукт в БД
//Мы получаем название продукта и данные о его цене
export const updateProductById = (data, id, result) => {
    db.query(
    "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
    [data.product_name, data.product_price, id],
    (err, results) => {
        if (err) {
        console.log(err);
        result(err, null);
        } else {
        result(null, results);
        }
    }
    );
};


// Удалить продукт из БД
// Удаление продукта по id
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
    if (err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
    });
};