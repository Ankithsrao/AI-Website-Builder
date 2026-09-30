import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    name:{type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
},{timestamp: true})

//Hash password before saving
UserSchema('save', async () => {
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Compare password method
UserSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

export const User = mongoose.model(`User`, UserSchema)