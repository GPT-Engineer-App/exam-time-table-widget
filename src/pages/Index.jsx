import React from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const Index = () => {
  // Sample exam data
  const exams = [
    { subject: "Math", date: "2023-05-10", time: "09:00 AM", room: "101" },
    { subject: "English", date: "2023-05-12", time: "11:00 AM", room: "201" },
    { subject: "Science", date: "2023-05-15", time: "02:00 PM", room: "301" },
    { subject: "History", date: "2023-05-18", time: "10:00 AM", room: "102" },
    { subject: "Geography", date: "2023-05-20", time: "01:00 PM", room: "202" },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Exam Time Table
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Subject</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Room</Th>
            </Tr>
          </Thead>
          <Tbody>
            {exams.map((exam, index) => (
              <Tr key={index}>
                <Td>{exam.subject}</Td>
                <Td>{exam.date}</Td>
                <Td>{exam.time}</Td>
                <Td>{exam.room}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
