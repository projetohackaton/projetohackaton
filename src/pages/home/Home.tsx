import { Grid } from "@material-ui/core";
import './Home.css'

function Home() {
    return (
        <>
            <Grid container className="back">
                <Grid item xs={6}>
                    <div className="bemvindo">
                    <h1>Bem vindo a GenProjects!</h1>
                    </div>
                    <div></div>
                    <p className="adicionar">Aqui você poderá ver todos os Projetos Integradores da Generation Brasil e adicionar o do seu grupo!</p>
                    
                   
                </Grid>
                <Grid item xs={6} >
                    <img className="robo" src="https://s3-alpha-sig.figma.com/img/a57e/8d3c/15d51b577daf34f379ebc1ac21adfad2?Expires=1674432000&Signature=W5vWUgIzg6bTulihq-NS0bhB2PAhT~Ni8qyngnZ96uTRcZiyVF3zsTSorOneguLCvpE-QGUIQGiFAPilD69-XSAC1Hv3GvxE9uyWAWuW2~6oTOhBqa9k6JFsGWFQYeFve~ivQLfuskHl~mXg5JfbEvI1Xzq4RUvDzqM2cDenM5zaKU69BdwXlzyzqR-zIEtmwURMqZdtHNmrpEU5J-otgxRW4LDMhC2OqHQ2BTvFLqfNoor~AkuL5fx8LtsnP80fxwW79mCrT9pUprWSUai75aVcSlpF3EXeu7xVMVu04zSZNevY0UNoCcQOJXf4Q-ljsJDGZVKk8DDPKAV61rBPIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt="" width="500px" />
                </Grid>
            </Grid>
            
            <div >
                <a href="/projetos"><button className="botao1">Explorar</button></a>
                <a href="/adicionarprojeto"><button className="botao2">Adicionar Projeto</button></a>
               
            </div>

        </>
    )
}

export default Home;