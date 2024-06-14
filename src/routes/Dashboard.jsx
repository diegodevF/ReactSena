import Sidebar from '../components/Sidebar';
import { Typography, Card } from '@material-tailwind/react';
import { PieChart, LineChart, Line, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const dataLine = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 349, pv: 4300, amt: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#D9D9D9]">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <Card className="p-4 bg-[#183D3D] text-[#93B1A6] mb-6">
          <Typography variant="h4" color="#93B1A6" className="mb-4">
            Welcome, User!
          </Typography>
          <Typography color="#93B1A6">
            Here you can see an overview of your data. Check the charts below for detailed insights.
          </Typography>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 bg-[#183D3D] text-[#93B1A6]">
            <Typography variant="h6" color="#93B1A6" className="mb-4">
              Pie Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={dataPie} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          <Card className="p-4 bg-[#183D3D] text-[#93B1A6]">
            <Typography variant="h6" color="#93B1A6" className="mb-4">
              Pie Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={dataPie} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <Card className="p-4 bg-[#183D3D] text-[#93B1A6]">
          <Typography variant="h6" color="#93B1A6" className="mb-4">
            Line Chart
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLine}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
