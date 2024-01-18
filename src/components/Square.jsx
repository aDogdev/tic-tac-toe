import PropTypes from "prop-types";

function Square({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      <span>{children}</span>
    </div>
  );
}

Square.propTypes = {
  children: PropTypes.string,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
};

export { Square };
