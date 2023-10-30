import React, { useEffect } from 'react';
import Default from '../../layout/Default';
// import { useNavigate } from 'react-router-dom';
import TableInfo from '../../component/table/Table';


const score = (props) => {
  'use strict';
  const { role } = props;
  const dataColumn = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tên hv',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mã hv',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Lớp',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
        title: 'Môn',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Điểm GK',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Điểm CK',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Điểm TB',
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

export default score;