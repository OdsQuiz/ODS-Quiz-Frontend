import React, { useContext, useState } from "react";
import './style.css'

import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../contexts/results";
import SelectAnswer from "../../components/SelectAnswer";

import odsIcon1 from '../../assets/odsIcons/1.png'
import odsIcon2 from '../../assets/odsIcons/2.webp'
import odsIcon3 from '../../assets/odsIcons/3.png'
import odsIcon4 from '../../assets/odsIcons/4.webp'
import odsIcon5 from '../../assets/odsIcons/5.png'
import odsIcon6 from '../../assets/odsIcons/6.png'
import odsIcon7 from '../../assets/odsIcons/7.png'
import odsIcon8 from '../../assets/odsIcons/8.png'
import odsIcon9 from '../../assets/odsIcons/9.png'
import odsIcon10 from '../../assets/odsIcons/10.webp'
import odsIcon11 from '../../assets/odsIcons/11.png'
import odsIcon12 from '../../assets/odsIcons/12.png'
import odsIcon13 from '../../assets/odsIcons/13.png'
import odsIcon14 from '../../assets/odsIcons/14.png'
import odsIcon15 from '../../assets/odsIcons/15.webp'
import odsIcon16 from '../../assets/odsIcons/16.webp'
import odsIcon17 from '../../assets/odsIcons/17.png'
import { AuthContext } from "../../contexts/auth";
import { updateUserPoints } from "../../services/api";




