import VUWrapper from '@/src/app/(class)/vu/VUWrapper'

export default function Page() {
  return (
    <VUWrapper title="VU CS201 Mid Term Abbreviations">
      <div className="relative overflow-x-auto my-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <tbody>
            {data.map((data: any) => {
              return (
                <tr className="bg-white border-b" key={data.name}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-lg"
                  >
                    {data.title}
                  </th>
                  <td className="px-6 py-4 text-lg">{data.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </VUWrapper>
  )
}

const data = [
  {
    title: 'PIA',
    name: 'Pakistan International Airline',
  },
  {
    title: 'PIA',
    name: 'Pakistan International Airline',
  },
  {
    title: 'PIA',
    name: 'Pakistan International Airline',
  },
]
