import { Request, Response, NextFunction } from 'express';

export interface PaginationParams {
  page: number;
  limit: number;
  offset: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

// Middleware para processar parâmetros de paginação
export function paginationMiddleware(req: Request, res: Response, next: NextFunction) {
  const page = Math.max(1, parseInt(req.query.page as string) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20)); // Máximo 100 itens por página
  const offset = (page - 1) * limit;
  
  const sortBy = req.query.sortBy as string || 'created_at';
  const sortOrder = (req.query.sortOrder as string)?.toLowerCase() === 'asc' ? 'asc' : 'desc';

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
export function createPaginatedResponse<T>(
  data: T[],
  totalItems: number,
  pagination: PaginationParams
): PaginatedResponse<T> {
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
export function getPrismaQuery(pagination: PaginationParams, orderByField: string = 'created_at') {
  return {
    skip: pagination.offset,
    take: pagination.limit,
    orderBy: {
      [pagination.sortBy || orderByField]: pagination.sortOrder
    }
  };
}

// Middleware para adicionar headers de paginação
export function paginationHeaders(req: Request, res: Response, next: NextFunction) {
  const originalJson = res.json.bind(res);
  
  res.json = (data: any) => {
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

// Tipos para estender Request
declare global {
  namespace Express {
    interface Request {
      pagination?: PaginationParams;
    }
  }
} 