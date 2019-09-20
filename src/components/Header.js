import React , {Component} from 'react';
import '../styles/Header.css'


export default class Header extends Component{
  render(){
    return(
      <header>
        <div>
           <nav id="navigation">
              <ul>
                <li className="menu-home">
                  <a href="#" className="lien">  CamCar </a>
                </li>
                <li className="menu-dcouv">
                  <a href="#" className="lien"> En savoir plus </a>
                  <ul className="submenucouv">
                    <li><a href="#" className="lien"> Fonctionnement de CamCar </a></li>
                    <li><a href="#" className="lien"> Reserver une voiture</a></li>
                    <li><a href="#" className="lien"> Gagner de l'argent avec une voiture </a></li>
                    <li><a href="#" className="lien"> Calculator </a></li>
                    <li><a href="#" className="lien"> Carcam pour voyageur d'affaire</a></li>
                    <li><a href="#" className="lien"> Hôtes vedettes </a></li>
                    <li><a href="#" className="lien"> Sécurité </a></li>
                    <li><a href="#" className="lien"> Contacter le Service à la clientelle </a></li>
                  </ul>
                </li>
                <li className="menu-dcap">
                  <a href="#" className="lien"> inscription </a>
                </li>
                <li className="menu-res"> 
                  <a href="#" className="lien"> connexion </a>
                </li>
              </ul>
            </nav>

        </div>
        <div className="header"> 
          <br/>
          <h1>  Mieux qu'une auto de location  </h1>
          <h3> Réservez des voitures uniques au près des hôtes de confinaces à travers le Cameroun </h3>
          <div className="recherche">
            <form>
              <table>
                <tr>
                  <td>où</td><td>Départ</td><td>Retour</td><td rowSpan="2"><button /></td>
                </tr>
                <tr>
                  <td><input/></td><td><input type="date"/></td><td><input type="date"/></td>
                </tr>
              </table>
            </form>
          </div>

        </div>
        
      </header>
    );
  }

}
