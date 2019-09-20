import React , {Component} from 'react';
import '../styles/Footer.css'


export default class Footer extends Component{
  render(){
    return(
    <footer>
        <div className="assurance">
            <br/> 
            <ul> 
                <li>
                    L’assurance responsabilité civile de Liberty Mutual
                    aux États-Unis est offerte par le biais de Turo Insurance Agency. 
                    Des modalités, conditions et exclusions s’appliquent.
                </li>
            </ul>
        </div>
        <div className="footer">
            <div>
                <table>
                    <tr>

                        <td> CamCar</td>
                        <td>  Explorer</td>
                        <td> Hôtes </td>

                    </tr>
                    <tr>
                        <td><a href="#">A propos</a></td>
                        <td> <a href="#">Reserver une voiture </a></td>
                        <td><a href="#">Inscrire votre voiture</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Equipe </a> </td>
                        <td><a href="#">Securité</a> </td>
                        <td><a href="#">Calculator </a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Réglement </a></td>
                        <td><a href="#">FAQ </a></td>
                        <td><a href="#">Hotes et vedette</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Emploi</a></td>
                        <td><a href="#">Aide</a></td>
                        <td><a href="#">Outils pour hotes</a></td>
                    </tr>
                    <tr>
                        <td><a href="#"> Press</a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#">Assurance</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Open Road</a></td>
                        <td><a href="#"></a></td>
                        <td><a href="#">Protection</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Boutique CamCar</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>

                        <td> </td>
                        <td> </td>
                        <td> </td>

                    </tr>
                    <tr>

                        <td> Type de Véhicule</td>
                        <td> Marques </td>
                        <td> Villes en vedette</td>

                    </tr>
                    <tr>
                        <td><a href="#">camion</a></td>
                        <td> <a href="#">Tesla </a></td>
                        <td><a href="#">Honolulu</a></td>
                        
                    </tr>
                    <tr>
                        <td><a href="#">Fourgonette </a> </td>
                        <td><a href="#">lamborguini</a> </td>
                        <td><a href="#">Denver </a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Voiture de Luxe </a></td>
                        <td><a href="#">Jeep </a></td>
                        <td><a href="#">Las Vegas</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Voiture de Sport</a></td>
                        <td><a href="#">BMW</a></td>
                        <td><a href="#">Toyota</a></td>
                    </tr>
                </table>
               
            </div>
        </div>
            
      </footer>
    );
  }

}
