import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

interface GeonameResponseData {
	geonames: { geonameId: number; name: string }[];
}

export default function Address() {
	const axiosInstance = axios.create({ baseURL: "http://api.geonames.org" });

	const [state, setState] = useState([
		<option hidden value="">
			Selecione um país
		</option>,
	]);

	const countryOnChange = async (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		if (event.target.value === "") return;

		try {
			const statesData = (
				await axiosInstance.get(
					`/childrenJSON?geonameId=${event.target.value}&username=${process.env.REACT_APP_GEONAME_TOKEN}`,
				)
			).data as GeonameResponseData;

			const optionList = [
				<option hidden value="">
					Selecione uma opção
				</option>,
			];

			statesData.geonames.forEach((item) =>
				optionList.push(<option value={item.geonameId}>{item.name}</option>),
			);

			setState(optionList);
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		const stateEl = document.getElementById("state-element");

		if (stateEl !== null) {
			stateEl.innerHTML = "";
			render(state, stateEl);
		}
	}, [state]);

	return (
		<React.Fragment>
			<label>
				PAÍS
				<select required name="country" onChange={countryOnChange}>
					<option hidden value="">
						Selecione uma opção
					</option>
					<option value="3469034">Brasil</option>
				</select>
			</label>

			<label>
				ESTADO
				<select required name="state" id="state-element"></select>
			</label>
		</React.Fragment>
	);
}
