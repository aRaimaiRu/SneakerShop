import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import Role from '../../../models/Role';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    tel: req.body.tel,
    roleId: '6167f9608dbc6336576219e7',
  });
  const user = await newUser.save();
  const resUser = await User.findById(user._id)
    .populate('roleId', 'roleName')
    .select('email name lastname address tel');
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

export default handler;
