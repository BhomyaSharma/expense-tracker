"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard({budgetList}) {
  console.log(budgetList[0])

  // const data = [
  //   { id: 6, name: 'Shopping', amount: 10000, icon: '👜', createdBy: 'chahat231.be22@chitkara.edu.in' },
  //   { id: 5, name: 'Home Decor', amount: 10000, icon: '🦩', createdBy: 'chahat231.be22@chitkara.edu.in' },
  //   { id: 4, name: 'Salon', amount: 5000, icon: '🐻', createdBy: 'chahat231.be22@chitkara.edu.in' },
  //   { id: 3, name: 'Dinner', amount: 5000, icon: '🥐', createdBy: 'chahat231.be22@chitkara.edu.in' }
  // ];
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  


  return (
    isClient ?
    <div className='border rounded-lg p-5'>
        <h2 className='font-bold text-lg'>Activity</h2>
      <BarChart
      width={500}
      height={300}
      data={budgetList}
      margin={{
        top:5,
        right:5,
        left:5,
        bottom:5,

      }}
      
      >
        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='totalSpend' stackId="a" fill='#E7217F'/>
        <Bar dataKey='amount' stackId="a" fill='#F376D7'/>


      </BarChart>
    </div> : <></>
  )
}

export default BarChartDashboard
