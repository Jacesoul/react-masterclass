import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              type: "datetime",
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              type: "gradient",
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        ></ApexChart>
      )}
    </div>
  );
}

export default Chart;
