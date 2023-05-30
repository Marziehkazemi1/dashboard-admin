import React from 'react'
import { transactions } from '../../datas'
import './WidgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>

            {transactions.map(transacion => (
                   <tr key={transacion.id} className="widgetLgTr">
                   <td className="widgetLgUser">
                       <img src={transacion.img} className='widgetLgImg' />
                       <span className='widgetLgName'>{transacion.customer}</span>
                   </td>
                   <td className="widgetLgDate">{transacion.date}</td>
                   <td className="widgetLgAmout">${transacion.amount}</td>
                   <td className="widgetLgStatus">
                       <Button type={transacion.status} />
                   </td>
               </tr>
            ))}

           

            

        </table>
    </div>
  )
}
