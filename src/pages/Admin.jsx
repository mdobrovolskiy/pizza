import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Admin = () => {
  const [orders, setOrders] = useState()

  useEffect(() => {
    fetch('https://640f5af14ed25579dc4d0528.mockapi.io/orders')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setOrders(arr)
      })
  }, [])

  console.log(orders)

  return (
    <div>
      Ваши заказы:{' '}
      {orders && orders.map((item, i) => <h1 key={i}>{item.title}</h1>)}
    </div>
  )
}

export default Admin
