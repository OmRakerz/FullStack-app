//import express
import express from "express";

// импортировать функции из controller
import {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/product.js";

//init express router
// Инициализация
const router = express.Router();

// получить весь продукт
// Каждый раз когда вызывается products вызывается ф-я showProducts (берется из ProductModel)
router.get("/products", showProducts);

// получить весь продукт по айди
router.get("/products/:id", showProductById);

// Создать новый продукт
router.post("/products", createProduct);

// Обновить продукт с id
router.put("/products/:id", updateProduct);

// Удалить продукт с id
router.delete("/products/:id", deleteProduct);

// Экспорт маршрутизатора по умолчанию
export default router;
