import '../../style/sectionTrabalho.scss'
import img from  '../../../public/imagens/techWorld.png'

export function SectionQuemSomosNos(){
    return(
        <section className='SectionTrabalho  m-auto d-flex justify-content-center align-items-center'>    

                <div className='divImagemTexto w-50'>
                    <h1>Quem Somos Nós</h1>
                    <img src={img} className="img-thumbnail " alt="..." />
                </div>

                <div className='w-50 p-2'>
                   <h1>Nos somos uma</h1>
                   <p>A TechWorld  é uma referência no setor de desenvolvimento de software, proporcionando soluções digitais de alta qualidade para empresas de todos os tamanhos. Nosso compromisso é oferecer serviços personalizados e inovadores, impulsionando o crescimento e o sucesso de nossos clientes no ambiente digital.</p>
                </div>

                <div className="divLista">
                    <div>
                        <h1>Sites</h1>
                        <p>Criamos e damos manutençao em sites</p>
                    </div>

                    <div>
                        <h1>Aplicativos</h1>
                        <p>Criamos e damos manutençao em Aplicativos</p>
                    </div>

                    <div>
                        <h1>Chatbot</h1>
                        <p>Criamos e damos manutençao em automaçoes de atendimento</p>
                    </div>

                    <div>
                        <h1>Planilhas</h1>
                        <p>Criamos e damos manutençao em planilhas</p>
                    </div>
                </div>

        </section>
    );
}