import { Typography, Button } from '@material-tailwind/react';

const PageNotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#040D12] p-4">
      <div className="text-center">
        <Typography
          variant="h1"
          color="white"
          className="text-8xl sm:text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          404
        </Typography>
        <Typography
          variant="h5"
          color="white"
          className="mt-4 text-lg sm:text-base md:text-xl lg:text-2xl"
        >
          Page Not Found
        </Typography>
        <Typography color="white" className="mt-2 text-sm sm:text-xs md:text-base lg:text-lg">
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Button
          className="mt-6 p-7 rounded-md bg-[#183D3D] hover:bg-[#5C8374] text-[white] py-2 px-4 sm:py-1 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-5"
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
