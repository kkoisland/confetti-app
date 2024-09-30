import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import styles from './D3Chart.module.css';

const D3Chart = ({ data }: { data: number[] }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 500;
    const height = 300;
    const svg = d3.select(chartRef.current).attr('width', width).attr('height', height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((_, i) => i.toString()))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)!])
      .range([height, 0]);

    svg.selectAll('rect').remove(); // 前のバーを削除して更新

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(i.toString())!)
      .attr('y', (d) => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d))
      .attr('fill', 'steelblue');
  }, [data]); // データが更新されるたびに再描画

  return <svg ref={chartRef} className={styles.chart}></svg>;
};

export default D3Chart;
