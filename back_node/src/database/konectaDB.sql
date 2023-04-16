CREATE SCHEMA IF NOT EXISTS konecta DEFAULT CHARACTER SET utf8;
USE konecta;
CREATE TABLE IF NOT EXISTS empleado (
  empleado_id INT NOT NULL AUTO_INCREMENT,
  fecha_ingreso VARCHAR(25) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  salario INT NOT NULL,
  PRIMARY KEY (empleado_id)
);
CREATE TABLE IF NOT EXISTS solicitud(
  solicitud_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  codigo VARCHAR(20) NOT NULL,
  descripcion VARCHAR(50),
  resumen VARCHAR(100) NULL,
  empleado_id INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY (solicitud_id),
  INDEX `fk_empleado_empleado_idx` (`empleado_empleado_id` ASC),
  CONSTRAINT `fk_empleado_empleado1` FOREIGN KEY (`empleado_empleado_id`) REFERENCES `konecta`.`empleado` (`empleado_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
< -- Insercion de datos en la tabla empleado -- >  
insert into empleado(fecha_ingreso, nombre, salario)
values ('2016-11-19', 'Caro', '1300892'),
  ('2016-11-19', 'Marta', '1250369');
< -- Insercion de datos en la tabla solicitud -- >  
insert into solicitud(codigo, descripcion, resumen, empleado_id)
values ('05', 'permiso', 'cita medica', 2),
  (
    '04',
    'llamado de atencion',
    'permanentes faltas al lugar de trabajo',
    1
  );
< -- consulta empleado por el nombre -- >

SELECT *
FROM empleado
WHERE nombre = ?;