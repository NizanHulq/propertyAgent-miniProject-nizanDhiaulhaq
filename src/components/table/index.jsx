import { Table } from "reactstrap";
import Layout from "../layout";

export default function MyTable(props) {
  const { data, handleRowClick } = props;

  // console.log(data);
  return (
    <>
      <Table
        hover
        responsive
        size=""
        striped
      >
        <thead>
          <tr>
            <th>
              No
            </th>
            <th>
              Nama
            </th>
            <th>
              Nomor Telepon
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => { handleRowClick(item.id) }}>
              <th scope="row">
                {index + 1}
              </th>
              <td>
                {item.name}
              </td>
              <td>
                {item.phone}
              </td>
              <td>
                {item.email}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>

  );
}
