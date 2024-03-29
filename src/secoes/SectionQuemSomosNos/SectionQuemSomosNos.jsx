import '../../style/sectionTrabalho.scss'
import { Tituloh1, Tituloh3 } from '../../componentes/titulos/titulo';
import img from  '../../../public/imagens/logoTecnologico.png'
import {Col, Image} from 'react-bootstrap'

export function SectionQuemSomosNos(){
    return(
        <section id='service' className='SectionTrabalho d-flex align-items-center justify-content-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='divImagemTexto text-center'>   
                        <Tituloh1  valueUm="Tech World" />
                        <Col className="m-auto" xs={10} md={12}>
                            <Image src={img} className='imagem' fluid />
                        </Col>
                    </div>
                </div>
    
                <div className='col-lg-6 pe-4'>
                    <div>
                        <div>
                            <Tituloh1 valueUm="Desenvolvedora de Software" />
                            <p className="textoPrincipal">A TechWorld atua no setor de desenvolvimento de software, proporcionando soluções digitais de alta qualidade para empresas de todos os tamanhos.</p>
                        </div>
    
                        <div className='divTitulos'>
                            <div className='servicoItem'>
                                <Tituloh3 valueTres="Sites" />
                                <p className="textoPrincipal">Criação e Manutenção em sites</p>
                            </div>
                            <div className='servicoItem'>
                                <Tituloh3 valueTres="Aplicativos" />
                                <p className="textoPrincipal">Criação e manutenção em aplicativos</p>
                            </div>
                            <div className='servicoItem'>
                                <Tituloh3 valueTres="Chatbot" />
                                <p className="textoPrincipal">Criação e manutenção em automações de atendimento</p>
                            </div>
                            <div className='servicoItem'>
                                <Tituloh3 valueTres="Planilhas" />
                                <p className="textoPrincipal">Criação e manutenção em planilhas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    );
}
