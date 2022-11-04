import React, { useContext, useEffect, useState } from "react";
import './style.css'

import InputText from "../../components/InputText";
import InputCheckBox from "../../components/InputCheckBox";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../../contexts/results";
import { createIniciative } from '../../services/api'

const Initiative = () => {
    const [textAnswers, setTextAnswers] = useState(new Array(6).fill(''))
    const [selectAnswer, setSelectAnswer] = useState('')
    const [checkBoxAnswers, setCheckBoxAnswers] = useState(new Array(4).fill(0))
    const [points, setPoints] = useState(0)
    const [mainOds, setMainOds] = useState(0)
    const [error, setError] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const { storeResult } = useContext(ResultContext)
    const [processEnd, setProcessEnd] = useState(null)
    const navigate = useNavigate()

    const getTextAnswers = (value, index) => {
        var auxArray = [...textAnswers]
        auxArray.splice(index, 1, value)
        setTextAnswers(auxArray)
    }

    const getCheckBoxAnswers = (value, index) => {
        var auxArray = [...checkBoxAnswers]
        auxArray.splice(index, 1, value)
        setCheckBoxAnswers(auxArray)
    }

    const processData = () => {
        const auxResults = new Array(17).fill(0)
        const pointFactor = 100
        let pointsCounter = 0
        let odsMaxIndex = 0
        
        const obsSocial = [3, 3, 4, 4, 4, 4, 5, 5, 5, 10, 10, 10, 10, 16, 16, 16, 16, 16, 16]
        const obsAmbiental = [6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15]
        const obsEconomic = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 8, 8, 8, 9, 9, 9, 9, 9, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 17, 17, 17, 17]

        const socialData = checkBoxAnswers[1]
        const ambientalData = checkBoxAnswers[2]
        const economicData = checkBoxAnswers[3]

        if(socialData){
            for(let i = 0; i < socialData.length; i++){
                if(socialData[i] === true){
                    auxResults[obsSocial[i]-1] += pointFactor
                }
            }
        }

        if(ambientalData){
            for(let i = 0; i < ambientalData.length; i++){
                if(ambientalData[i] === true){
                    auxResults[obsAmbiental[i]-1] += pointFactor
                }
            }
        }

        if(economicData){
            for(let i = 0; i < economicData.length; i++){
                if(economicData[i] === true){
                    auxResults[obsEconomic[i]-1] += pointFactor
                }
            }
        }

        storeResult(auxResults)

        if(selectAnswer == '1'){
            setSelectAnswer('Sociedade Civil')
        }
        else if(selectAnswer == '2'){
            setSelectAnswer('Instituição Pública')
        }
        else if(selectAnswer == '3'){
           setSelectAnswer('Instituição Privada')
        }

        auxResults.map((eachResult, key) =>{
            if(eachResult > auxResults[odsMaxIndex]){
                odsMaxIndex = key
            }
            pointsCounter += eachResult
        })

        setPoints(pointsCounter)
        setMainOds(odsMaxIndex+1)

        return 1
    }

    const sendDataHandler = async () =>{
        setProcessEnd(processData())
    }

    useEffect(() =>{
        createNewIniciative()
    }, [processEnd])

    const createNewIniciative = async () => {
        if(processEnd === null){
            return
        }
        if(textAnswers[0] && textAnswers[1] && textAnswers[2] && textAnswers[3] && textAnswers[4] && textAnswers[5] && selectAnswer){
            try {
                const locationIQBaseUrl = `https://us1.locationiq.com/v1/search?key=pk.cf85b52eb08904e43721a3a3bbaf234f&q=${textAnswers[2]}&format=json`
                fetch(locationIQBaseUrl)
                    .then((request) => request.json())
                    .then(async (data) =>{
                        const request = await createIniciative(textAnswers[0], textAnswers[1], textAnswers[2], textAnswers[3], textAnswers[4], textAnswers[5], selectAnswer, points, mainOds, parseFloat(data[0].lat), parseFloat(data[0].lat))
                        navigate('/resultado') 
                    })
            } catch (error) {
                console.log(error)
                setTryAgain(false)
                setError(true)
            }
        }
        else{
            setTryAgain(true)
        }
    }

    return(
        <div className="Initiative">
            <div className="InitiativeContainer">
                <InputText index={0} getTextAnswers={getTextAnswers} label="Nome da iniciativa:"/>
                <InputText index={1} getTextAnswers={getTextAnswers} label="Nome completo do responsável:"/>
                <InputText index={2} getTextAnswers={getTextAnswers} label="Endereço completo:"/>
                <InputText index={3} getTextAnswers={getTextAnswers} label="Email do responsável:"/>
                <InputText index={4} getTextAnswers={getTextAnswers} label="Local de atuação da iniciativa:"/>
                <InputText index={5} getTextAnswers={getTextAnswers} label="Quantidade de pessoas atendidas:"/>

                <div className="InitiativeArea">
                    <p>Tipo da Instituição organizadora:</p>
                
                    <select className="form-select" aria-label="Default select example" onClick={(e) => setSelectAnswer(e.target.value)}>
                        <option defaultValue>Selecione sua resposta</option>
                        <option value="1">Sociedade Civil</option>
                        <option value="2">Instituição Pública</option>
                        <option value="3">Instituição Privada</option>
                    </select>
                </div>

                <InputCheckBox 
                    getCheckBoxAnswers={getCheckBoxAnswers}
                    checkBoxIndex={0}
                    title='A iniciativa tem atuação em qual dos pilares:' 
                    options={['Social', 'Ambiental', 'Econômico']}
                />

                {checkBoxAnswers[0][0] === true ?
                    <InputCheckBox 
                        getCheckBoxAnswers={getCheckBoxAnswers}
                        checkBoxIndex={1}
                        title='No âmbito social (relacionado às pessoas), assinale as alternativas que mais se relacionam com o objetivo da sua iniciativa:' 
                        options={[
                            'Saúde', 'Bem-estar', 'Educação básica', 'Alfabetização', 'Educação para cidadania', 'Educação para desenvolvimento sustentável', 'Igualdade de gênero', 'Empoderamento de mulheres e meninas', 'Trabalho doméstico', 'Redução das  desigualdades', 'Aumento de renda dos mais vulneráveis', 'Inclusão social', 'Econômica e política', 'Políticas migratórias e refugiados', 'Paz e justiça', 'Instituições eficazes', 'Acesso à justiça', 'Redução da violência', 'Redução da corrupção', 'Gestão participativa'
                        ]}
                    />
                    :
                    null
                }

                {checkBoxAnswers[0][1] === true ?
                    <InputCheckBox 
                        getCheckBoxAnswers={getCheckBoxAnswers}
                        checkBoxIndex={2}
                        title='No âmbito ambiental (relacionado ao planeta), assinale as alternativas que mais se relacionam com o objetivo da sua iniciativa:' 
                        options={[
                            'Qualidade da água', 'Água potável', 'Saneamento básico/esgoto sanitário', 'Economia de água', 'Qualidade de rios e córregos', 'Proteção de mananciais', 'Comitê de bacias hidrográficas', 'Recursos hídricos', 'Acesso à energia elétrica', 'Energia limpa', 'Consumo e produção responsáveis', 'Uso eficiente de recursos naturais', 'Resíduos perigosos ou reuso', 'Turismo sustentável', 'Mudança do clima', 'Desastres naturais', 'Educação para mudança do clima', 'Gases do efeito estufa GEE', 'Vida na água', 'Oceanos, mares e recursos marinhos', 'Eutrofização', 'Lixo plástico nos mares', 'Pesca', 'Áreas de proteção costeira ou marinha', 'Vida terrestre', 'Ecossistemas terrestres', 'Florestas', 'Desertificação, degradação do solo', 'Biodiversidade', 'Áreas de proteção terrestre'
                        ]}
                    />
                    :
                    null
                }

                {checkBoxAnswers[0][2] === true ?
                    <InputCheckBox 
                        getCheckBoxAnswers={getCheckBoxAnswers}
                        checkBoxIndex={3}
                        title='No âmbito econômico (relacionado à prosperidade), assinale as alternativas que se relacionam com o objetivo da sua iniciativa:' 
                        options={[
                            'Erradicação da pobreza', 'Direito à moradia', 'Resiliência dos pobres e daqueles em situação de vulnerabilidade', 'Programas e políticas sociais', 'Fome zero', 'Agricultura sustentável', 'Acesso à alimentos nutritivos', 'Insegurança alimentar', 'Produtividade e renda agrícola', 'Investimento e desenvolvimento agrícola', 'Emprego decente', 'Crescimento econômico', 'Direitos trabalhistas', 'Indústria', 'Pesquisa, desenvolvimento e  inovação', 'Infraestrutura', 'Microempresas', 'Captura de carbono por atividade industrial', 'Tecnologias de informação e comunicação', 'Cidades e comunidades sustentáveis', 'Habitação / moradia segura', 'Urbanização de favelas',  'Transporte público', 'Desenvolvimento urbano sustentável', 'Patrimônios culturais e naturais', 'Desastres naturais (mortes e perdas financeiras )', 'Gestão municipal de resíduos sólidos urbanos', 'Poluição do ar', 'Acesso à áreas públicas verdes e abertas', 'Acessibilidade às áreas públicas', 'Políticas pública económico e socioambientais', 'Parcerias e meios de implementação', 'Fortalecer a mobilização de recursos internos',  'Aumentar a estabilidade macroeconômica', 'Cooperação entre países para o desenvolvimento'
                        ]}
                    />
                    :
                    null
                }       

                <button onClick={() => sendDataHandler()}>Enviar</button>

                {error || tryAgain ?
                    tryAgain ?
                        <div>
                            <p>Preencha todos os campos do formulário...</p>
                        </div>
                        :
                        <div>
                            <p>Ocorreu um erro tente novamente...</p>
                        </div>
                    :
                    null
                }

            </div>
            
        </div>
    )
}

export default Initiative