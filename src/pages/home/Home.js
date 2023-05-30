import React from 'react';
import Chart from '../../components/chart/Chart';
import Features from '../../components/features/Features';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { xAxisData } from '../../datas';
import './Home.css'

export default function Home() {
  return(
    <div className='home'>
    <Features/>
    <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale'/>
    <div className='homeWidgets'>
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}
