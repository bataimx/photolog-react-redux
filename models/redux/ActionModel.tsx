interface ActionModel<type> {
  type: ActionType;
  payload: type;
}

export default ActionModel;
