import Admin from '../models/Admin';

const isValidObjectId = (id) => ObjectId.isValid(id) && (String)(new ObjectId(id)) === id;

const getAllAdmins = async (req, res) => {
    try {
      const admin = await Admin.find(req.query);
      return res.status(200).json({
        message: 'Admin list',
        data: admin,
        error: false,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Server Error ${err}`,
        error: true,
      });
    }
};

const getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(400).json({
          message: `Invalid id: ${id}`,
          data: undefined,
          error: true,
        });
      }
      const admin = await Admin.findById(id);
      if (!admin) {
        return res.status(404).json({
          message: `Admin with id ${id} not found`,
          data: undefined,
          error: true,
        });
      }
      return res.status(200).json({
        message: 'Admin found',
        data: admin,
        error: false,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Server Error ${err}`,
        data: undefined,
        error: true,
      });
    }
};

const createAdmin = async (req, res) => {
    try {
      const admin = new Admin({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
  
      const result = await admin.save();
  
      return res.status(201).json({
        message: 'Admin created successfully',
        data: result,
        error: false,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Server Error ${err}`,
        error: true,
      });
    }
};

const editAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(400).json({
          message: `Invalid id: ${id}`,
          error: true,
        });
      }
      const admin = await Admin.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true },
      );
  
      if (!admin) {
        return res.status(404).json({
          message: `Admin with id:${req.params.id} not found`,
          error: true,
        });
      }
  
      return res.status(201).json({
        message: `Admin with id ${req.params.id} updated successfully`,
        data: admin,
        error: false,
      });
    } catch (err) {
      return res.status(500).json({
        message: `Server Error ${err}`,
        error: true,
      });
    }
};

const deleteAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(400).json({
          message: `Invalid id: ${id}`,
          error: true,
        });
      }
      const admin = await Admin.deleteById(id);
      if (!admin) {
        return res.status(404).json({
          message: `Admin with id:${id} not found`,
          error: true,
        });
      }
  
      return res.sendStatus(204);
    } catch (err) {
      return res.status(500).json({
        message: `Server Error ${err}`,
        error: true,
      });
    }
};


export default {
    getAdminById,
    getAllAdmins,
    createAdmin,
    editAdmin,
    deleteAdmin,
}