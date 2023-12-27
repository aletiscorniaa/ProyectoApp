import mongoose from 'mongoose';

const { Schema } = mongoose

const proyectosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    integrantes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Usuario',
        },
    ],
    fechaInicio: {
        type: Date,
        required: true,
      },
    estado: {
        type: String,
        enum: ['En progreso', 'Completado', 'Cancelado'],
        default: 'En progreso',
    },

});

const Proyectos = model('Proyectos', proyectosSchema);

export default Proyectos;