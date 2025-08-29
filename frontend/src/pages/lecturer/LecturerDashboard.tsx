import { useState } from "react";
import { Sidebar, Table, Checkbox } from "flowbite-react";
import { HiBookOpen, HiCalendar, HiClipboardCheck } from "react-icons/hi";

export default function LecturerDashboard() {
  const [selected, setSelected] = useState("overview");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar aria-label="Lecturer Dashboard Sidebar" className="w-64">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiBookOpen} onClick={() => setSelected("subjects")}>
              Assigned Subjects
            </Sidebar.Item>
            <Sidebar.Item icon={HiCalendar} onClick={() => setSelected("classes")}>
              Today’s Classes
            </Sidebar.Item>
            <Sidebar.Item icon={HiClipboardCheck} onClick={() => setSelected("attendance")}>
              Mark Attendance
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selected === "overview" && (
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Lecturer 👋</h1>
        )}
        {selected === "subjects" && <Section title="📘 Assigned Subjects" desc="List of subjects you are teaching this semester." />}
        {selected === "classes" && <Section title="📅 Today’s Classes" desc="View your scheduled classes for today." />}
        {selected === "attendance" && <AttendanceTable />}
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

function AttendanceTable() {
  const students = [
    { id: "s1", name: "John Doe" },
    { id: "s2", name: "Jane Smith" },
    { id: "s3", name: "Mark Lee" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">✅ Mark Attendance</h2>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Student Name</Table.HeadCell>
          <Table.HeadCell>Present</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {students.map((stu) => (
            <Table.Row key={stu.id}>
              <Table.Cell>{stu.name}</Table.Cell>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
