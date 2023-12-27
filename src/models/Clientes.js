import mongoose  from 'mongoose';

const { Schema } = mongoose;

const clientesSchema = new Schema({
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
    projects: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Proyecto',
        },
    ],
});

const Clientes = model('Clientes' , clientesSchema);

export default Clientes;