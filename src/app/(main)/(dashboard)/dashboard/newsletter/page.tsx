'use client'
import React from 'react'
import '@/src/styles/table.scss'
import { FaDeleteLeft } from 'react-icons/fa6'
import ButtonIcon from '@/src/components/ui/button/ButtonIcon'

interface Iprops {
  _id: string
  email: string
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
              Email
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
                {data.email}
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
    email: 'google@gmail.com',
  },
  {
    _id: '1',
    email: 'google@gmail.com',
  },
  {
    _id: '2',
    email: 'google@gmail.com',
  },
]
