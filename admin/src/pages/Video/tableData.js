/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { Avatar, Icon } from "@mui/material";
import Badge from "components/Badge";
import { Link } from "react-router-dom";
import { useGetVideos } from "queries/StoreQuery";

function Videos({ name, desc }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>

      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetVideos({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "Videos", align: "left" },
    { name: "url", align: "center" },
    { name: "status", align: "center" },
    { name: "createdon", align: "center" },
    { name: "Lastupdated", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    Videos: <Videos  name={item?.title} desc={item?.subtitle} />,
    url: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        <a href={item?.url}>{item?.url?.slice(0,30)}</a>
      </Typography>
    ),
    status: (
      <Badge variant="gradient" badgeContent={item?.status ? 'Available' : 'Unavailable'} color={item?.status ? "success" : 'secondary'} size="xs" container />
    ),
    createdon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Lastupdated: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.updatedAt).toDateString()}
      </Typography>
    ),
    action: (
      <Link to={`/videos/editvideo/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
