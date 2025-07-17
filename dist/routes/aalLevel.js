"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Listar todos os valores do enum aal_level
router.get('/', (req, res) => {
    res.json(['aal1', 'aal2', 'aal3']);
});
exports.default = router;
