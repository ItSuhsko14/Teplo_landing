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
import CloseIcon from "@mui/icons-material/Close";

interface HeaderProps {}

const HeadLine: React.FC = ({}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const menuList = [
    { name: "Про нас", link: "#about" },
    { name: "Наші досягнення", link: "#stat" },
    { name: "Конвертуємо донати", link: "#howwetowork" },
    { name: "Телеграм канал", link: "#telegram" },
    { name: "Детальніше про тепло", link: "#detailed" },
    { name: "Позиції допомоги", link: "#position" },
    { name: "Наша команда", link: "#team" },
  ];

  return (
    <div className={styles.container}>
      <div>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.buttoncontainer}>
        <a href="https://send.monobank.ua/jar/pAH2wwD8n" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Підтримати</button>
        </a>
      </div>
      <div className={styles.menucontainer}>
        <a href="https://t.me/teplonaperedovu" target="_blank" rel="noopener noreferrer">
          <img src={telegram} className={styles.telegram} />
        </a>
        <div className={styles.burgercontainer}>
          <IconButton onClick={toggleDrawer(!open)} color="inherit">
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            style={{
              backgroundColor: "transparent",
              width: "100%",
            }}
          >
            <div className={styles.menuContainer}>
              <IconButton className={styles.closeButton} onClick={toggleDrawer(false)} color="inherit">
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <List>
                {menuList.map((menu) => (
                  <a href={menu.link} className={styles.menuItem} onClick={() => setOpen(false)}>
                    <ListItem key={menu.name} className={styles.menuItem}>
                      <ListItemText primary={menu.name} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default HeadLine;
