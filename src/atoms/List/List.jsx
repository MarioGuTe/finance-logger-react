import ListItem from "../ListItem/ListItem";

const List = ({ logInfo, onClickItem }) => {
  return (
    <>
      <ul className="item-list">
        {logInfo?.map((singleLog) =>
          singleLog.details.length > 0 ? (
            <span key={singleLog.id}>
              <ListItem singleLog={singleLog} onClickItem={onClickItem} />
            </span>
          ) : null
        )}
      </ul>
    </>
  );
};

export default List;
