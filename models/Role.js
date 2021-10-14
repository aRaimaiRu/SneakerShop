import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema(
  {
    roleName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.models.Role || mongoose.model('Role', roleSchema);
export default Role;
