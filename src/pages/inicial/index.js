import './index.scss';

export default function Bid() {
  return (
    <main className='pagina-bid'>

      <div className='cabecalho'>
        <div className='cabe-itens'>
          <img src='/assets/images/logoCBF.png'/>
          <h1>BID da CBF</h1>
        </div>
      </div>

      <div className='conteudo'>

        <div className='fundo-jogador'>

            <div className='add-jogador'>

              <div className='titulo-jog'>
                <h3>Adicionar Jogador</h3>
              </div>

                <div className='nome-input'>
                  <h6>Nome</h6>
                  <input type='text' placeholder='Thauan' />
                </div>

                <div className='contrato-input'>
                  <h6>Tipo de Contrato</h6>
                  <input type='text' placeholder='Liberar' />
                </div>

                <div className='clube-input'>
                  <h6>Clube</h6>
                  <input type='text' placeholder='Palsão FC.' />
                </div>

                <div className='publicacao-input'>
                  <h6>Publicação</h6>
                  <input type='text' placeholder='02/10/2023 15:07' />
                </div>

                <div className='nascimento-input'>
                  <h6>Data de Nascimento</h6>
                  <input type='text' placeholder='02/10/2023' />
                </div>


                <div className='botao'>

                  <button>ADICIONAR</button>

                </div>

            </div>

        </div>

      </div>

    </main>
  );
}


