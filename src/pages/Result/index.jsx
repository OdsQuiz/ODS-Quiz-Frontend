import React from "react";
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



const Result = () => {
    return(
        <div className="Result">
            <h1>Resultado Final</h1>
            <div className="Points">
                <ODSPoints image={obs1} points={213} />
                <ODSPoints image={obs2} points={213} />
                <ODSPoints image={obs3} points={213} />
                <ODSPoints image={obs4} points={213} />
                <ODSPoints image={obs5} points={213} />
                <ODSPoints image={obs6} points={213} />
                <ODSPoints image={obs7} points={213} />
                <ODSPoints image={obs8} points={213} />
                <ODSPoints image={obs9} points={213} />
                <ODSPoints image={obs10} points={213} />
                <ODSPoints image={obs11} points={213} />
                <ODSPoints image={obs12} points={213} />
                <ODSPoints image={obs13} points={213} />
                <ODSPoints image={obs14} points={213} />
                <ODSPoints image={obs15} points={213} />
                <ODSPoints image={obs16} points={213} />
                <ODSPoints image={obs17} points={213} />
            </div>

            <div className="ResultDetail">

                <h2>Maior Pontuação</h2>

                <ODSPoints image={obs6} points={213} />
                <p>Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos</p>
                <a href="https://brasil.un.org/pt-br/sdgs/6">Estágio Atual no Brasil e indicadores</a>
            </div>
            
        </div>
    )
}

export default Result