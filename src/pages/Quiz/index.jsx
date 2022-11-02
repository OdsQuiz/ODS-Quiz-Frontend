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
        
        const auxResults = new Array(17)

        for (let i = 0; i < auxResults.length; i++){
            if(answers[i] == '1'){
                auxResults[i] = 25
            }
            else if(answers[i] == '2'){
                auxResults[i] = 50
            }
            else if(answers[i] == '3'){
                auxResults[i] = 75
            }
            else if(answers[i] == '4'){
                auxResults[i] = 100
            }
            else{
                auxResults[i] = 0
            }
        }

        storeResult(auxResults)
        navigate('/resultado')
    }

    return(
        <div className="Quiz">
            <div className="QuizContainer">
                <div className="QuizArea">
                    <p> Quantos salários mínimos compõem sua renda familiar bruta, contando com seus benefícios(Exemplo: Auxílios recebidos do governo)? (ODS: Combate à pobreza)
                    <br></br>
                    <br />
                        a) Até 1 salário mínimo
                        <br></br>
                        b) Entre 1 e 2 salários mínimos
                        <br></br>
                        c) Entre 3 e 5 salários mínimos
                        <br></br>
                        d) Superior a 5 salários mínimos

                    </p>
                
                    <SelectAnswer getAnswers={getAnswers} ods={1}/>
                </div>

                <div className="QuizArea">
                    <p>  Atualmente, você considera ter acesso à serviços públicos de saúde, perto de sua residência? (ODS: Saúde e bem-estar)
                    <br></br>
                    <br />
                        a) Não há serviço público de saúde perto de minha residência
                        <br></br>
                        b) Somente Posto de Saúde
                        <br></br>
                        c) Posto de saúde e Clínica da Família
                        <br></br>
                        d) Hospitais, e os acima mencionados
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={3}/>
                </div>

                <div className="QuizArea">
                    <p>De 1 a 4, sendo 1(péssimo) e 4(muito bom), defina a qualidade das instituições educacionais na comunidade na qual você mora: (ODS: Educação de qualidade)
                    <br />
                    <br />
                        a) 1
                        <br />
                        b) 2
                        <br />
                        c) 3
                        <br />
                        d) 4
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={4}/>
                </div>

                <div className="QuizArea">
                    <p>Com que frequência você costuma fazer a reciclagem de produtos já utilizados? (ODS: Consumo e Produção Responsáveis)
                    <br />
                    <br />
                        a) Não costumo fazer a reciclagem
                        <br />
                        b) Quase nunca costumo reciclar
                        <br />
                        c) Comumente costumo reciclar meus produtos
                        <br />
                        d) Frequentemente faço a reciclagem dos produtos que não têm mais utilidade
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={12}/>
                </div>

                <div className="QuizArea">
                    <p>Você se considera uma pessoa mais consumista ou consciente(ODS: Consumo e Produção Responsáveis)?
                    <br />
                    <br />
                        a)Totalmente consumista, costumo fazer compras todo mês
                        <br />
                        b)Parcialmente consumista, faço compras quase sempre que almejo algo
                        <br />
                        c)Parcialmente consciente, não deixando totalmente de comprar algo quando tenho vontade
                        <br />
                        d)Totalmente consciente, compro somente quando há a necessidade
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={12}/>
                </div>

                <div className="QuizArea">
                    <p> Na região onde você mora, como é caracterizado o comércio local(ODS: Trabalho Descente e Crescimento Econômico)?
                    <br />
                    <br />
                            a) Comumente devemos nos deslocar para outros locais/bairros para encontrar oportunidades
                            <br />
                            b)Há um determinado comércio local, composto por supermercados, padarias, lojas etc.
                            <br />
                            c)Há a presença de empresas estrangeiras(exemplo: McDonald’s), bem como de shopping(s) center(s)
                            <br />
                            d)Comércio forte, marcado por empresas de relevância nacional e internacional.
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={8}/>
                </div>

                <div className="QuizArea">
                    <p>Quantos casos de feminicídio ou violência contra a mulher ocorreram na região onde você mora?
                    <br />
                    <br />
                            a) De 100 para cima
                            <br />
                            b) Entre 20 e 100
                            <br />
                            c) Entre 1 e 20
                            <br />
                            d) Nenhum caso
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={5}/>
                </div>

                <div className="QuizArea">
                    <p> Quantas iniciativas de incentivo à igualdade de gênero e inserção da mulher no mercado de trabalho você conhece?
                    <br />
                    <br />
                            a) Conheço nenhuma iniciativa deste gênero
                            <br />
                            b) Entre uma e três
                            <br />
                            c) Entre três e dez
                            <br />
                            d) De dez para mais
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={5}/>

                </div>

                <div className="QuizArea">
                    <p>  A comunidade em que vive possui acesso à água potável e saneamento básico?
                    <br />
                    <br />
                        a)Não, tanto um quanto outro são extremamente precários, havendo esgoto a céu aberto
                        <br />
                        b)Poucos têm este acesso
                        <br />
                        c)Uma parte significativa os tem
                        <br />
                        d)Toda a minha comunidade tem acesso a água e saneamento de qualidade
                        <br />
                    </p>
                    <SelectAnswer getAnswers={getAnswers} ods={6}/>
                </div>

                <button onClick={() => sendDataHandler()}>Enviar</button>

            </div>
            
        </div>
    )
}

export default Quiz