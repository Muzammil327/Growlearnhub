'use client'
import React from 'react'
import '@/src/styles/table.scss'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FaRegEdit } from 'react-icons/fa'
import ButtonOutline from '@/src/components/ui/button/ButtonOutline'
import ButtonIcon from '@/src/components/ui/button/ButtonIcon'

interface Iprops {
  _id: string
  fname: string
  lname: string
  email: string
}

export default function Page() {
  const DeleteHandle = (_id: string) => {}

  return (
    <div className="tableInner">
      <ButtonOutline>Add Mcqs</ButtonOutline>
      <table className="table">
        <thead className="thead">
          {' '}
          <tr>
            <th scope="col" className="th">
              Book Name
            </th>
            <th scope="col" className="th">
              File ID
            </th>
            <th scope="col" className="th">
              Class
            </th>
            <th scope="col" className="th">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((data: Iprops) => (
            <tr key={data._id} className="tr">
              <td scope="row" className="td">
                {data.fname}
              </td>
              <td scope="row" className="td">
                {data.lname}
              </td>
              <td scope="row" className="td">
                {data.email}
              </td>
              <td scope="row" className="td">
                <ButtonIcon onClick={() => DeleteHandle(data._id)}>
                  <FaDeleteLeft />
                </ButtonIcon>
                <ButtonIcon>
                  <FaRegEdit />
                </ButtonIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const data: Iprops[] = [
  {
    _id: '0',
    fname: 'Book Name',
    lname: 'File ID',
    email: 'Class',
  },
  {
    _id: '1',
    fname: 'Book Name',
    lname: 'File ID',
    email: 'Class',
  },
  {
    _id: '2',
    fname: 'Book Name',
    lname: 'File ID',
    email: 'Class',
  },
]
