import DeleteButton from "../DeleteButton/DeleteButton";

const ListItem = ({ singleLog, onClickItem }) => {
  return (
    <>
      <li>
        <h4>{singleLog.finance_type}</h4>
        <p>
          {singleLog.finance_type === "invoice"
            ? `${singleLog.to_from} is owed ${singleLog.amount} for ${singleLog.details}`
            : `${singleLog.to_from} owes ${singleLog.amount} for ${singleLog.details}`}
        </p>
        <DeleteButton id={singleLog.id} onClickItem={onClickItem} />
      </li>
    </>
  );
};

export default ListItem;
