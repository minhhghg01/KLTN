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
          { phong: 'thu2', lop: <p> Lớp 1 - Toán <br /> Jony - 101 </p>, giaoVien: 'Jony' },
          { phong: 'thu3', lop: 'Lớp 2 - Lý - Anna - 101', giaoVien: 'Anna' },
          { phong: 'thu4', lop: 'Lớp 3 - Hóa - Peter - 101', giaoVien: 'Peter' },
          { phong: 'thu5', lop: 'Lớp 5 - Toán - Sarah - 101', giaoVien: 'Sarah' },
          { phong: 'thu6', lop: 'Lớp 4 - Lý - Michael - 101', giaoVien: 'Michael' },
          { phong: 'thu7', lop: 'Lớp 4 - Lý - Michael - 101', giaoVien: 'Michael' },
        ],
      },
      {
        tiet: 'ca 2 14-16h',
        phongs: [
          { phong: 'thu2', lop: 'Lớp 1 - Toán - Jony', giaoVien: 'Jony' },
          { phong: 'thu5', lop: 'Lớp 2 - Hóa - Sarah', giaoVien: 'Sarah' },
        ],
      },
      {
        tiet: 'ca 3 16-18h',
        phongs: [
          { phong: 'thu3', lop: 'Lớp 2 - Lý - Anna', giaoVien: 'Anna' },
          { phong: 'thu4', lop: 'Lớp 3 - Hóa - Peter', giaoVien: 'Peter' },
        ],
      },
      {
        tiet: 'ca 4 19-21h',
        phongs: [
          { phong: 'thu2', lop: 'Lớp 1 - Toán - Jony', giaoVien: 'Jony' },
          { phong: 'thu6', lop: 'Lớp 4 - Lý - Michael', giaoVien: 'Michael' },
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