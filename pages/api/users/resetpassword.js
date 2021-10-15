import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import Role from '../../../models/Role';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.put(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  if(!user){
    return res.status(401).send({ message: 'Invalid email ' });
  }
  user.password = bcrypt.hashSync(req.body.password);
  await user.save();
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
