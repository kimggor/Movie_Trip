import { PrismaClient } from '@prisma/client';
const jwt = require('jsonwebtoken');
export const getPrismaClient = () => {
    const prisma = new PrismaClient();
    return { prisma }
}

export const validateJwtToken = (token: string) => {
    const secretKey = process.env.TOKEN_SECRET_KEY;
    jwt.verify(token, secretKey, (err:any, decoded:any) => {
        if (err) {
          // Token verification failed
          console.error('Token verification failed:', err.message);
        } else {
          // Token verification succeeded
          console.log('Token verification succeeded. Decoded payload:', decoded);
        }
      });
}