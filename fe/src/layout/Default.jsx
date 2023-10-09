import React, { useEffect, useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

const Default = (props) => {
  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar
        open={true}
        tag={props.tagName}
        childrenTag={props.childrenName}
        onClick={() => console.log(22)}
      />
      <div className={`${'basis-5/6'} h-full`}>
        <Header
          visible={true}
        />
        <div
          className="bg-white mt-2 ml-3 rounded-xl h-[calc(100%-75px)] overflow-y-scroll"
          style={{ zIndex: 1 }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Default;