import React, { useContext, useState, useEffect } from "react";
import './style.css'

import obs1 from '../../assets/SDG-1.svg'
import obs2 from '../../assets/SDG-2.svg'
import obs3 from '../../assets/SDG-3.svg'
import obs4 from '../../assets/SDG-4.svg'
import obs5 from '../../assets/SDG-5.svg'
import obs6 from '../../assets/SDG-6.svg'
import obs7 from '../../assets/SDG-7.svg'
import obs8 from '../../assets/SDG-8.svg'
import obs9 from '../../assets/SDG-9.svg'
import obs10 from '../../assets/SDG-10.svg'
import obs11 from '../../assets/SDG-11.svg'
import obs12 from '../../assets/SDG-12.svg'
import obs13 from '../../assets/SDG-13.svg'
import obs14 from '../../assets/SDG-14.svg'
import obs15 from '../../assets/SDG-15.svg'
import obs16 from '../../assets/SDG-16.svg'
import obs17 from '../../assets/SDG-17.svg'

import ODSPoints from "../../components/ODSPoints";
import { ResultContext } from "../../contexts/results";
import { Link } from "react-router-dom";
import { getUsers, getIniciatives } from "../../services/api";



const Result = () => {

    const images = [obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, obs11, obs12, obs13, obs14, obs15, obs16, obs17]
    const colors = [
        "#E5243B", "#DDA83A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2", "#FCC30B", "#A21942", "#FD6925",
        "#DD1367", "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A"
    ]
    const descriptions = [
        'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
        'Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.',
        'Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.',
        'Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.',
        'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.',
        'Garantir disponibilidade e manejo sustentável da água e saneamento para todos.',
        'Garantir acesso à energia barata, confiável, sustentável e renovável para todos.',
        'Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos.',
        'Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável, e fomentar a inovação.',
        'Reduzir a desigualdade dentro dos países e entre eles.',
        'Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.',
        'Assegurar padrões de produção e de consumo sustentáveis.',
        'Tomar medidas urgentes para combater a mudança do clima e seus impactos (reconhecendo que a Convenção Quadro das Nações Unidas sobre Mudança do Clima [UNFCCC] é o fórum internacional intergovernamental primário para negociar a resposta global à mudança do clima).',
        'Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável.',
        'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.',
        'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.',
        'Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.',
    ]
    
    const { result } = useContext(ResultContext)

    const RenderMax = () =>{
        let max = result[0]
        let idMax = 0

        for(let i = 0; i < result.length; i++){
            if(result[i] > max){
                max = result[i]
                idMax = i
            }
        }

        return(
            <>
                <ODSPoints id={idMax+1} image={images[idMax]} points={`${result[idMax]} pts`} color={colors[idMax]} description={descriptions[idMax]}/>
            </>
        )
    }

    const [userAverage, setUserAverage] = useState()
    const [nivelComunidade, setNivelComunidade] = useState()
    const [nivelUser, setNivelUser] = useState()

    return(
        <div className="Result">
            { result ?
                <>
                    <h1 className="result-title">Resultados</h1>
                    <div className="Points">
                        {images.map((image, key) => {
                            return <ODSPoints key={key} image={image} points={result[key] == 0 ? 'Não obteve pontos' : `${result[key]} pontos`} color={colors[key]} />
                        })}
                        
                    </div>
        
                    <div className="ResultDetail">
                        <RenderMax />
                    </div>

                    <div hidden className="termometro-content">
                        <div className="termometro-title">
                            Comunidade
                        </div>
                        <div className="termometro-column">
                        <span className="termometro-media-display" ><p>Sua pontuação: 3080</p></span>
                            <div className="termometro">
                                <div className="nivel-media-comunidade" ></div>
                                <div className="nivel-media-user"></div>
                            </div>
                            
                            <span className="termometro-media-display" ><p>Média: 2345</p></span>
                            
                        </div>
                    </div>
                    <div className="RedirectContainer">
                        <Link to='/ranking'>Ir para o termômetro</Link>
                        <Link to='/dados'>Ver base de dados</Link>
                    </div>

                    <button onClick={() => window.print()}>Imprimir Relatório</button>
                </>
                :
                null
            }
            
        </div>
    )
}

export default Result