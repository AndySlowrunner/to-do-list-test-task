
const TaskList = ({arr}) => {
  // console.log(arr);
  return (
    <>
      <div>
        <ul>
          {arr.map((el) => (
            <li key={el.id}>
              <p>{el.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
