import React, { useEffect, useState } from 'react';

function Studentcard() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('/api/getenrollments', {
                    method: "GET",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch student details");
                }

                const data = await response.json();
                setStudents(data.enrollments);
            } catch (error) {
                console.error("Error fetching Student Details:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-center text-2xl font-bold mb-4">Student Details</h2>

            {loading && (
                <div className="text-center">
                    <p className="text-lg">Loading Details...</p>
                   
                </div>
            )}

            {error && (
                <p className="text-center text-red-600 font-semibold">
                    {error}
                </p>
            )}

            {!loading && !error && students.length === 0 && (
                <p className="text-center text-gray-500">No students enrolled yet.</p>
            )}

            {!loading && !error && students.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {students.map((student) => (
                        <div key={student.enrollmentnum} className="border p-4 rounded-lg shadow-lg bg-white">
                            <h3 className="text-xl font-semibold text-blue-600">{student.studentname}</h3>
                            <p><strong>Enrollment Number:</strong> {student.enrollmentnum}</p>
                            <p><strong>Course:</strong> {student.coursename}</p>
                            <p><strong>Date of Enrollment:</strong> {student.dateofenrollement}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Studentcard;
