import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { editProfil } from "../redux/actions";

class Config extends React.Component {
	/**
	* Fonction d'édition du profil dans redux
	* this.editProfil
	*/
	editProfil(event) {
		// preventDefault() empêche le rechargement de page
		event.preventDefault();
		let target = event.target;

		// this.props.editProfil est déini dans mapDispatchToProps
		this.props.editProfil({
			pseudo: target[0].value
		});
	}

	render() {
		const { profil } = this.props;
		return (
			<form onSubmit={ event => this.editProfil(event) }>
				<label>
					Pseudo : <input type="text" defaultValue={profil.pseudo} />
				</label>
				<button>Sauvegarder</button>
			</form>
		);
	}
}

/**
* Constante de lecture de redux
*
* Permet de lier le state présent dans /redux/reducer.jsx à la class
*/
const mapStateToProps = state => {
	return {
		/**
		* this.props.profil
		* state.profil est défini dans /redux/reducer.jsx
		*/
		profil: state.profil
	};
}

/**
* Constante d'écriture dans redux
*
* Permet de lier les fonctions présentent dans /redux/actions.jsx à la class
*/
const mapDispatchToProps = dispatch => {
	return {
		/**
		* this.props.editProfil
		*/
		editProfil: profil => {
			/**
			* editProfil(profil) est défini dans /redux/actions.jsx
			*/
			dispatch(editProfil(profil))
		}
	};
}

/*
* Connecte la class au router
* Connecte la class à Redux
* Import la constante de lecture de redux
* Import la constante d'écritur de redux
*/
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Config));

