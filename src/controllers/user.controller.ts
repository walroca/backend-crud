import { Request, Response } from 'express'
import prisma from '../prisma'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}
