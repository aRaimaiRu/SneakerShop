// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/db';
import User from '../../models/User';
import Role from '../../models/Role';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
export default async function handler(req, res) {
  try {
    await db.connect();
    const newRole = new Role({
      _id: '6167f9608dbc6336576219e7',
      roleName: 'Customer',
    });
    await newRole.save();
    await db.disconnect();
    res.status(200).json({ msg: 'succesful init DB value' });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
}