const Quiz = () => {

    const [answers, setAnswers] = useState(new Array(22).fill(0))
    const { user } = useContext(AuthContext)
    const { storeResult } = useContext(ResultContext)
    const navigate = useNavigate()

    const getAnswers = (value, index) => {
        var auxArray = [...answers]
        auxArray.splice(index, 1, value)
        setAnswers(auxArray)
    }

    const sendDataHandler = async () => {
        let auxResults = new Array(22).fill(0)
        var pointsCounter = 0
        const odsIndividual = [1, 3, 4, 12, 7, 12, 8, 5, 6, 6, 2, 14, 14, 13, 15, 13, 13, 11, 11, 10, 10, 16]

        for (let i = 0; i < auxResults.length; i++){
            if(answers[i] == '1'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else if(answers[i] == '2'){
                auxResults[odsIndividual[i]-1] += 200
            }
            else if(answers[i] == '3'){
                auxResults[odsIndividual[i]-1] += 300
            }
            else if(answers[i] == '4'){
                auxResults[odsIndividual[i]-1] += 400
            }
            else{
                auxResults[odsIndividual[i]-1] += 0
            }
        }

        storeResult(auxResults)

        auxResults.map((eachResult) =>{
            pointsCounter += eachResult
        })

        const request = await updateUserPoints(user.id, pointsCounter)

        navigate('/resultado')

    }

    return(
        <div className="Quiz">
            <div className="QuizContainer">
                <div className="QuizArea ods1">
                    <p>1) Quantos salários mínimos compõem sua renda familiar bruta, contando com seus benefícios(Exemplo: Auxílios recebidos do governo)?</p>
                    <div className="tags">
                        <img src={odsIcon1} alt="" />
                    </div>
                    <SelectAnswer 
                                opA='a) Até 1 salário mínimos.' 
                                opB='b) Entre 1 e 2 salários mínimos.'
                                opC='c) Entre 3 e 5 salários mínimos.'
                                opD='d) Superior a 5 salários mínimos.'
                                opE='e) Não gostaria de responder.'
                                getAnswers={getAnswers} 
                                index={0}/>
                </div>

                <div className="QuizArea ods3">
                    <p>2) Atualmente, você considera ter acesso à serviços públicos de saúde de qualidade?
                        </p>
                        <div className="tags">
                            <img src={odsIcon3} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não há serviço público de saúde perto de minha residência.' 
                                opB='b) Há serviços públicos de saúde básicos, mas em condições extremamente precárias de preservação e atendimento.'
                                opC='c) Há serviços públicos de saúde básicos, mas ainda há a necessidade de me deslocar para outra região para melhores condições deste serviço.'
                                opD='d) Conto com todos os tipos de serviço público de saúde, de Postos de Saúde a Hospitais, em condições adequadas de funcionamento e preservação.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={1}/>
                </div>

                <div className="QuizArea ods4">
                    <p>3) Defina a qualidade das instituições educacionais na comunidade na qual você mora:
                    </p>
                    <div className="tags">
                            <img src={odsIcon4} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Péssimo' 
                                opB='b) Regular'
                                opC='c) Bom'
                                opD='d) Muito bom'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={2}/>
                </div>

                <div className="QuizArea ods12">
                    <p>4) Você pratica a coleta seletiva dos resíduos gerados no seu domicílio. Qual o grau de reciclagem que você realiza?
                    </p>
                    <div className="tags">
                            <img src={odsIcon12} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não faço coleta seletiva, tenho lixo comum em casa.' 
                                opB='b) Separo apenas alguns itens de reciclagem, quando dá tempo.'
                                opC='c) Separo e encaminho para a reciclagem e logística reversa, de forma rotineira os resíduos de casa.'
                                opD='d) Pratico diariamente a separação dos resíduos (recicláveis, orgânicos, itens de logística reversa e rejeito) e encaminho adequadamente cada um deles.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={3}/>
                </div>

                <div className="QuizArea ods7">
                    <p>5) Com que frequência você vê painéis solares ou carros elétricos na comunidade em que vive? 
                    </p>
                    <div className="tags">
                        <img src={odsIcon7} alt="" />
                    </div>
                    <SelectAnswer 
                                opA='a) Nunca os vejo.' 
                                opB='b) Pouquíssimos.'
                                opC='c) Frequentemente os vejo.'
                                opD='d) Toda a comunidade em que vivo é energizada por energia solar, e movida a carros elétricos.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={4}/>
                </div>

                <div className="QuizArea ods12">
                    <p>6) Você se considera uma pessoa mais consumista ou consciente?
                    </p>
                    <div className="tags">
                            <img src={odsIcon12} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Totalmente consumista, costumo fazer compras todo mês com frequência sem pensar no impacto desta ação.' 
                                opB='b) Parcialmente consumista, faço compras quase sempre que almejo algo.'
                                opC='c) Parcialmente consciente, não deixando totalmente de comprar algo quando tenho vontade.'
                                opD='d) Totalmente consciente, compro somente quando há a necessidade e avalio o impacto ambiental da minha compra.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={5}/>
                </div>

                <div className="QuizArea ods8">
                    <p>7) Na região onde você mora, como é caracterizado o comércio local?
                    </p>
                    <div className="tags">
                            <img src={odsIcon8} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Comumente devemos nos deslocar para outros locais/bairros para encontrar oportunidades.' 
                                opB='b) Há um determinado comércio local, composto por trabalho informal e comércios de pequeno porte(exemplo: padarias, lojas, etc).'
                                opC='c) Há a presença de startups, micro empresas, transnacionais e franquias famosas(Ex.: McDonald s, Burguer King, etc)'
                                opD='d) Comércio forte, marcado por empresas de relevância nacional, internacional, e iniciativas empreendedoras. Presença marcante de empregos formais.'
                                getAnswers={getAnswers} 
                                index={6}/>
                </div>

                <div className="QuizArea ods5">
                    <p>8) Quantas iniciativas de incentivo à igualdade de gênero e inserção da mulher no mercado de trabalho você conhece?
                    </p>
                    <div className="tags">
                            <img src={odsIcon5} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Conheço nenhuma iniciativa deste gênero.' 
                                opB='b) Entre uma e três.'
                                opC='c) Entre três e dez.'
                                opD='d) De dez para mais.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={7}/>
                </div>

                <div className="QuizArea ods6">
                    <p>9) A comunidade em que vive possui acesso à água potável?
                    </p>
                    <div className="tags">
                            <img src={odsIcon6} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não há acesso à água potável, seja por abastecimento municipal ou poço.' 
                                opB='b) Poucos têm este acesso.'
                                opC='c) Uma parte significativa os tem'
                                opD='d) Toda a minha comunidade tem acesso à água potável.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={8}/>
                </div>

                <div className="QuizArea ods6">
                    <p>10)A comunidade em que vive possui acesso a saneamento básico?
                    </p>
                    <div className="tags">
                            <img src={odsIcon6} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não há rede de esgoto ou soluções individuais adequadas (fossa e sumidouro).' 
                                opB='b) Poucos têm este acesso à saneamento básico.'
                                opC='c) Uma parte significativa os tem acesso ao saneamento básico.'
                                opD='d) Toda a minha comunidade tem acesso à saneamento básico de qualidade.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={9}/>
                </div>


                <div className="QuizArea ods2">
                    <p>11) Na comunidade em que você vive, você conhece pessoas que passam fome? É do seu conhecimento projetos locais voltados a ajudá-las?
                    </p>
                    <div className="tags">
                            <img src={odsIcon2} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Conheço pessoas em situação de fome, e não há projetos voltados a ajudá-las.' 
                                opB='b) Conheço pessoas em situação de fome, entretanto há um ou mais projetos voltados para a sua ajuda.'
                                opC='c) Não conheço pessoas em situação de fome, e não há projetos voltados para elas no local onde moro.'
                                opD='d) Não conheço pessoas em situação de fome, e conheço um ou mais projetos voltados para a ajuda destas pessoas, possivelmente em outras comunidades.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={10}/>
                </div>

                <div className="QuizArea ods14">
                    <p>12) Como você considera o nível de qualidade dos ambientes aquáticos (mares e lagoas) próximos à sua comunidade? 
                    </p>
                    <div className="tags">
                            <img src={odsIcon14} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Estão sempre sujos e poluídos.' 
                                opB='b) Constantemente estão sujos e com lixo.'
                                opC='c) Às vezes estão limpos.'
                                opD='d) Estão sempre limpos e despoluídos.'
                                opE='e) Não tenho ambientes aquáticos próximos.'
                                getAnswers={getAnswers} 
                                index={11}/>
                </div>

                <div className="QuizArea ods14">
                    <p>13) Você conhece áreas de preservação marinha na sua região?
                    </p>
                    <div className="tags">
                            <img src={odsIcon14} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço.' 
                                opB='b) Conheço ao menos 1.'
                                opC='c) Conheço ao menos 3.'
                                opD='d) Conheço mais de 5.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={12}/>
                </div>

                <div className="QuizArea ods13">
                    <p>14) Você conhece áreas de preservação terrestre (parques florestais, reservas ambientais, RPPN’s, unidades de conservação) na sua região?
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço.' 
                                opB='b) Conheço ao menos 1.'
                                opC='c) Conheço ao menos 3.'
                                opD='d) Conheço mais de 5.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={13}/>
                </div>

                <div className="QuizArea ods15">
                    <p>15) As áreas de reflorestamento são essenciais para a preservação da fauna e flora e recuperar áreas degradadas. Você conhece projetos de reflorestamento na sua comunidade?
                    </p>
                    <div className="tags">
                            <img src={odsIcon15} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Conheço nenhuma iniciativa deste gênero.' 
                                opB='b) Entre uma e três.'
                                opC='c) Entre três e cinco.'
                                opD='d) De cinco para mais.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={14}/>
                </div>

                <div className="QuizArea ods13">
                    <p>16) A mudança de clima no mundo já está sendo sentida por cada um de nós. em relação às “catástrofes naturais” (chuvas intensas, deslizamentos, alagamentos, etc) a sua comunidade já passou por algum desses problemas nos últimos meses?
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não temos nenhuma catástrofe natural nos últimos 3 anos.' 
                                opB='b) Tivemos alguns momentos de catástrofe nos últimos 2 anos.'
                                opC='c) Temos frequentemente sofrido com catástrofes anualmente.'
                                opD='d) Temos sofrido com algum tipo de catástrofe natural, mais de uma vez no ano.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={15}/>
                </div>

                <div className="QuizArea ods13">
                    <p>17) Os dois principais causadores das mudanças de clima são os gases de efeito estufa (GEE), por exemplo  o  CO2 (gás carbônico) e CH4 (gás metano). Algumas atividades humanas contribuem para a emissão destes gases, como a queima de combustíveis fósseis (energia), agropecuária, indústrias, uso da terra e lixo urbano. O ESTADO DO RIO DE JANEIRO apresentou, em 2016, emissão de 92.318 Gg CO2 e, com destaque para os setores Energia (70%), indústrias (17%) e Lixo (8%). As emissões do Rio de Janeiro representaram 6% das emissões nacionais e 24% da região Sudeste, em 2016. assinale qual a opção que você melhor se identifica:
                    </p>
                    <div className="tags">
                            <img src={odsIcon13} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não mudo minhas atividades em função da emissão de gases de efeito estufa.' 
                                opB='b) Raramente faço alguma mudança de hábito em função de GEE (exemplo: reciclagem de lixo, consumo consciente, transporte coletivo ou alternativo).'
                                opC='c) Às vezes faço algumas alterações de hábito para reduzir as emissões de GEE.'
                                opD='d) Sempre busco opções na minha rotina para reduzir as emissões de GEE.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={16}/>
                </div>

                <div className="QuizArea ods11">
                    <p>18) Na sua comunidade existem pessoas vivendo em assentamentos ou habitações precários, inadequados ou informais? Considere habitações inadequadas aqueles que possuem ao menos uma das condições: mais de 3 pessoas por quarto; sem abastecimento de água; sem rede de esgoto ou fossa séptica; sem coleta de lixo. 
                    </p>
                    <div className="tags">
                            <img src={odsIcon11} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço pessoas em situação de habitação precária.' 
                                opB='b) Conheço algumas pessoas em situação de habitação precária.'
                                opC='c) Conheço muitas pessoas em situação de habitação precária.'
                                opD='d) Todas as pessoas na minha comunidade vivem em situação de habitação precária.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={17}/>
                </div>

                <div className="QuizArea ods11">
                    <p>19) Cidades sustentáveis possuem sistema de gestão de resíduos sólidos eficiente, recuperando a maior fração possível de recicláveis e compostáveis. Existem na sua comunidade iniciativas de reciclagem e/ou compostagem? (ODS 11- cidades e comunidades sustentáveis)
                    </p>
                    <div className="tags">
                            <img src={odsIcon11} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não existem iniciativas ou não conheço.' 
                                opB='b) Existem algumas poucas iniciativas, mas não participo.'
                                opC='c) Existem algumas iniciativas, e as vezes participo.'
                                opD='d) Existem várias iniciativas e participo com frequência.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={18}/>
                </div>

                <div className="QuizArea ods10">
                    <p>20) Iniciativas que promovam aumento de renda para as pessoas vivendo abaixo de 50% da mediana da renda (menos de R$ 700) independente do gênero, idade ou condição física são fundamentais para o desenvolvimento econômico e social do país. Você conhece iniciativas com este objetivo na sua comunidade? 
                    </p>
                    <div className="tags">
                            <img src={odsIcon10} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Não conheço.' 
                                opB='b) Conheço apenas uma.'
                                opC='c) Conheço entre uma e três.'
                                opD='d) Conheço mais de três.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={19}/>
                </div>

                <div className="QuizArea ods10">
                    <p>21) Você ou alguém que você conhece já foi discriminado em função do seu gênero, idade, condição física, etnia ou cidade/país de origem? 
                    </p>
                    <div className="tags">
                            <img src={odsIcon10} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Nunca sofri discriminação de qualquer tipo.' 
                                opB='b) Raramente sofro algum tipo de discriminação.'
                                opC='c) Às vezes sofro algum tipo de discriminação.'
                                opD='d) Todos os dias sofro algum tipo de discriminação.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={20}/>
                </div>

                <div className="QuizArea ods16">
                    <p>22) Você ou alguém que você conhece já foi vítima de violência física, psicológica ou sexual?
                    </p>
                    <div className="tags">
                            <img src={odsIcon16} alt="" />
                        </div>
                    <SelectAnswer 
                                opA='a) Nunca.' 
                                opB='b) Raramente.'
                                opC='c) Às vezes.'
                                opD='d) Todos os dias.'
                                opE='e) Não sei responder.'
                                getAnswers={getAnswers} 
                                index={21}/>
                </div>

                <button onClick={() => sendDataHandler()}>Enviar</button>

            </div>
            
        </div>
    )
}

export default Quiz