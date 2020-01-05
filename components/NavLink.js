import { withRouter } from "next/router";

function ActiveLink({ children, router, href }) {
  const style = {
    borderBottom: router.pathname === href ? "2px solid #8c7df7" : "none",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fff",
    paddingBottom: "8px"
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
