import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

const override = css`
	display: block;
	margin: 0 auto;
`;


const Spinners = () => {
	return (
		<div className="sweet-loading">
			<PacmanLoader
				css={override}
				size={25}
				color={"#ffffff"}
				loading={true}
			/>
		</div>
	);
}
 
export default Spinners;