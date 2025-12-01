import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import { currentPage, getTasks, tasksPerPage } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const current = useSelector(currentPage);
  const perPage = useSelector(tasksPerPage);
  const totalPages = Math.ceil(tasks.length / perPage);

  return (
    <>
      <ResponsivePagination
        current={current}
        total={totalPages}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </>
  );
};

export default Pagination;
