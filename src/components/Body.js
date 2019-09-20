import React , {Component} from 'react';
import '../styles/Body.css'


export default class Body extends Component{
  render(){
    return(
      <body>
        <div>
        <br/>
        <h2>Oubliez le comptoir de location</h2>
        <h1>Découvrez la plus grande <br/> plateforme d’autopartage<br/> du Cameroun</h1>
        </div>
        <div className="info">
            <div>
                <table>
                    <tr>

                        <td> <img src='../images/possibilite.png'/></td>
                        <td>  <h2> Possibilités infinies </h2> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h4>  
                                Choisissez parmi des centaines de modèles que<br/> 
                                vous ne trouverez nulle part ailleurs. Vous <br/> 
                                pouvez récupérer la voiture vous-même ou vous <br/> 
                                la faire livrer là où vous le souhaitez.
                            </h4> 
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td><img src='../images/annulation.png'/></td>
                        <td> <h2> Annulation gratuite </h2></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td>
                            <h4>  
                                Comme vos plans peuvent parfois changer,<br/> 
                                et qu’il est important d’avoir une certaine <br/> 
                                flexibilité, vous pouvez annuler gratuitement<br/> 
                                jusqu’à 24 heures avant le début de votre voyage.
                            </h4> 
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td><img src='../images/service.png'/></td>
                        <td> <h2> Accès en tout temps au Service <br/> à la clientèle </h2></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>

                            <h4>  
                                Ayez l’esprit tranquille en sachant que tous les<br/> 
                                membres de la communauté Turo font l’objet d’une <br/> 
                                vérification et que vous avez accès en tout temps à <br/> 
                                ll’assistance routière et au Service à la clientèle.
                            </h4> 
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td><img src='../images/assurance.png'/></td>
                        <td>
                            <h2> Protections d’assurance incluses </h2> 
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h4>  
                                Conduisez en toute confiance grâce aux <br/> 
                                protections offertes par Turo Insurance Agency.<br/> 
                                Vous êtes couvert par une assurance responsabilité <br/> 
                                civile pouvant atteindre jusqu’à 1 million de dollars, <br/> 
                                fournie par Liberty Mutual.
                            </h4> 
                        </td>
                    </tr>
                </table>
            </div>
        </div> 
        <span>
            <a href="#"> Reservez la voiture parfaite </a>
        </span>
        <div className="categorie" >
    {/*//  <button className="prev"/>*/}
            <div>
                <a href="#" className="c1">voiture</a>
                <a href="#" className="c2" >classique</a>
                <a href="#" className="c3">decapotable</a>
                <a href="#" className="c4">voitures de luxe</a>
                <a href="#" className="c5">Minifourgonette</a>
                {/* <a href="#" className="c6">voiture de sport</a>
                <a href="#" className="c7"> VUH </a>
                <a href="#" className="c8"> camions</a>
    <a href="#" className="c9">fourgonnettes</a>*/}
            </div>
          {/*  <button className="next" />*/}

        </div>
        <div className="ville" >
            <div>
                <a href="#" className="v1">Yaoundé</a>
                <a href="#" className="v2" >Douala</a>
                <a href="#" className="v3">Bafoussam</a>
                <a href="#" className="v4">Garoua</a>
            </div>
        </div>
        <div className="programme">
            <div className="image1">
              <img alt="image" src='../images/2.jpg'/>
            </div>
            <div>
                <h2>  La conduite à son meilleur </h2>
                <h1>Découvrez le nouveau 
                    programme des hôtes Porsche</h1>
                <h4>
                    Turo et Porsche sont fiers de présenter <br/>
                    le nouveau programme des hôtes Porsche. <br/>
                    Ce programme pilote, actuellement offert<br/>
                     à San Francisco et Los Angeles, vous permet<br/>
                      de vivre l’ultime expérience Porsche auprès <br/>
                      des meilleurs hôtes sur Turo
                </h4>
                <a href="#">Explorer se programme</a>
            </div>   
        </div>

        <div className="programme">
            <div>
                <h2> Réservez, déverrouillez et c’est parti! </h2>
                <h1>Découvrez Turo Go</h1>
                <h4>
                    Améliorez votre expérience de l’autopartage<br/>
                    grâce à Turo Go — trouvez, réservez et <br/>
                    déverrouillez des voitures sur<br/>
                    demande à partir de l’app Turo.
                </h4>
                <a href="#">En savoir plus</a>
            </div>  
            <div className="image2">
                <img alt="image" src='../images/2.jpg'/>  
            </div> 
        </div>
        <div className="defilant" >
            <a href="#"> camcar est votre plate forme de 
            location de voiture au cameroun qui vous garantie le confort, 
            la securite, et le meilleur raport qualité prix </a>
         </div>
        <div className="partage">
            <div>
                <h2> Réservez, déverrouillez et c’est parti! </h2>
                <h1>Découvrez Turo Go</h1>
                <h4>
                    Améliorez votre expérience de l’autopartage<br/>
                    grâce à Turo Go — trouvez, réservez et <br/>
                    déverrouillez des voitures sur<br/>
                    demande à partir de l’app Turo.
                </h4>
                <a href="#">En savoir plus</a>
            </div>  
            <div className="image2">
                <img alt="image" src='../images/2.jpg'/>  
            </div> 
        </div>
      </body>
    );
  }

}
