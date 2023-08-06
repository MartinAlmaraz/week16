import React from 'react'
import {Table} from 'react-bootstrap'

export default function ContactPage() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
         
          <th>Email</th>
          <th>Phone</th>
          <th>Fax</th>
        </tr>
      </thead>
      <tbody>
        <tr>
       
          <td>randomEmail@fake.com</td>
          <td>123456789</td>
          <td>123456789</td>
        </tr>
       
      </tbody>
    </Table>
  )
}
