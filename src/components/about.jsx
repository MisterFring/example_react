import React from 'react';

import { withRouter } from "react-router";
import {connect} from "react-redux";

class About extends React.Component {
	constructor() {
		/**
		* super() permet d'acès aux variables et aux fonctions du ou des parents.
		* Les parents d'une class sont définis après extends.
		*/
		super();

		/**
		* Permet de définir une variable global à la class.
		* 
		* this.authors est un tableau d'objet.
		*/
		this.authors = [
			{
				pseudo: 'Angamara'
			}
		];
	}

	render() {
		const {team} = this.props;
		return (
			<div>
				{team.map((group , i) => (
					<div key={i}>
						By {group.name}<br/>
					</div>
				))}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		/**
		 * state.team est défini dans /redux/reducer.jsx
		 */
		team: state.team
	};
}

/**
 * Connecte la class au router
 * Connecte la class à Redux
 * Importa la constante de lecture de redux
 */
export default withRouter(connect(
	mapStateToProps
)(About));