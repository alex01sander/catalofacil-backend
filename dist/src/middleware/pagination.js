"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationMiddleware = paginationMiddleware;
exports.createPaginatedResponse = createPaginatedResponse;
exports.getPrismaQuery = getPrismaQuery;
exports.paginationHeaders = paginationHeaders;
// Middleware para processar parâmetros de paginação
function paginationMiddleware(req, res, next) {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20)); // Máximo 100 itens por página
    const offset = (page - 1) * limit;
    const sortBy = req.query.sortBy || 'created_at';
    const sortOrder = req.query.sortOrder?.toLowerCase() === 'asc' ? 'asc' : 'desc';
    req.pagination = {
        page,
        limit,
        offset,
        sortBy,
        sortOrder
    };
    next();
}
// Função helper para criar resposta paginada
function createPaginatedResponse(data, totalItems, pagination) {
    const totalPages = Math.ceil(totalItems / pagination.limit);
    return {
        data,
        pagination: {
            currentPage: pagination.page,
            totalPages,
            totalItems,
            itemsPerPage: pagination.limit,
            hasNextPage: pagination.page < totalPages,
            hasPrevPage: pagination.page > 1
        }
    };
}
// Função helper para queries Prisma com paginação
function getPrismaQuery(pagination, orderByField = 'created_at') {
    return {
        skip: pagination.offset,
        take: pagination.limit,
        orderBy: {
            [pagination.sortBy || orderByField]: pagination.sortOrder
        }
    };
}
// Middleware para adicionar headers de paginação
function paginationHeaders(req, res, next) {
    const originalJson = res.json.bind(res);
    res.json = (data) => {
        if (data && data.pagination) {
            res.set({
                'X-Total-Count': data.pagination.totalItems.toString(),
                'X-Total-Pages': data.pagination.totalPages.toString(),
                'X-Current-Page': data.pagination.currentPage.toString(),
                'X-Per-Page': data.pagination.itemsPerPage.toString(),
                'X-Has-Next': data.pagination.hasNextPage.toString(),
                'X-Has-Prev': data.pagination.hasPrevPage.toString()
            });
        }
        return originalJson(data);
    };
    next();
}
