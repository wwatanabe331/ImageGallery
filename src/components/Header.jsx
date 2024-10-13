import dove from "../Image/dove.png";

export default function Header() {
  return (
    <header>
      <h1>Birdwatching</h1>
      <img src={dove} alt="a simple dove logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Get started</a>
          </li>
          <li>
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Gear</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
