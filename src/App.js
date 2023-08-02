import './App.css';
import Contedoress from './act-contenedores';

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Mejores escritores del mundo</h1>

      <Contedoress
        nombre="Gabriel Garcia Marquez"
        imagen="gabo"
        genero="Realismo mágico"
        pais="Colombia"
        biografia="Gabriel García Márquez fue un escritor colombiano nacido el 6 de marzo de 1927 en Aracataca, Colombia, y fallecido el 17 de abril de 2014 en Ciudad de México, México. Es reconocido como uno de los autores más importantes e influyentes del siglo XX y uno de los máximos exponentes del realismo mágico."
      />

<Contedoress
        nombre="Jhon jairo junieles"
        imagen="jhon"
        genero="Realismo mágico"
        pais="Colombia"
        biografia="John Jairo Junieles Acosta ( nacido el 26 de noviembre de 1970 ) es un colombiano escritor y poeta. Él nació en Desde colombia y estudiado en el Universidad de Cartagena y Universidad de Columbia en Nueva York. Ha escrito para numerosos medios impresos y en línea. También ha publicado una docena de volúmenes de ficción y no ficción, incluyendo poesía, cuentos y novelas"
      />

<Contedoress
        nombre="Santiago Gamboa"
        imagen = "santi"
        genero = "Novelista"
        pais = "Colombia"
        biografia = "Santiago Gamboa nació en Bogotá, Colombia, en 1965. Estudió literatura en la Universidad Javeriana de Bogotá y se licenció en Filología hispánica en la Universidad Complutense de Madrid."
      />

    </div>
  );
}

export default App;
