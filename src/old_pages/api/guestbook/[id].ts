import type { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

// import prisma from "@/lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  const { id } = req.query
  const email = session?.user?.email

  // const entry = await prisma.guestbook.findUnique({
  //   where: {
  //     id: Number(id),
  //   },
  // })

  const entry = {
    id: 1,
    body: "Hello, world!",
    created_by: "John Doe",
    updated_at: new Date().toISOString(),
    email: "john@doe.com",
  }

  if (req.method === "GET") {
    return res.json({
      id: entry?.id.toString(),
      body: entry?.body,
      created_by: entry?.created_by,
      updated_at: entry?.updated_at,
    })
  }

  // If its admin user then skip validation to delete and put
  if (email !== process.env.ADMIN_EMAIL) {
    // console.log('no admin');
    if (!session || email !== entry?.email) {
      return res.status(403).send("Unauthorized")
    }
  }

  if (req.method === "DELETE") {
    // await prisma.guestbook.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // })

    return res.status(204).json({})
  }

  if (req.method === "PUT") {
    const body = (req.body.body || "").slice(0, 500)

    // await prisma.guestbook.update({
    //   where: {
    //     id: Number(id),
    //   },
    //   data: {
    //     body,
    //     updated_at: new Date().toISOString(),
    //   },
    // })

    return res.status(201).json({
      ...entry,
      body,
    })
  }

  return res.send("Method not allowed.")
}
