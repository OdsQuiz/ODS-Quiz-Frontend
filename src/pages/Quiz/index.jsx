import React, { useContext, useState } from "react";
import './style.css'

import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../contexts/results";
import SelectAnswer from "../../components/SelectAnswer";

const Quiz = () => {

    const [answers, setAnswers] = useState(new Array(17))
    const { storeResult } = useContext(ResultContext)
    const navigate = useNavigate()

    const getAnswers = (value, index) => {
        var auxArray = [...answers]
        auxArray.splice(index, 1, value)
        setAnswers(auxArray)
    }

    const sendDataHandler = () => {
        const auxResults = new Array(17).fill(0)
        const odsIndividual = [1, 3, 4, 12, 7, 12, 8, 5, 6, 6, 2, 14, 14, 15, 15, 13, 13, 11, 11, 10, 10, 16]

        for (let i = 0; i < auxResults.length; i++){
            if(answers[i] == '1'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else if(answers[i] == '2'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else if(answers[i] == '3'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else if(answers[i] == '4'){
                auxResults[odsIndividual[i]-1] += 100
            }
            else{
                auxResults[odsIndividual[i]-1] += 0
            }
        }

        storeResult(auxResults)
        navigate('/resultado')
    }

    return(
        <div className="Quiz">
            <div className="QuizContainer">
                <div className="QuizArea">
                    <p>1) Quantos salários mínimos compõem sua renda familiar bruta, contando com seus benefícios(Exemplo: Auxílios recebidos do governo)? (ODS: Combate à pobreza)
                    <br></br>
                    <br />
                        a) Até 1 salário mínimo.
                        <br></br>
                        b) Entre 1 e 2 salários mínimos.
                        <br></br>
                        c) Entre 3 e 5 salários mínimos.
                        <br></br>
                        d) Superior a 5 salários mínimos.
                        <br></br>
                        e) Não gostaria de responder.
                    </p>
                
                    <SelectAnswer getAnswers={getAnswers} ods={1}/>
                </div>

                <div className="QuizArea">
                    <p>2) Atualmente, você considera ter acesso à serviços públicos de saúde de qualidade? (ODS: Saúde e bem-estar)
                    <br></br>
                    <br />
                        a) Não há serviço público de saúde perto de minha residência.
                        <br></br>
                        b) Há serviços públicos de saúde básicos, mas em condições extremamente precárias de preservação e atendimento.
                        <br></br>
                        c) Há serviços públicos de saúde básicos, mas ainda há a necessidade de me deslocar para outra região para melhores condições deste serviço.
                        <br></br>
                        d) Conto com todos os tipos de serviço público de saúde, de Postos de Saúde a Hospitais, em condições adequadas de funcionamento e preservação.
                        <br></br>
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={3}/>
                </div>

                <div className="QuizArea">
                    <p>3) De 1 a 4, sendo 1(péssimo) e 4(muito bom), defina a qualidade das instituições educacionais na comunidade na qual você mora: (ODS: Educação de qualidade)
                    <br />
                    <br />
                        a) 1
                        <br />
                        b) 2
                        <br />
                        c) 3
                        <br />
                        d) 4
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={4}/>
                </div>

                <div className="QuizArea">
                    <p>4) Você pratica a coleta seletiva dos resíduos gerados no seu domicílio. Qual o grau de reciclagem que você realiza?
                    <br />
                    <br />
                        a) Não faço coleta seletiva, tenho lixo comum em casa.
                        <br />
                        b) Separo apenas alguns itens de reciclagem, quando dá tempo.
                        <br />
                        c) Separo e encaminho para a reciclagem e logística reversa, de forma rotineira os resíduos de casa.
                        <br />
                        d) Pratico diariamente a separação dos resíduos (recicláveis, orgânicos, itens de logística reversa e rejeito) e encaminho adequadamente cada um deles.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={12}/>
                </div>

                <div className="QuizArea">
                    <p>5) Com que frequência você vê painéis solares ou carros elétricos na comunidade em que vive? (ODS: Energia Limpa e Acessível)
                    <br />
                    <br />
                        a) Nunca os vejo.
                        <br />
                        b) Pouquíssimos.
                        <br />
                        c) Frequentemente os vejo.
                        <br />
                        d) Toda a comunidade em que vivo é energizada por energia solar, e movida a carros elétricos.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={7}/>
                </div>

                <div className="QuizArea">
                    <p>6) Você se considera uma pessoa mais consumista ou consciente(ODS: Consumo e Produção Responsáveis)?
                    <br />
                    <br />
                        a) Totalmente consumista, costumo fazer compras todo mês com frequência sem pensar no impacto desta ação.
                        <br />
                        b) Parcialmente consumista, faço compras quase sempre que almejo algo.
                        <br />
                        c) Parcialmente consciente, não deixando totalmente de comprar algo quando tenho vontade.
                        <br />
                        d) Totalmente consciente, compro somente quando há a necessidade e avalio o impacto ambiental da minha compra.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={12}/>
                </div>

                <div className="QuizArea">
                    <p>7) Na região onde você mora, como é caracterizado o comércio local(ODS: Trabalho Descente e Crescimento Econômico)?
                    <br />
                    <br />
                            a) Comumente devemos nos deslocar para outros locais/bairros para encontrar oportunidades.
                            <br />
                            b) Há um determinado comércio local, composto por trabalho informal e comércios de pequeno porte(exemplo: padarias, lojas, etc).
                            <br />
                            c)Há a presença de startups, micro empresas, transnacionais e franquias famosas(Ex.: McDonald 's, Burguer King, etc).
                            <br />
                            d)Comércio forte, marcado por empresas de relevância nacional, internacional, e iniciativas empreendedoras. Presença marcante de empregos formais.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={8}/>
                </div>

                <div className="QuizArea">
                    <p>8) Quantas iniciativas de incentivo à igualdade de gênero e inserção da mulher no mercado de trabalho você conhece? (ODS igualdade de gênero)
                    <br />
                    <br />
                            a) Conheço nenhuma iniciativa deste gênero.
                            <br />
                            b) Entre uma e três.
                            <br />
                            c) Entre três e dez.
                            <br />
                            d) De dez para mais.
                            <br />
                            e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={5}/>
                </div>

                <div className="QuizArea">
                    <p>10.1) A comunidade em que vive possui acesso à água potável? (ODS 6 água/saneamento)
                    <br />
                    <br />
                        a) Não há acesso à água potável, seja por abastecimento municipal ou poço.
                        <br />
                        b) Poucos têm este acesso.
                        <br />
                        c) Uma parte significativa os tem
                        <br />
                        d) Toda a minha comunidade tem acesso à água potável.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={6}/>
                </div>

                <div className="QuizArea">
                    <p>10.2)A comunidade em que vive possui acesso a saneamento básico? (ODS 6 água/saneamento)
                    <br />
                    <br />
                        a) Não há rede de esgoto ou soluções individuais adequadas (fossa e sumidouro).
                        <br />
                        b) Poucos têm este acesso à saneamento básico.
                        <br />
                        c) Uma parte significativa os tem acesso ao saneamento básico.
                        <br />
                        d) Toda a minha comunidade tem acesso à saneamento básico de qualidade.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={6}/>
                </div>


                <div className="QuizArea">
                    <p>11) Na comunidade em que você vive, você conhece pessoas que passam fome? É do seu conhecimento projetos locais voltados a ajudá-las? (ODS fome zero)
                    <br />
                    <br />
                        a) Conheço pessoas em situação de fome, e não há projetos voltados a ajudá-las.
                        <br />
                        b) Conheço pessoas em situação de fome, entretanto há um ou mais projetos voltados para a sua ajuda.
                        <br />
                        c) Não conheço pessoas em situação de fome, e não há projetos voltados para elas no local onde moro.
                        <br />
                        d) Não conheço pessoas em situação de fome, e conheço um ou mais projetos voltados para a ajuda destas pessoas, possivelmente em outras comunidades.
                        <br />
                        e) Não sei responder.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={2}/>
                </div>

                <div className="QuizArea">
                    <p>12) Como você considera o nível de qualidade dos ambientes aquáticos (mares e lagoas) próximos à sua comunidade? (ODS 14 - vida na água)
                    <br />
                    <br />
                        a) Estão sempre sujos e poluídos.
                        <br />
                        b) Constantemente estão sujos e com lixo.
                        <br />
                        c) Às vezes estão limpos.
                        <br />
                        d) Estão sempre limpos e despoluídos.
                        <br />
                        e) Não tenho ambientes aquáticos próximos.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={14}/>
                </div>

                <div className="QuizArea">
                    <p>13) Você conhece áreas de preservação marinha na sua região? (ODS 14 - vida na água)
                    <br />
                    <br />
                        a) Não conheço.
                        <br />
                        b) Conheço ao menos 1.
                        <br />
                        c) Conheço ao menos 3.
                        <br />
                        d) Conheço mais de 5.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={14}/>
                </div>

                <div className="QuizArea">
                    <p>14) Você conhece áreas de preservação terrestre (parques florestais, reservas ambientais, RPPN’s, unidades de conservação) na sua região? (ODS 15 - vida terrestre)
                    <br />
                    <br />
                        a) Não conheço.
                        <br />
                        b) Conheço ao menos 1.
                        <br />
                        c) Conheço ao menos 3.
                        <br />
                        d) Conheço mais de 5.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={15}/>
                </div>

                <div className="QuizArea">
                    <p>15) As áreas de reflorestamento são essenciais para a preservação da fauna e flora e recuperar áreas degradadas. Você conhece projetos de reflorestamento na sua comunidade? (ODS 15- vida terrestre)
                    <br />
                    <br />
                        a) Conheço nenhuma iniciativa deste gênero.
                        <br />
                        b) Entre uma e três.
                        <br />
                        c) Entre três e cinco.
                        <br />
                        d) De cinco para mais.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={15}/>
                </div>

                <div className="QuizArea">
                    <p>16) A mudança de clima no mundo já está sendo sentida por cada um de nós. em relação às “catástrofes naturais” (chuvas intensas, deslizamentos, alagamentos, etc) a sua comunidade já passou por algum desses problemas nos últimos meses? (ODS 13-mudança global do clima)

                    <br />
                    <br />
                        a) Não temos nenhuma catástrofe natural nos últimos 3 anos.
                        <br />
                        b) Tivemos alguns momentos de catástrofe nos últimos 2 anos.
                        <br />
                        c) Temos frequentemente sofrido com catástrofes anualmente.
                        <br />
                        d) Temos sofrido com algum tipo de catástrofe natural, mais de uma vez no ano.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={13}/>
                </div>

                <div className="QuizArea">
                    <p>17) Os dois principais causadores das mudanças de clima são os gases de efeito estufa (GEE), por exemplo  o  CO2 (gás carbônico) e CH4 (gás metano). Algumas atividades humanas contribuem para a emissão destes gases, como a queima de combustíveis fósseis (energia), agropecuária, indústrias, uso da terra e lixo urbano. O ESTADO DO RIO DE JANEIRO apresentou, em 2016, emissão de 92.318 Gg CO2 e, com destaque para os setores Energia (70%), indústrias (17%) e Lixo (8%). As emissões do Rio de Janeiro representaram 6% das emissões nacionais e 24% da região Sudeste, em 2016. (referência: https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/sirene/arquivos/LIVRORESULTADOINVENTARIO30062021WEB.pdf) assinale qual a opção que você melhor se identifica: (ODS13- mudança clima)
                    <br />
                    <br />
                        a) Não mudo minhas atividades em função da emissão de gases de efeito estufa.
                        <br />
                        b) Raramente faço alguma mudança de hábito em função de GEE (exemplo: reciclagem de lixo, consumo consciente, transporte coletivo ou alternativo).
                        <br />
                        c) Às vezes faço algumas alterações de hábito para reduzir as emissões de GEE.
                        <br />
                        d) Sempre busco opções na minha rotina para reduzir as emissões de GEE.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={13}/>
                </div>

                <div className="QuizArea">
                    <p>18) Na sua comunidade existem pessoas vivendo em assentamentos ou habitações precários, inadequados ou informais? Considere habitações inadequadas aqueles que possuem ao menos uma das condições: mais de 3 pessoas por quarto; sem abastecimento de água; sem rede de esgoto ou fossa séptica; sem coleta de lixo. (ODS 11- cidades e comunidades sustentáveis)
                    <br />
                    <br />
                        a) Não conheço pessoas em situação de habitação precária.
                        <br />
                        b) Conheço algumas pessoas em situação de habitação precária.
                        <br />
                        c) Conheço muitas pessoas em situação de habitação precária.
                        <br />
                        d) Todas as pessoas na minha comunidade vivem em situação de habitação precária.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={11}/>
                </div>

                <div className="QuizArea">
                    <p>19) Cidades sustentáveis possuem sistema de gestão de resíduos sólidos eficiente, recuperando a maior fração possível de recicláveis e compostáveis. Existem na sua comunidade iniciativas de reciclagem e/ou compostagem? (ODS 11- cidades e comunidades sustentáveis)
                    <br />
                    <br />
                        a) Não existem iniciativas ou não conheço.
                        <br />
                        b) Existem algumas poucas iniciativas, mas não participo.
                        <br />
                        c) Existem algumas iniciativas, e as vezes participo.
                        <br />
                        d) Existem várias iniciativas e participo com frequência.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={11}/>
                </div>

                <div className="QuizArea">
                    <p>20) Iniciativas que promovam aumento de renda para as pessoas vivendo abaixo de 50% da mediana da renda (menos de R$ 700) independente do gênero, idade ou condição física são fundamentais para o desenvolvimento econômico e social do país. Você conhece iniciativas com este objetivo na sua comunidade? (ODS 10- redução das desigualdades)
                    <br />
                    <br />
                        a) Não conheço.
                        <br />
                        b) Conheço apenas uma.
                        <br />
                        c) Conheço entre uma e três.
                        <br />
                        d) Conheço mais de três.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={10}/>
                </div>

                <div className="QuizArea">
                    <p>21) Você ou alguém que você conhece já foi discriminado em função do seu gênero, idade, condição física, etnia ou cidade/país de origem? (ODS 10 - redução das desigualdades e ODS 16 - paz, justiça e instituições eficazes)
                    <br />
                    <br />
                        a) Nunca sofri discriminação de qualquer tipo.
                        <br />
                        b) Raramente sofro algum tipo de discriminação.
                        <br />
                        c) Às vezes sofro algum tipo de discriminação.
                        <br />
                        d) Todos os dias sofro algum tipo de discriminação.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={10}/>
                </div>

                <div className="QuizArea">
                    <p>22) Você ou alguém que você conhece já foi vítima de violência física, psicológica ou sexual? (ODS 16 - paz , justiça e instituições eficazes)
                    <br />
                    <br />
                        a) Nunca.
                        <br />
                        b) Raramente.
                        <br />
                        c) Às vezes.
                        <br />
                        d) Todos os dias.
                        <br />
                        e) Não sei responder.

                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={16}/>
                </div>

                <button onClick={() => sendDataHandler()}>Enviar</button>

            </div>
            
        </div>
    )
}

export default Quiz