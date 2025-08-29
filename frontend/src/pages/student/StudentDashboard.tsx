import { useState } from "react";
import { Sidebar, Table } from "flowbite-react";
import { HiBookOpen, HiCalendar, HiChartBar } from "react-icons/hi";

export default function StudentDashboard() {
  const [selected, setSelected] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar aria-label="Student Dashboard Sidebar" className="w-64">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiBookOpen} onClick={() => setSelected("courses")}>
              My Courses
            </Sidebar.Item>
            <Sidebar.Item icon={HiCalendar} onClick={() => setSelected("schedule")}>
              My Schedule
            </Sidebar.Item>
            <Sidebar.Item icon={HiChartBar} onClick={() => setSelected("reports")}>
              Attendance Report
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selected === "overview" && (
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Student 👋</h1>
        )}
        {selected === "courses" && <Section title="📘 My Courses" desc="View the list of courses you are enrolled in." />}
        {selected === "schedule" && <Section title="📅 My Schedule" desc="View your class timetable." />}
        {selected === "reports" && <AttendanceReport />}
      </div>
    </div>
  );
}

function Section({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

function AttendanceReport() {
  const reports = [
    { subject: "Java", attendance: "85%" },
    { subject: "Spring Boot", attendance: "70%" },
    { subject: "React", attendance: "90%" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📊 Attendance Report</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Attendance %</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {reports.map((r, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>{r.subject}</Table.Cell>
              <Table.Cell>{r.attendance}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
