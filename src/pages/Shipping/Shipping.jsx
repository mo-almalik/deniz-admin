import { Table } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function Shipping() {
    const { t } = useTranslation()
    const columns = [
        { title: t('order'), dataIndex: 'order' },
        { title: t('date'), dataIndex: 'date' },
        { title: t('status'), dataIndex: 'status' },
        { title: t('actions'), dataIndex: 'actions', render: (text, record) => <a href="#">{t('view')}</a> },
        { title: t('details'), dataIndex: 'details', render: (text, record) => <a href="#">{t('view')}</a> },
        { title: t('tracking'), dataIndex: 'tracking' },
        { title: t('invoice'), dataIndex: 'invoice' },
        { title: t('payment'), dataIndex: 'payment' },



    ]
    const dataSource = [
        {
            key: '1',
            order: '1234567890',
            date: '2022-01-01',
            status: 'Delivered',
            actions: '',
            details: '',
            tracking: '1234567890',
            invoice: '1234567890',
            payment: '1234567890',
        },
       
    ]
        
  return <>
  <Helmet>
    <title>{t('shipping')}</title>
  </Helmet>
    <h1 className='title'>{t('shipping')}</h1>

    <Table 
        columns={columns}
        dataSource={dataSource}
        pagination={false}

  
    />

  </>
}

export default Shipping