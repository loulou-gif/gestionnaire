import fondImage from "../assets/fond/interieur-du-grand-entrepot-distribution-etageres-empilees-palettes-produits-prets-pour-marche.jpg";
import Connexion from "../components/formulaires/Connexion";

function Login() {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${fondImage})`}}>
      <Connexion />
    </div>
  );
}

export default Login;
