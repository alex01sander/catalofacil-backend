"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Listar todos os valores do enum factor_status
router.get('/', (req, res) => {
    res.json(['unverified', 'verified']);
});
exports.default = router;
