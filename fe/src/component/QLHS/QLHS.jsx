import React, { useEffect } from 'react';
import Default from '../../layout/Default';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TableInfo from '../table/Table';
import { Button } from 'antd';


const qlhs = (props) => {
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
      dataIndex: 'class',
      key: 'class',
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
    {
        title: 'sdt ph',
        dataIndex: 'sdtph',
        key: 'sdtph',
    },
  ];

  const data = [
    { 
      key: '1',
      name: 'mi',
      code: '00001',
      class: '1',
      sdt: '0333098331',
      email: 'mi@dm.com',
      sdtph: '033303331'
    },
    { 
      key: '2',
      name: 'john',
      code: '00002',
      class: '2',
      sdt: '0333098332',
      email: 'john@dm.com',
      sdtph: '033303332'
    },
    { 
      key: '3',
      name: 'jane',
      code: '00003',
      class: '3',
      sdt: '0333098333',
      email: 'jane@dm.com',
      sdtph: '033303333'
    },
    { 
      key: '4',
      name: 'peter',
      code: '00004',
      class: '4',
      sdt: '0333098334',
      email: 'peter@dm.com',
      sdtph: '033303334'
    },
    { 
      key: '5',
      name: 'mary',
      code: '00005',
      class: '5',
      sdt: '0333098335',
      email: 'mary@dm.com',
      sdtph: '033303335'
    },
    { 
      key: '6',
      name: 'james',
      code: '00006',
      class: '6',
      sdt: '0333098336',
      email: 'james@dm.com',
      sdtph: '033303336'
    },
    { 
      key: '7',
      name: 'susan',
      code: '00007',
      class: '7',
      sdt: '0333098337',
      email: 'susan@dm.com',
      sdtph: '033303337'
    },
    { 
      key: '8',
      name: 'tom',
      code: '00008',
      class: '8',
      sdt: '0333098338',
      email: 'tom@dm.com',
      sdtph: '033303338'
    },
    { 
      key: '9',
      name: 'linda',
      code: '00009',
      class: '9',
      sdt: '0333098339',
      email: 'linda@dm.com',
      sdtph: '033303339'
    },
    { 
      key: '10',
      name: 'david',
      code: '00010',
      class: '10',
      sdt: '0333098340',
      email: 'david@dm.com',
      sdtph: '033303340'
    },
    { 
      key: '11',
      name: 'emily',
      code: '00011',
      class: '11',
      sdt: '0333098341',
      email: 'emily@dm.com',
      sdtph: '033303341'
    },
    { 
      key: '12',
      name: 'michael',
      code: '00012',
      class: '12',
      sdt: '0333098342',
      email: 'michael@dm.com',
      sdtph: '033303342'
    },
    { 
      key: '13',
      name: 'sophia',
      code: '00013',
      class: '13',
      sdt: '0333098343',
      email: 'sophia@dm.com',
      sdtph: '033303343'
    },
    { 
      key: '14',
      name: 'jacob',
      code: '00014',
      class: '14',
      sdt: '0333098344',
      email: 'jacob@dm.com',
      sdtph: '033303344'
    },
    { 
      key: '15',
      name: 'olivia',
      code: '00015',
      class: '15',
      sdt: '0333098345',
      email: 'olivia@dm.com',
      sdtph: '033303345'
    },
    { 
      key: '16',
      name: 'william',
      code: '00016',
      class: '16',
      sdt: '0333098346',
      email: 'william@dm.com',
      sdtph: '033303346'
    },
    { 
      key: '17',
      name: 'ava',
      code: '00017',
      class: '17',
      sdt: '0333098347',
      email: 'ava@dm.com',
      sdtph: '033303347'
    },
    { 
      key: '18',
      name: 'ethan',
      code: '00018',
      class: '18',
      sdt: '0333098348',
      email: 'ethan@dm.com',
      sdtph: '033303348'
    },
    { 
      key: '19',
      name: 'mia',
      code: '00019',
      class: '19',
      sdt: '0333098349',
      email: 'mia@dm.com',
      sdtph: '033303349'
    },
    { 
      key: '20',
      name: 'noah',
      code: '00020',
      class: '20',
      sdt: '0333098350',
      email: 'noah@dm.com',
      sdtph: '033303350'
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

// const navigate = useNavigate();
// const handleClick= () => {
//     navigate("/qlsv/add");
// }

  return (
    <div className="w-full">
      <Default tagName="dsp">
        {/* <SearchProductLine /> */}
        <Link to="/qlsv/add">add</Link>
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

export default qlhs;