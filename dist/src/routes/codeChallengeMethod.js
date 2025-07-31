"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Listar todos os valores do enum code_challenge_method
router.get('/', (req, res) => {
    res.json(['s256', 'plain']);
});
exports.default = router;
