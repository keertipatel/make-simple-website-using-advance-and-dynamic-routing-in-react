import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      CourseDetails
      <h1> {params.id} CoursesDetails Page</h1>
    </div>
  );
};

export default CourseDetails;
