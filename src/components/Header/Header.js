import React, { useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCode } from "../../features/service/serviceSlice";
import { getLanguages } from "../../features/languages/languageSlice";
import "./Header.css";

function Header() {
  const [current, setCurrent] = useState("select language");
  let dispatch = useDispatch();
  let { data } = useSelector((state) => state.language);

  const handleSelect = (e) => {
    dispatch(changeCode(e));
    setCurrent(e);
  };

  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <Container fluid className="header">
      <Container className="content">
        <DropdownButton
          title={current}
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
          data-testid="dropdown"
        >
          {data.map((item) => (
            <Dropdown.Item
              eventKey={item.code}
              className="d-flex justify-content-between"
              key={item.id}
              data-testid="lang"
            >
              <p className="align-self-center">{item.code}</p>
              <img
                src={item.flag}
                style={{ width: 20, height: 20 }}
                alt="country-flag"
              />
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Container>
    </Container>
  );
}

export default Header;
