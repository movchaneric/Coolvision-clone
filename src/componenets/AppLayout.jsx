import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AppLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
