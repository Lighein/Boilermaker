const CREATE = 'CREATE';
const SET_SINGLE = 'SET_SINGLE';
const SET_MULTIPLE = 'SET_MULTIPLE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

export const createObject = (obj) => {
	return { type: CREATE, obj };
};
export const setOneObject = (obj) => {
	return { type: SET_SINGLE, obj };
};
export const setMultipleObjects = (obj) => {
	return { type: SET_MULTIPLE, obj };
};
export const updateObject = (obj) => {
	return { type: UPDATE, obj };
};
export const deleteObject = (obj) => {
	return { type: DELETE, obj };
};
