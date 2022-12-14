import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://ed-web-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="lg:fixed lg:mt-14">
            <h1 className="text-3xl my-10 font-bold">Course Category: {courses.length}</h1>
            <div className="overflow-x-auto">
                <div className="table w-full lg:w-[22vw]">
                    {
                        courses.map(course =>
                            <Link to={`/course/${course.id}`} className="w-full" key={course.id}><h1 className="bg-blue-100 py-4 my-1 pl-4 text-2xl font-bold rounded-lg hover:bg-blue-200">{course.name}</h1></Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar;