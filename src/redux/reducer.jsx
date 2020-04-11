import {
	EDIT_PROFIL,
	ADD_TODOLIST,
	STATUS_TODOLIST,
	DEL_TODOLIST
} from './actions'


const initialState = {
	/**
	* Profil datas [{Object}]
	*
	* @param      {String}  {pseudo}
	*/
	profil: {
		pseudo: ''
	},

	team : [
		{name : "Anthony"},
		{name : "Arthur"},
		{name : "Pierre"}
	],
	/**
	* TodoList datas [{Object}]
	*
	* @param      {String}  {title}
	* @param      {String}  {desc}
	* @param      {Boolean}  {status}
	*/
	todoList: [
		{
			title: 'React JS',
			desc: 'Initialiser un projet avec npx',
			status: 1
		},
		{
			title: 'About',
			desc: 'Connecter le composant About à Redux'
		}
	]
};

/**
* Permet de vérifier si un index est présent dans un Tablleau
*/
const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
	// La variable action est l'objet retourné de chaque fonction présentent dans /redux/actions.jsx

	switch (action.type) {

		case EDIT_PROFIL:
			/**
			* Immutable séquence
			*
			* Copie state
			* Modifie profil
			*/
			return { ...state, profil: action.profil };

		case ADD_TODOLIST:
			/**
			* Immutable séquence
			*
			* Copie state
			* Modifie le tableau todoList
			* Copie le tableau todoList
			* Ajoute un élément au tableau
			*/
			return { ...state, todoList: [ ...state.todoList, action.todo ] };

		case STATUS_TODOLIST:
			// Verifie si l'index existe
			if (arrayHasIndex(state.todoList, action.index)) {
				/**
				* Immutable séquence
				*
				* Copie state
				* Modifie le tableau todoListParcour le tableau
				*/
				return {...state, todoList: state.todoList.map((todo, index) => {
					if ( index === action.index ) {
						/**
						* Immutable séquence
						*
						* Copie chaque todoList
						* Modifie le status
						*/
						return { ...todo, status: 1 };
					}
					return todo;
				})};
			}
			return state;

		case DEL_TODOLIST:
			// Verifie si l'index existe
			if (arrayHasIndex(state.todoList, action.index)) {
				/**
				* Immutable séquence
				*
				* Copie state
				* Modifie le tableau todoList
				* Retourne une copie du tableau dont les éléments correspondent à la condition
				*/
				return { ...state, todoList: [ ...state.todoList.filter((todo, index) => index !== action.index) ] };
			}
			return state;

		default:
			return state;
	}
}