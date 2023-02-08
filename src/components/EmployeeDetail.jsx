import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();

  return <main>employee detail - {id}</main>;
};

export default EmployeeDetail;
