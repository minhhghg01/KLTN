import React, { useEffect } from 'react';
import Default from '../../layout/Default';
// import { useNavigate } from 'react-router-dom';
import TableInfo from '../table/Table';


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
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
        title: 'sdt',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'email',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
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
            // dataSource={dataSource}
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