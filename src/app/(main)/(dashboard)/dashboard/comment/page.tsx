'use client'
import React from 'react'
import '@/src/styles/table.scss'
import { FaDeleteLeft } from 'react-icons/fa6'
import ButtonIcon from '@/src/components/ui/button/ButtonIcon'

interface Iprops {
  _id: string
  fname: string
  lname: string
  email: string
  url: string
  message: string
  createdAt: string
}

export default function Page() {
  const DeleteHandle = (_id: string) => {}

  return (
    <div className="tableInner">
      <table className="table">
        <thead className="thead">
          {' '}
          <tr>
            <th scope="col" className="th">
              First Name
            </th>
            <th scope="col" className="th">
              Last Name
            </th>
            <th scope="col" className="th">
              Email
            </th>
            <th scope="col" className="th">
              URL
            </th>
            <th scope="col" className="th">
              Description
            </th>
            <th scope="col" className="th">
              Created Time
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
                {data.url}
              </td>
              <td scope="row" className="td">
                {data.message}
              </td>
              <td scope="row" className="td">
                {data.createdAt}
              </td>
              <td scope="row" className="td">
                <ButtonIcon onClick={() => DeleteHandle(data._id)}>
                  <FaDeleteLeft />
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
    fname: 'First Name',
    lname: 'Last Name',
    email: 'email@gmail.com',
    url: 'https://growlearnhub.com',
    message: 'This is helpful to me.',
    createdAt: '24-4-2024',
  },
  {
    _id: '1',
    fname: 'First Name',
    lname: 'Last Name',
    email: 'email@gmail.com',
    url: 'https://growlearnhub.com',
    message: 'This is helpful to me.',
    createdAt: '24-4-2024',
  },
  {
    _id: '2',
    fname: 'First Name',
    lname: 'Last Name',
    email: 'email@gmail.com',
    url: 'https://growlearnhub.com',
    message: 'This is helpful to me.',
    createdAt: '24-4-2024',
  },
]
