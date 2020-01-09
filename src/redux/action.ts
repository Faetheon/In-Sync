//Types
const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM"
}

//Actions
const createItem = (task: string) => ({
  type: Types.CREATE_ITEM,
  payload: task
});

const deleteItem = (id: number) => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  createItem,
  deleteItem,
  Types
};