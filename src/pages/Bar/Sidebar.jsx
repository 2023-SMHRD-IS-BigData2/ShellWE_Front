import { useContext, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { ColorModeContext, tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleLogout = () => {
        console.log("로그아웃");
        localStorage.removeItem('userId'); // 로컬 스토리지에서 userId 값을 제거

    };
    // const {colors} = useContext(ColorModeContext);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography
                style={{ color: colors.grey[100] }}
            >{title}</Typography>
            <Link onClick={handleLogout} to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const {colors} = useContext(ColorModeContext);
    const colorMode = useContext(ColorModeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");



    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
            borderRadius="20px"
        >
            <ProSidebar
                collapsed={isCollapsed}
                style={{ borderTopRightRadius: "30px" }}
                borderRadius="20px">
                <Menu iconShape="square" style={{ borderTopRightRadius: "30px" }}>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ShellWE
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box
                            mb="25px"
                        >
                            <Box display="flex" justifyContent="center" alignItems="center">
                                {
                                    <img
                                        alt="profile-user"
                                        width="90px"
                                        height="90px"
                                        src="https://i.ibb.co/w0wS6NN/smart-last-removebg-preview.png"
                                    />
                                }
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    SMART
                                </Typography>
                                <Typography variant="h5" color={colors.primary[777]}>
                                    Sepsis Monitoring and Risk Tracking
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box
                        paddingLeft={isCollapsed ? undefined : "10%"}
                    >
                        <Item
                            title="Dashboard"
                            to="/main"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Box
                            onClick={colorMode.toggleColorMode}>
                            <Item
                                title={theme.palette.mode === "dark" ? (
                                    "Light Mode"
                                ) : (
                                    "Dark Mode"
                                )}
                                icon=
                                {theme.palette.mode === "dark" ? (
                                    <DarkModeOutlinedIcon />
                                ) : (
                                    <LightModeOutlinedIcon />
                                )}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                        <Item
                            title="Log Out"
                            to="/"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>

                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
