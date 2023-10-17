import { Layout, Table } from "antd"
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import {Button} from "antd";
import React, { useState, useEffect } from 'react';
import TableInfo from './table/Table';

export default function TkbComponent() {
    const dateFormat= 'DD/MM/YYYY'

  const today = dayjs().format(dateFormat);

    const conlums = [
        {
            title: 'Thời gian', dataIndex: 'tiet', key: 'tiet', align: 'center',
        },
        {
            title: 'Thứ 2',
            key: 'thu2',
            align: 'center',
            render: (_, record = {}) => {
              const thu2Data = record.phongs.find(e => e.phong === 'thu2');
              if (thu2Data) {
                return <p>{thu2Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Thứ 3',
            key: 'thu3',
            align: 'center',
            render: (_, record = {}) => {
              const thu3Data = record.phongs.find(e => e.phong === 'thu3');
              if (thu3Data) {
                return <p>{thu3Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Thứ 4',
            key: 'thu4',
            align: 'center',
            render: (_, record = {}) => {
              const thu4Data = record.phongs.find(e => e.phong === 'thu4');
              if (thu4Data) {
                return <p>{thu4Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Thứ 5',
            key: 'thu5',
            align: 'center',
            render: (_, record = {}) => {
              const thu5Data = record.phongs.find(e => e.phong === 'thu5');
              if (thu5Data) {
                return <p>{thu5Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Thứ 6',
            key: 'thu6',
            align: 'center',
            render: (_, record = {}) => {
              const thu6Data = record.phongs.find(e => e.phong === 'thu6');
              if (thu6Data) {
                return <p>{thu6Data.lop}</p>;
              }
              return <></>;
            }
          },
          {
            title: 'Thứ 7',
            key: 'thu7',
            align: 'center',
            render: (_, record = {}) => {
              const thu7Data = record.phongs.find(e => e.phong === 'thu7');
              if (thu7Data) {
                return <p>{thu7Data.lop}</p>;
              }
              return <></>;
            }
          }
          
    ]

    const data = [
      {
        tiet: <p>Ca 1 <br /> 8 - 10h</p>,
        phongs: [
          { 
            phong: 'thu2', 
            lop: <p> Lớp 1 - Toán <br /> Jony - 101 </p>, 
            giaoVien: 'Jony' 
          },
          { 
            phong: 'thu3', 
            lop: <p> Lớp 2 - Lý <br /> Anna - 101 </p>, 
            giaoVien: 'Anna' 
          },
          { 
            phong: 'thu4', 
            lop: <p> Lớp 3 - Hóa <br /> Peter - 101 </p>, 
            giaoVien: 'Peter' 
          },
          { 
            phong: 'thu5', 
            lop: <p> Lớp 5 - Toán <br /> Sarah - 101 </p>, 
            giaoVien: 'Sarah' 
          },
          { 
            phong: 'thu6', 
            lop: <p> Lớp 4 - Lý <br /> Michael - 101 </p>, 
            giaoVien: 'Michael' 
          },
          { 
            phong: 'thu7', 
            lop: <p> Lớp 4 - Lý <br /> Michael - 101 </p>, 
            giaoVien: 'Michael' 
          },
        ],
      },
      {
        tiet: <p>Ca 2 <br /> 14 - 16h</p>,
        phongs: [
          { 
            phong: 'thu2', 
            lop: <p> Lớp 1 - Toán <br /> Jony - 101 </p>, 
            giaoVien: 'Jony' 
          },
          { 
            phong: 'thu5', 
            lop: <p> Lớp 2 - Hóa <br /> Sarah - 101 </p>, 
            giaoVien: 'Sarah' 
          },
        ],
      },
      {
        tiet: <p>Ca 3 <br /> 16 - 18h</p>,
        phongs: [
          { 
            phong: 'thu3', 
            lop: <p> Lớp 2 - Lý <br /> Anna - 101 </p>, 
            giaoVien: 'Anna' 
          },
          { 
            phong: 'thu4', 
            lop: <p> Lớp 3 - Hóa <br /> Peter - 101 </p>, 
            giaoVien: 'Peter' 
          },
        ],
      },
      {
        tiet: <p>Ca 4 <br /> 19 - 21h</p>,
        phongs: [
          { 
            phong: 'thu2', 
            lop: <p> Lớp 1 - Toán <br /> Jony - 101 </p>, 
            giaoVien: 'Jony' 
          },
          { 
            phong: 'thu6', 
            lop: <p> Lớp 4 - Lý <br /> Michael - 101 </p>, 
            giaoVien: 'Michael' 
          },
        ],
      }
    ];
    
    

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
            <Table style={{ textAlign: 'center' }} dataSource={data} columns={conlums}  />
        </Layout>
    )
}