import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Newsupdate</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ibb.co/2yX3FMJ/wp3396930-newspaper-wallpaperbackground.jpg"
        alt=""
      />
    </div>
  );
}
