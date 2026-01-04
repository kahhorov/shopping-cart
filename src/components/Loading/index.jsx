import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <Box>
      <Skeleton height={400} animation="pulse" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton width={140} animation={"wave"} />
      <div className="flex justify-between">
        <Skeleton width={70} animation="wave" />
        <Skeleton width={70} animation="wave" />
      </div>
    </Box>
  );
}
