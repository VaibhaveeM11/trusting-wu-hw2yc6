import React from "react";
import { SideNavOption } from "../../constants/sideNavOption";
import { StyledUIlist, StyledNavBar, StyledNavTitle } from "./SideNavStyle";

const SideNav: React.FC<{}> = () => {
  return (
    <StyledNavBar>
      <StyledUIlist>
        <StyledNavTitle> DevTrack </StyledNavTitle>
        {SideNavOption.map((option, i) => {
          return <li key={`${option + i}`}>{option}</li>;
        })}
      </StyledUIlist>
    </StyledNavBar>
  );
};

export default SideNav;
