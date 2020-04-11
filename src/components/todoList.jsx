import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";
import { addTodoList, statusTodoList, delTodoList } from "../redux/actions";

class TodoList extends React.Component {
	/**
	* Fonction d'ajout de todolist dans redux
	* this.editProfil
	*/
	addTodoList(event) {
		// preventDefault() empêche le rechargement de page
		event.preventDefault();
		let target = event.target;

		// this.props.addTodoList est déini dans mapDispatchToProps
		this.props.addTodoList({
			title: target[0].value,
			desc: target[1].value
		});
	}

	/**
	* Fonction d'édition du status de todolist dans redux
	* this.editProfil
	*/
	statusTodoList(index) {
		this.props.statusTodoList(index);
	}

	/**
	* Fonction de suppression de todolist dans redux
	* this.editProfil
	*/
	delTodoList(index) {
		this.props.delTodoList(index);
	}

	render() {
		const { todoList } = this.props;
		return (
			<div>
				<form onSubmit={ event => this.addTodoList(event) }>
					<label>
						Titre : <input type="text" />
					</label>
					<label>
						Description : <input type="text" />
					</label>
					<button>Ajouter</button>
				</form><br /><br />
				{todoList.map((todo , i) => (
					<div key={i}>
						{todo.title} : {!todo.status ? 'En cours' : 'Terminé'}<br />
						{todo.desc}<br />
						{!todo.status && <button onClick={() => this.statusTodoList(i)}>Valider</button> }
						<button onClick={() => this.delTodoList(i)}>Supprimer</button><br /><br />
					</div>
				))}
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
		* this.props.todoList
		* state.todoList est défini dans /redux/reducer.jsx
		*/
		todoList: state.todoList
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
		* this.props.addTodoList
		*/
		addTodoList: todo => {
			/**
			* addTodoList(todo) est défini dans /redux/actions.jsx
			*/
			dispatch(addTodoList(todo))
		},
		/**
		* this.props.checkTodoList
		*/
		statusTodoList: index => {
			/**
			* statusTodoList(index) est défini dans /redux/actions.jsx
			*/
			dispatch(statusTodoList(index))
		},
		/**
		* this.props.delTodoList
		*/
		delTodoList: index => {
			/**
			* delTodoList(index) est défini dans /redux/actions.jsx
			*/
			dispatch(delTodoList(index))
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
)(TodoList));
