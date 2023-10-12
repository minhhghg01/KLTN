import { Layout, Table } from "antd"
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import {Button} from "antd";
import React, { useState, useEffect } from 'react';

export default function TkbComponent() {
    const dateFormat= 'DD/MM/YYYY'
    // const [today, setToday] = useState(null);

  // useEffect(() => {
  //   const date = new Date();
  //   const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  //   setToday(formattedDate);
  // }, []);

  const today = dayjs().format(dateFormat);

    const conlums = [
        {
            title: 'Tiết', dataIndex: 'tiet', key: 'tiet'
        },
        {
            title: 'Phòng 1',
            key: 'phong1',
            render: (_, record = {}) => {
              const phong1Data = record.phongs.find(e => e.phong === 'phong1');
              if (phong1Data) {
                return <p>{phong1Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Phòng 2',
            key: 'phong2',
            render: (_, record = {}) => {
              const phong2Data = record.phongs.find(e => e.phong === 'phong2');
              if (phong2Data) {
                return <p>{phong2Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Phòng 3',
            key: 'phong3',
            render: (_, record = {}) => {
              const phong3Data = record.phongs.find(e => e.phong === 'phong3');
              if (phong3Data) {
                return <p>{phong3Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Phòng 4',
            key: 'phong4',
            render: (_, record = {}) => {
              const phong4Data = record.phongs.find(e => e.phong === 'phong4');
              if (phong4Data) {
                return <p>{phong4Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Phòng 5',
            key: 'phong5',
            render: (_, record = {}) => {
              const phong5Data = record.phongs.find(e => e.phong === 'phong5');
              if (phong5Data) {
                return <p>{phong5Data.lop}</p>;
              }
              return <></>;
            }
          }
          
    ]

    const data = [
        {
            tiet: 'ca 1 8-10h',
            phongs:[
              {phong:'phong5',lop:'Lớp 1 - Toán - Ming'},
              {phong:'phong4',lop:'Lớp 2 - Hóa - Mig'},
              {phong:'phong3',lop:'Lớp 3 - Hóa - Min'},
              {phong:'phong2',lop:'Lớp 2 - Hóa - Mih'},
              {phong:'phong1',lop:'Lớp 1 - Hóa - Mik'},
            ],
        },
        {
            tiet: 'ca 2 14-16h',
            phongs:[
                {phong:'phong1',lop:'lop1'},
                {phong:'phong4',lop:'lop2'},
              ],
        },
        {
            tiet: 'ca 3 16-18h',
            phongs:[
                {phong:'phong1',lop:'lop1'},
                {phong:'phong4',lop:'lop2'},
              ],
        },
        {
            tiet: 'ca 4 19-21h ',
            phongs:[
                {phong:'phong1',lop:'lop1'},
                {phong:'phong4',lop:'lop2'},
              ],
        }
    ]

    const converdata = (data) => {
        const res = [
            {
              tiet: "tiet",
              phongs: [],
            },
          ];
      
          for (let i = 0; i < data.length; i++) {
            data[i].tiets.forEach((tiet) => {
              res.forEach((e2) => {
                if (e2.tiet === tiet.tiet) {
                  e2.phongs.push({
                    phong: data[i].phong,
                    class: tiet.class,
                  });
                  return;
                }
              });
            });
          }
          return res;
    }

    
    return (
        <Layout>
            <div>
                <Button></Button>
                <DatePicker defaultValue={dayjs(today, dateFormat)} format={dateFormat} />
                <Button></Button>
            </div>
            <Table dataSource={data} columns={conlums} />
        </Layout>
    )
}