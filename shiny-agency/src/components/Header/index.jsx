import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav>
      <Link to="/"> Acceuil</Link>
      <Link to="/survey">Questionnaire</Link>
      <Link to="/survey/42">Questionnaire</Link>
      <Link to="/freelance">Profil</Link>
    </nav>
  );
}
export default Header;
