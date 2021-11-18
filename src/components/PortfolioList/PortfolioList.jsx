import "./portfolioList.scss";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={"portfolioList " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
