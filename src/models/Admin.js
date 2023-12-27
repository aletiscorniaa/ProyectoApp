import mongoose  from 'mongoose';

const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: mail,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    projects: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Proyecto',
        },
    ],
});

const Admin = model('Admin' , adminSchema);

export default Admin;