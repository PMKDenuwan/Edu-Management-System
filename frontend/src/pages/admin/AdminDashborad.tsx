import { useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiBookOpen, HiUsers, HiAcademicCap, HiCalendar } from "react-icons/hi";

export default function AdminDashboard() {
  const [selected, setSelected] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar aria-label="Admin Dashboard Sidebar" className="w-64">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiBookOpen} onClick={() => setSelected("courses")}>
              Manage Courses
            </Sidebar.Item>
            <Sidebar.Item icon={HiUsers} onClick={() => setSelected("students")}>
              Manage Students
            </Sidebar.Item>
            <Sidebar.Item icon={HiAcademicCap} onClick={() => setSelected("lecturers")}>
              Manage Lecturers
            </Sidebar.Item>
            <Sidebar.Item icon={HiCalendar} onClick={() => setSelected("classes")}>
              Schedule Classes
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selected === "overview" && (
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin 👋</h1>
        )}

        {selected === "courses" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📚 Course Management</h2>
            <p>Here you can add, edit, or delete courses and assign subjects.</p>
          </div>
        )}

        {selected === "students" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">👨‍🎓 Student Management</h2>
            <p>Register students, update details, and manage enrollments.</p>
          </div>
        )}

        {selected === "lecturers" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">👩‍🏫 Lecturer Management</h2>
            <p>Manage lecturer profiles and assign subjects.</p>
          </div>
        )}

        {selected === "classes" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📅 Class Scheduling</h2>
            <p>Schedule new classes and assign lecturers + subjects.</p>
          </div>
        )}
      </div>
    </div>
  );
}
