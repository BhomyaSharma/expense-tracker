import React from 'react'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts'

function BarChartDashboard(budgetList) {
  console.log(budgetList[0])

  const data = [
    { id: 5, name: 'Shopping', amount: 100000, icon: '😍', createdBy: 'bhomya224.be22@chitkara.edu.in' },
    { id: 4, name: 'weeknd', amount: 1222, icon: '🦄', createdBy: 'bhomya224.be22@chitkara.edu.in' },
    { id: 3, name: 'sadsa', amount: 2131, icon: '🌐', createdBy: 'bhomya224.be22@chitkara.edu.in' }
  ];


  return (
    <div className='border rounded-lg p-5'>
        <h2 className='font-bold text-lg'>Activity</h2>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top:7

      }}
      
      >
        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='totalSpend' stackId="a" fill='#E7217F'/>
        <Bar dataKey='amount' stackId="a" fill='#F376D7'/>


      </BarChart>
    </div>
  )
}

export default BarChartDashboard
