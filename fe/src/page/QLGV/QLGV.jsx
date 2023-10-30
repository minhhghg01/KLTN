import React, { useEffect } from 'react';
import Default from '../../layout/Default';
// import { useNavigate } from 'react-router-dom';
import TableInfo from '../../component/table/Table';


const qlgv = (props) => {
  'use strict';
  const { role } = props;
  const dataColumn = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tên gv',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mã gv',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Môn',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
        title: 'sdt',
        dataIndex: 'sdt',
        key: 'sdt',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Jony',
      code: '10001',
      subject: 'Toán',
      sdt: '0218221323',
      email: 'jony@gmail.com'
    },
    {
      key: '2',
      name: 'Anna',
      code: '10002',
      subject: 'Lý',
      sdt: '0329222323',
      email: 'anna@gmail.com'
    },
    {
      key: '3',
      name: 'Peter',
      code: '10003',
      subject: 'Hóa',
      sdt: '0345221323',
      email: 'peter@gmail.com'
    },
    {
      key: '4',
      name: 'Sarah',
      code: '10004',
      subject: 'Toán',
      sdt: '0455221323',
      email: 'sarah@gmail.com'
    },
    {
      key: '5',
      name: 'Michael',
      code: '10005',
      subject: 'Lý',
      sdt: '0566221323',
      email: 'michael@gmail.com'
    },
    {
      key: '6',
      name: 'David',
      code: '10006',
      subject: 'Hóa',
      sdt: '0677221323',
      email: 'david@gmail.com'
    },
    {
      key: '7',
      name: 'Emily',
      code: '10007',
      subject: 'Toán',
      sdt: '0788221323',
      email: 'emily@gmail.com'
    },
    {
      key: '8',
      name: 'Alex',
      code: '10008',
      subject: 'Lý',
      sdt: '0899221323',
      email: 'alex@gmail.com'
    },
    {
      key: '9',
      name: 'Sophia',
      code: '10009',
      subject: 'Hóa',
      sdt: '0910221323',
      email: 'sophia@gmail.com'
    },
    {
      key: '10',
      name: 'Daniel',
      code: '10010',
      subject: 'Toán',
      sdt: '0101221323',
      email: 'daniel@gmail.com'
    },
    {
      key: '11',
      name: 'Liam',
      code: '10011',
      subject: 'Lý',
      sdt: '0112221323',
      email: 'liam@gmail.com'
    }
];

//   const navigate = useNavigate();


//   const { checkMiddleware } = useAppContext();

//   const dataSource = listProductLine?.map((productline, index) => {
//     return {
//       ...productline,
//       key: index + 1,
//       createdAt: productline.createdAt.split('T')[0],
//     };
//   });

//   useEffect(() => {
//     checkMiddleware(role, () => {
//       loadListProductLine();
//     });
//   }, []);

  return (
    <div className="w-full">
      <Default tagName="dsp">
        {/* <SearchProductLine /> */}
        <div className="mt-5">
          <TableInfo
            dataColumn={dataColumn}
            dataSource={data}
            onRow={(r) => ({
              onClick: () => {
                // navigate(`/productline/${r._id}`);
              },
            })}
            // loading={isLoading}
          />
        </div>
      </Default>
    </div>
  );
};

export default qlgv;