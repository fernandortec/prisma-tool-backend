import { PrismaClient } from '@prisma/client'

import { Request,Response } from 'express';

const prisma = new PrismaClient()

export default {
    async create(request:Request, response:Response){
        const { name, email } = request.body;

        const createdUser = await prisma.user.create({
            data:{
                name,
                email
            }
        })
        return response.json(createdUser);
    },
    async index(request:Request, response:Response){
        const users = await prisma.user.findMany();
        return response.json(users);
    },
    async listone(request:Request, response:Response){
        let email = request.headers.authorization;

        const user = await prisma.user.findOne({
            where:{
                email:email
            }
        })
        return response.json(user)
    }
}