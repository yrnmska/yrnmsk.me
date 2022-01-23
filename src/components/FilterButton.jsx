const FilterButton = ({name, setFilter}) => {
  return (
    <button type='button' className='btn toggle-btn' aria-pressed='true' onClick={() => setFilter(name)}>
      <span className='visually-hidden'>Show</span>
      <span>{name}</span>
      <span className='visually-hidden'>tasks</span>
    </button>
  );
};

export default FilterButton;
