import { Request, Response } from 'express'
import prisma from '../../prisma/Generator'
import { Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker'
export async function PostRequestController(req: Request, res: Response) {
    const { FirstName, LastName, PhoneNumber, OrderCategory, Description, Emai } = req.body
    const customerData: Prisma.customerCreateInput = {
        FirstName: FirstName,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        OrderCategory: OrderCategory,
        Description: Description,
        CustomerID: faker.string.uuid(),
        Email: Emai
    };
    try {
        await prisma.customer.create({
            data: customerData
        })
        console.log('Seeded')
    } catch (error) {
        res.status(500).send('Server Error')
    }

}