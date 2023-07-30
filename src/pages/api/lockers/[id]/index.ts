import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { lockerValidationSchema } from 'validationSchema/lockers';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.locker
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLockerById();
    case 'PUT':
      return updateLockerById();
    case 'DELETE':
      return deleteLockerById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLockerById() {
    const data = await prisma.locker.findFirst(convertQueryToPrismaUtil(req.query, 'locker'));
    return res.status(200).json(data);
  }

  async function updateLockerById() {
    await lockerValidationSchema.validate(req.body);
    const data = await prisma.locker.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLockerById() {
    const data = await prisma.locker.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
