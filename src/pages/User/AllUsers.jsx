import { Table } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function AllUsers() {
   const { t } = useTranslation()
   const users=[
     {id:1, name: 'John Doe', email: 'john.doe@example.com',phone:"0905002024",role:"admin"},
     {id:2, name: 'Jane Doe', email: 'jane.doe@example.com',phone:"0905002024",role:"admin"},
 
   ]

   const columns =[
     { title:"#", dataIndex: 'id', key: 'id' },
     { title: t('name'), dataIndex: 'name', key: 'name' },
     { title: t('email'), dataIndex: 'email', key: 'email' },
     { title: t('phone'), dataIndex: 'phone', key: 'phone' },
     { title: t('role'), dataIndex: 'role', key: 'role' },
   ]
   
    return <>
    <Helmet>
        <title>{t('all-users')}</title>
    </Helmet>
     <h1 className='title'>{t('all-users')}</h1>

     <Table 
        columns={columns}
        dataSource={users}
     />
    </>
}

export default AllUsers