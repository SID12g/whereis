export default function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/location">
          위치 변경
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/statics">
          통계
        </a>
      </li>
    </ul>
  );
}
