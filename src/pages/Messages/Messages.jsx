import { Table } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function Messages() {
    const {t} = useTranslation()
    const messages =[
        {id:1, name: 'محمد علي', message: 'مرحباً بكم في محلنا', createdAt: new Date()},
        {id:2, name: 'احمد علي', message: 'عزيزي، شكراً لكم', createdAt: new Date()},
    ]
    const columns = [
        {title: t('name'), dataIndex: 'name', key: 'name'},
        {title: t('message'), dataIndex: 'message', key: 'message'},
        {title: t('date'), dataIndex: 'createdAt', key: 'createdAt', render: (date) => <span>{date.toLocaleString()}</span>},
    ]
  return <>
      <Helmet>
        <title>{t('messages')}</title>
    </Helmet>
     <h1 className='title'>{t('messages')}</h1>

     <Table 
        columns={columns}
        dataSource={messages}
     />
  </>
}

export default Messages