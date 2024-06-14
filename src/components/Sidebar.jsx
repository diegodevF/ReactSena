import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="h-screen flex">
      <Card className="h-full w-full sm:max-w-[16rem] md:max-w-[22rem] p-4 shadow-xl shadow-[#183D3D]/50 rounded-none relative flex flex-col bg-[#183D3D] text-[#93B1A6]">
        <div className="mb-2 flex items-center gap-4 p-4 bg-[#93B1A6] rounded-md">
          <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
          <Typography variant="h5" color="#040D12" className="text-[#040D12]">
            SysMoney
          </Typography>
        </div>
        <List className="flex-1 overflow-auto">
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </List>
        <div className="mt-auto">
          <ListItem className="hover:bg-[#5C8374] rounded-md">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5 text-[#93B1A6]" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </div>
      </Card>
    </div>
  );
}

export default Sidebar;
