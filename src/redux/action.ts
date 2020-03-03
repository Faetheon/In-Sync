import { actionTypes } from "sharedFiles/constants";

//Actions
const createItem = (task: string) => ({
  type: actionTypes.CREATE_ITEM,
  payload: task
});

const deleteItem = (id: number) => ({
  type: actionTypes.DELETE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  actionTypes
};