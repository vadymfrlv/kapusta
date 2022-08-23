import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
// import s from "./SharedLayout.module.css";
// import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
    <Link to="/">Expenses</Link>
    <Link to="/income">Income</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;