import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineIdcard,
  AiOutlineReload,
} from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, isExpand] = useState(false);
  const [navColour, isNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      isNavColour(window.scrollY >= 20);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: AiOutlineHome },
    { to: "/projects", label: "Projects", icon: AiOutlineFolderOpen },
    {
      to: "/skills",
      label: "Skills",
      icon: AiOutlineFundProjectionScreen,
    },
    { to: "/chat", label: "Chat", icon: IoChatbubbleEllipsesOutline },
    { to: "/resume", label: "Resume", icon: AiOutlineIdcard },
    { to: "/portfolio", label: "Portfolio", icon: CgFileDocument },
    { to: "/about", label: "About", icon: AiOutlineUser },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <div>
            <AiOutlineReload style={{ marginBottom: "2px" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            isExpand((current) => !current);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Nav.Item key={to}>
                <Nav.Link as={Link} to={to} onClick={() => isExpand(false)}>
                  <Icon style={{ marginBottom: "2px" }} /> {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
