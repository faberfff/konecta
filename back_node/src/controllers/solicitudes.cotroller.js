import { request } from "express";
import { pool } from "../database/config.js";

//Controlador para optener todas las solicitudes, en el campo id_empleado muestra el nombre del empleado
export const getSolicitudes = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT solicitud.solicitud_id, solicitud.codigo, solicitud.descripcion, solicitud.resumen, empleado.nombre FROM solicitud, empleado WHERE solicitud.empleado_id = empleado.empleado_id"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//controler optiene una solicitud por el id
export const getSolicitud = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT *FROM solicitud WHERE solicitud_id = ?",
      [req.params.id]
    );
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Solicitud no existe",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador crear una solicitud
export const createSolicitud = async (req, res) => {
  const { codigo, descripcion, resumen, empleado_id } = req.body;
  try {
    
    const [rows] = await pool.query(
      "INSERT INTO solicitud (codigo, descripcion, resumen, empleado_id) VALUES (?, ?, ?, ?)",
      [codigo, descripcion, resumen, empleado_id]
    );
    res.send({
      solicitud_id: rows.insertId,
      codigo,
      descripcion,
      resumen,
      empleado_id,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controller actualiza todos los campos de la solicitud
export const updateSolicitud = async (req, res) => {
  const { id } = req.params;
  const { codigo, descripcion, resumen, empleado_id } = req.body;
  try {
    
    const [result] = await pool.query(
      "UPDATE solicitud SET codigo = ?, descripcion = ?, resumen = ?, empleado_id = ? WHERE solicitud_id = ?",
      [codigo, descripcion, resumen, empleado_id, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Solicitud no existe ",
      });
    const [rows] = await pool.query(
      "SELECT * FROM solicitud WHERE solicitud_id = ?",
      [id]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador actualiza una solicitud por uno o varias propiedades
export const update = async (req, res) => {
  const { id } = req.params;
  const { codigo, descripcion, resumen, empleado_id } = req.body;
  try {
    
    const [result] = await pool.query(
      "UPDATE solicitud SET codigo = IFNULL(?, codigo), descripcion = IFNULL(?, descripcion), resumen = IFNULL(?, resumen), empleado_id = IFNULL(?, empleado_id) WHERE solicitud_id = ?",
      [codigo, descripcion, resumen, empleado_id, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Solicitud no existe ",
      });

    const [rows] = await pool.query(
      "SELECT * FROM solicitud WHERE solicitud_id = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Contyrolador para borra una solicitud por id
export const deleteSolicitud = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM solicitud WHERE solicitud_id = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Solicitud no existe ",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};
