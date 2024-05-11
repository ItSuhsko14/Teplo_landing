import React, { useState } from "react";
let styles = require("./headline.module.css");
import logo from "./logo.png";

import telegram from "./telegram.png";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {}

const HeadLine: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <div className={styles.container}>
      <div>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.buttoncontainer}>
        <button className={styles.button}>Підтримати</button>
      </div>
      <div className={styles.menucontainer}>
        <img src={telegram} className={styles.telegram} />
        <div className={styles.burgercontainer}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button>
                <ListItemText primary="Пункт меню 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Пункт меню 2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Пункт меню 3" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;
