CREATE TABLE pais(
	idPais INTEGER PRIMARY key NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL
);

CREATE TABLE moneda(
	idMoneda INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fecha    DATE,
    venta    DOUBLE(5,2),
    compra	 DOUBLE(5,2),
    pais_idPais INTEGER,
    FOREIGN KEY (pais_idPais)
        REFERENCES pais(idPais)
        ON DELETE CASCADE
);