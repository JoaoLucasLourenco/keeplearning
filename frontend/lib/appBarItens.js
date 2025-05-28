import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const appBarItems = [
  {
    icon: <TrendingUpIcon />,
    urlPath: "/dashboard",
    textContent: "Dashboard",
  },
  {
    icon: <BookOutlinedIcon />,
    urlPath: "/courses_disciplines/courses",
    textContent: "Cursos e disciplinas",
  },
  {
    icon: <GroupsOutlinedIcon />,
    urlPath: "##",
    textContent: "Turma",
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    urlPath: "###",
    textContent: "Meus dados",
  },
];

export { appBarItems };
