import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

class Home extends React.Component {
	constructor() {
		/**
		* super() permet d'acès aux variables et aux fonctions du ou des parents.
		* Les parents d'une class sont définis après extends.
		*/
		super();

		/**
		* Permet de définir l'état local.
		* L'état local modifie le render
		*/
		this.state = {
			txt: ''
		}
	}

	/**
	* Fonction d'édition de this.state.txt
	* this.editState
	*/
	editState(event) {
		// preventDefault() empêche le rechargement de page
		event.preventDefault();
		let target = event.target;

		// setState est utilisé pour modifier le state d'une class.
		this.setState({...this.state, txt: target[0].value});
	}

	render() {
		const { profil } = this.props;
		const { txt } = this.state;
		return (
			<div>
				<p>
					Hello {profil.pseudo} !
				</p><br /><br />
				<form onSubmit={ event => this.editState(event) }>
					<label>
						State : <input type="text" /><br />
					</label>
					<label>
						Résultat : {txt}
					</label>
					<button>Modifier</button>
				</form>
			</div>
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
* Connecte la class au router
* Connecte la class à Redux
* Importa la constante de lecture de redux
*/
export default withRouter(connect(
	mapStateToProps
)(Home));
