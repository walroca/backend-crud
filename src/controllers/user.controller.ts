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

//Agregar un usuario a la BD
export const createUser = async (req: Request, res: Response) => {
  const { nombre, apellido, ciudad, direccion, usuario, email } = req.body

  try {
    const nuevoUsuario = await prisma.user.create({
      data: { nombre, apellido, ciudad, direccion, usuario, email }
    })
    res.status(201).json(nuevoUsuario)
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' })
  }
}
