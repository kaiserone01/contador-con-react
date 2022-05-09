import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Contador = (props) => {
	const [conteo, setConteo] = useState(0);
	const [tiempoOn, setTiempoOn] = useState(true);

	useEffect(() => {
		let interval = 0;
		if (tiempoOn) {
			interval = setInterval(() => {
				setConteo((prevContador) => prevContador + 1);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [tiempoOn]);

	return (
		<>
			<div className="Pcontador">
				<div className="clock">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="cuatro">{Math.floor(conteo / 100000) % 10}</div>
				<div className="tres">{Math.floor(conteo / 10000) % 10}</div>
				<div className="dos">{Math.floor(conteo / 1000) % 10}</div>
				<div className="uno">{Math.floor(conteo / 100) % 10}</div>
				<button className="boton1" onClick={() => setTiempoOn(false)}>
					PARAR
				</button>
			</div>
		</>
	);
};

export default Contador;
