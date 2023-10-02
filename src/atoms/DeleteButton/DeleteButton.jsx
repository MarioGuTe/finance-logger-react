const DeleteButton = ({ id, onClickItem }) => {
  return <button onClick={() => onClickItem(id)}>Delete</button>;
};

export default DeleteButton;
