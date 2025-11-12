import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const RatingsChart = ({ratingdata}) => {

    return (
        <div className="ratings-chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={ratingdata}
                    layout="vertical"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis type="number" axisLine={false} tickLine={false} />

                    <YAxis
                        type="category"
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip cursor={{ fill: 'transparent' }} />

                    <Bar
                        dataKey="count"
                        fill="#FF8042"
                        barSize={30}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default RatingsChart;