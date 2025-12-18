import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/registry/default/displayui/Table"

const PreviewTable = () => {
  const tableData = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Emma Johnson",
      email: "emma.j@email.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Liam Brown",
      email: "liam.b@email.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 4,
      name: "Olivia Davis",
      email: "olivia.d@email.com",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      name: "Noah Wilson",
      email: "noah.w@email.com",
      role: "Editor",
      status: "Suspended",
    },
    {
      id: 6,
      name: "Ava Taylor",
      email: "ava.t@email.com",
      role: "User",
      status: "Active",
    },
    {
      id: 7,
      name: "James Martin",
      email: "james.m@email.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Sophia Clark",
      email: "sophia.c@email.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 9,
      name: "Mason Lee",
      email: "mason.l@email.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 10,
      name: "Isabella Hall",
      email: "isabella.h@email.com",
      role: "User",
      status: "Active",
    },
  ]
  return (
    <>
      <div className="flex justify-center items-center">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr no.</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.role}</TableCell>
                  <TableCell>
                    <span
                      className={`p-1 rounded-lg 
                          ${data.status === "Active" && "bg-green-400 "} 
                          ${data.status === "Inactive" && "bg-yellow-400 "} 
                          ${data.status === "Suspended" && "bg-red-500 "}`}
                    >
                      {data.status}
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default PreviewTable
