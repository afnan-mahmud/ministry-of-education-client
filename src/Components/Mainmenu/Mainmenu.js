import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mainmenu = () => {
  const [boardOpen, setboardOpen] = useState(true);
  const [boardName, setBoardName] = useState([]);

  const importantLink = [
    {
      name: "Education Board Computer Center",
      link: "/education-board-computer-center",
    },
    { name: "Exam Info Bank", link: "/exam-info-bank" },
    { name: "Site Map", link: "/site-map" },
    { name: "Bangladesh Gov. Website", link: "/bangladesh-gov-website" },
    { name: "Members", link: "/members" },
    { name: "Forms of Bangladesh Gov.", link: "/forms-of-bangladesh-gov" },
    { name: "FAQs", link: "/faqs" },
    { name: "Feedback", link: "/feedback" },
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Accessibillity", link: "/accissibillity" },
  ];

  const handleBoardList = () => {
    setboardOpen(!boardOpen);
  };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        const board = data.boards;
        setBoardName(board);
      });
  }, []);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          boxShadow: "7px 4px 28px -3px rgba(0,0,0,0.66)",
          borderRadius: "10px",
        }}
        // style={{
        //   backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        // }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
      >
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Divider />
        <ListItemButton onClick={handleBoardList}>
          <ListItemText primary="Boards" />
          {boardOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={!boardOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {boardName.map((board) => (
              <>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={board.link}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={board.name} />
                  </ListItemButton>
                </Link>
              </>
            ))}
          </List>
        </Collapse>
        <Divider />
        {importantLink.map((link) => (
          <>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={link.link}
            >
              <ListItemButton>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </Link>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};

export default Mainmenu;
