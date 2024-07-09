import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  BarChart as BarChartIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  Description as DescriptionIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import Logo from "../Icons/Logo"

const Sidebar = () => {
  return (
    <div className="h-screen flex">
      <Card className="h-full w-full sm:max-w-[16rem] md:max-w-[22rem] p-4 shadow-xl shadow-[#183D3D]/50 rounded-none relative flex flex-col bg-[#183D3D] text-[#93B1A6]">
        <div className="mb-2 flex items-center gap-4 p-4 bg-[#93B1A6] rounded-md">
          <Logo></Logo>
          <Typography variant="h5" color="#040D12" className="text-[#040D12]">
            SysMoney
          </Typography>
        </div>
        <List className="flex-1 overflow-auto">
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <BarChartIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <Link className="ml-2 p-1" to={"/Dashboard"}>Dashboard</Link>
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <ShoppingCartIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <Link className="ml-2 p-1" to={"/GoalPanel"}>Meta Financiera</Link>
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <AccountCircleIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <Link className="ml-2 p-1" to={"/AddTransaction"}>Finanzas</Link>
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <DescriptionIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <Link className="ml-2" to={"/GenerateReport"}>Reporte Financiero</Link>
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <PersonIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <Link className="ml-2" to={"/ProfilePanel"}>Perfil</Link>
          </ListItem>
        </List>
        <div className="mt-auto">
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <PowerSettingsNewIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            <p className="ml-2">Log Out</p>
          </ListItem>
        </div>
      </Card>
    </div>
  );
}

export default Sidebar;
