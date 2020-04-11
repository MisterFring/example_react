/*
 * action types
 */

export const EDIT_PROFIL = 'EDIT_PROFIL';
export const ADD_TODOLIST = 'ADD_TODOLIST';
export const STATUS_TODOLIST = 'STATUS_TODOLIST';
export const DEL_TODOLIST = 'DEL_TODOLIST';

/*
 * action creators
 */

/**
 * Edit profil from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {datas:{pseudo}}  Profil datas
 * @return     {Object}  Redux Store Object
 */

export function editProfil(profil) {
	return { type: EDIT_PROFIL, profil };
}

/**
 * Add Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {datas:{title, desc}}  Todo datas
 * @return     {Object}  Redux Store Object
 */

export function addTodoList(todo) {
	return { type: ADD_TODOLIST, todo };
}

/**
 * Check Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Todo index
 * @return     {Object}  Redux Store Object
 */

export function statusTodoList(index) {
	return { type: STATUS_TODOLIST, index };
}

/**
 * Del Todo from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Todo index
 * @return     {Object}  Redux Store Object
 */

export function delTodoList(index) {
	return { type: DEL_TODOLIST, index };
}