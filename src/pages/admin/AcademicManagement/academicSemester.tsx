import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
    const{data}=useGetAllSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>this is the acedemic semesters</h1>
        </div>
    );
}

export default AcademicSemester;
