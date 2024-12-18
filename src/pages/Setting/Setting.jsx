import { Tabs } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function Setting() {
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'بيانات الشركة',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'اضافة عمل',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ];
  return <>
  <Helmet>
    <title>
        Setting Page
    </title>
  </Helmet>
    <h1>Setting Page</h1>

    <div>

    </div>
  </>
}

export default Setting