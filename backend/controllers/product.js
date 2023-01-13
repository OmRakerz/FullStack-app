//импортировать функции из модели продукта
import {
    getProducts,
    getProductById,
    insertProduct,
    updateProductById,
    deleteProductById,
    } from "../models/productModel.js";


//получить все продукты
    export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
        res.send(err);
        } else {
        res.json(results); //Отправляет ответ в формате JSON, состоящий из указанных файлов data
        }
    });
    };


//получить один продукт
    export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err) {
        res.send(err);
        } else {
        res.json(results);
        }
    });
    };


//создать новый продукт
    export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => { //мы получаем доступ к data (ProductModel)
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
    };

// Обновить продукт
// Передаем data и id
    export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
        res.json(results);
        }
    });
    };

// Удалить продукт
    export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
        res.json(results);
        }
    });
    };
