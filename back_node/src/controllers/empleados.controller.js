import { request } from "express";
import { pool } from "../database/config.js";

//Controlador para consultar todos los empleados
export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador para consultar un empleado por su id
export const getEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE empleado_id = ?",
      [req.params.id]
    );
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Empleado no existe ",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador para crear un empleado
export const createEmpleado = async (req, res) => {
    const { fecha_ingreso, nombre, salario } = req.body;
  try {
    
    const [rows] = await pool.query(
      "INSERT INTO empleado (fecha_ingreso, nombre, salario) VALUES (?, ?, ?)",
      [fecha_ingreso, nombre, salario]
    );
    res.send({
      empleado_id: rows.insertId,
      fecha_ingreso,
      nombre,
      salario,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador para actualizar un empleado en todas sus propiedades
export const updateEmpleado = async (req, res) => {
    const { id } = req.params;
    const { fecha_ingreso, nombre, salario } = req.body;
  try {
    
    const [result] = await pool.query(
      "UPDATE empleado SET fecha_ingreso = ?, nombre = ?, salario = ? WHERE empleado_id = ?",
      [fecha_ingreso, nombre, salario, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no existe ",
      });

    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE empleado_id = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador para actualizar un empleado por propiedades en especifico
export const update = async (req, res) => {
    const { id } = req.params;
    const { fecha_ingreso, nombre, salario } = req.body;
  try {
    
    const [result] = await pool.query(
      "UPDATE empleado SET fecha_ingreso = IFNULL(?, fecha_ingreso), nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE empleado_id = ?",
      [fecha_ingreso, nombre, salario, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no existe ",
      });

    const [rows] = await pool.query(
      "SELECT * FROM empleado WHERE empleado_id = ?",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};

//Controlador para eliminar un empleado por su id
export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM empleado WHERE empleado_id = ?",
      [req.params.id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no existe",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo Fallo",
    });
  }
};
