import ListItem from "../ListItem/ListItem";

const List = ({ logInfo }) => {
  return (
    <>
      <ul className="item-list">
        {logInfo?.map((singleLog) =>
          singleLog.details.length > 0 ? (
            <span key={singleLog.id}>
              <ListItem singleLog={singleLog} />
            </span>
          ) : null
        )}
      </ul>
    </>
  );
};

export default List;
