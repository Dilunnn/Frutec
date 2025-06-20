import { useState } from 'react';




const Cardapio = () => {

  const [tamanhoCopo, setTamanhoCopo] = useState('');
  const [recheioUM, setRecheioUM] = useState('')
  const [recheioDois, setRecheioDois] = useState('')
  const [recheioTres, setRecheioTres] = useState('')
  const [frutaUM, setFrutaUM] = useState('')
  const [frutaDois, setFrutaDois] = useState('')
  const [complementoUM, setComplementoUm] = useState('')
  const [complementoTres, setComplementoTres] = useState('')
  const [complementoQuatro, setComplementoQuatro] = useState('')
  const [complementoDois, setComplementoDois] = useState('')
  const [complementoCinco, setComplementoCinco] = useState('')


  const selecionarTamanho = (tamanho) => {
    setTamanhoCopo(tamanho);
    console.log("Tamanho escolhido:", tamanho);
  }

  const recheio1 = (recheio) => {
    setRecheioUM(recheio);
    console.log("recheio1", recheio);
  }

    const recheio2 = (recheio) => {
    setRecheioDois(recheio);
    console.log("recheio2", recheio);
  }

    const recheio3 = (recheio) => {
    setRecheioTres(recheio);
    console.log("recheio3", recheio);
  }

     const fruta1 = (recheio) => {
    setFrutaUM(recheio);
    console.log("fruta1", recheio);
  }

       const fruta2 = (recheio) => {
    setFrutaDois(recheio);
    console.log("fruta2", recheio);
  }

       const complemento1 = (recheio) => {
    setComplementoUm(recheio);
    console.log("complemento1", recheio);
  }

        const complemento2 = (recheio) => {
    setComplementoDois(recheio);
    console.log("complemento2", recheio);
  }

        const complemento3 = (recheio) => {
    setComplementoTres(recheio);
    console.log("complemento3", recheio);
  }

        const complemento4 = (recheio) => {
    setComplementoQuatro(recheio);
    console.log("complemento4", recheio);
  }
        const complemento5 = (recheio) => {
    setComplementoCinco(recheio);
    console.log("complemento4", recheio);
  }

    async function CadastrarPedido(idUsuario, tamanhoCopo, recheioUM, recheioTres, frutaUM, frutaDois, complementoUM, complementoDois, complementoTres,complementoQuatro, complementoCinco ) {
        try {
            const response = await fetch('http://localhost:3000/CadastrarPedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   idUsuario: 1, 
                tamanhoCopo: tamanhoCopo,
                camada_1: recheioUM,
                camada_2: recheioDois,
                camada_3: recheioTres,
                fruta_1: frutaUM,
                fruta_2: frutaDois,
                complemento_1: complementoUM,
                complemento_2: complementoDois,
                complemento_3: complementoTres,
                complemento_4: complementoQuatro,
                complemento_5: complementoCinco
                }),
            });

            if (!response.ok) {
                console.log('Erro ao cadastrar');
                return;
            }

            const data = await response.json();
            alert('Cadastro realizado com sucesso:');
        } catch (error) {
            console.log('Erro:', error);
        }
    }

     const Submit = (e) => {
        e.preventDefault();
        CadastrarPedido(idUsuario, tamanhoCopo, recheioUM, recheioTres, frutaUM, frutaDois, complementoUM, complementoDois, complementoTres,complementoQuatro, complementoCinco );
    };

  

   
    
  return (
    <>
    <h1>cardapio!!!</h1>
    <h3>escolha os itens que voce deseja</h3>
    <form>
      <label htmlFor="tamanho">
        escolha o tamalho do copo de açai:
      </label>
      <input type="button" name='Pequeno' id='tamanho' value={'pequeno'} onClick={() => selecionarTamanho('Pequeno')} />
      <input type="button" name='Médio' id='tamanho' value={'medio'} onClick={() => selecionarTamanho('Médio')} />
      <input type="button" name='Grande' id='tamanho' value={'grande'} onClick={() => selecionarTamanho('Grande')}/>
<br />
      <label htmlFor="camada_1">escolha um recheio:</label>
      <input type="button" id='camada_1' name='Leite Ninho' value={'leite ninho'} onClick={() => recheio1('Leite Ninho')}/>
      <input type="button" id='camada_1' name='Leite Condensado' value={'Leite Condensado'}  onClick={() => recheio1('Leite Condensado')}/>
      <input type="button" id='camada_1' name='Creme de Le' value={'Creme de Leite'} onClick={() => recheio1('Creme de Leite')}/>
      <input type="button" id='camada_1' name='Granola' value={'Granola'} onClick={() => recheio1('Granola')}/>
      <input type="button" id='camada_1' name='Paçoca' value={'Paçoca'} onClick={() => recheio1('Paçoca')}/>
      <input type="button" id='camada_1' name='Chocolate Granulado' value={'Chocolate Granulado'} onClick={() => recheio1('Chocolate Granulado')}/>
      <input type="button" id='camada_1' name='Nutella' value={'Nutella'} onClick={() => recheio1('Nutella')}/>
      <input type="button" id='camada_1' name='Mel' value={'Mel'} onClick={() => recheio1('Mel')}/>
      <input type="button" id='camada_1' name='Doce de Leite' value={'Doce de Leite'} onClick={() => recheio1('Doce de Leite')}/>
      <input type="button" id='camada_1' name='Leite em Pó' value={'Leite em Pó'} onClick={() => recheio1('Leite em Pó')}/>
<br />
       <label htmlFor=" camada_2">escolha um segundo recheio:</label>
      <input type="button" id=' camada_2' name='Leite Ninho' value={'leite ninho'} onClick={() => recheio2 ('Leite ninho')} />
      <input type="button" id=' camada_2' name='Leite Condensado' value={'Leite Condensado'} onClick={() => recheio2 ('Leite Condensado')} />
      <input type="button" id=' camada_2' name='Creme de Le' value={'Creme de Leite'} onClick={() => recheio2 ('Creme de Leite')} />
      <input type="button" id=' camada_2' name='Granola' value={'Granola'} onClick={() => recheio2 ('Granola')} />
      <input type="button" id=' camada_2' name='Paçoca' value={'Paçoca'} onClick={() => recheio2 ('Paçoca')} />
      <input type="button" id=' camada_2' name='Chocolate Granulado' value={'Chocolate Granulado'} onClick={() => recheio2 ('Chocolate Granulado')} />
      <input type="button" id=' camada_2' name='Nutella' value={'Nutella'} onClick={() => recheio2 ('Nutella')} />
      <input type="button" id=' camada_2' name='Mel' value={'Mel'} onClick={() => recheio2 ('Mel')} />
      <input type="button" id=' camada_2' name='Doce de Leite' value={'Doce de Leite'} onClick={() => recheio2 ('Doce de Leite')} />
      <input type="button" id=' camada_2' name='Leite em Pó' value={'Leite em Pó'} onClick={() => recheio2 ('Leite em Pó')} />
<br />
       <label htmlFor=" camada_3">escolha um terceiro recheio:</label>
      <input type="button" id=' camada_3' name='Leite Ninho' value={'leite ninho'} onClick={() => recheio3 ('leite ninho')} />
      <input type="button" id=' camada_3' name='Leite Condensado' value={'Leite Condensado'}  onClick={() => recheio3 ('Leite Condensado')} />
      <input type="button" id=' camada_3' name='Creme de Le' value={'Creme de Leite'}  onClick={() => recheio3 ('Creme de Leite')}/>
      <input type="button" id=' camada_3' name='Granola' value={'Granola'}  onClick={() => recheio3 ('Granola')}/>
      <input type="button" id=' camada_3' name='Paçoca' value={'Paçoca'}  onClick={() => recheio3 ('Paçoca')}/>
      <input type="button" id=' camada_3' name='Chocolate Granulado' value={'Chocolate Granulado'}  onClick={() => recheio3 ('Chocolate Granulado')}/>
      <input type="button" id=' camada_3' name='Nutella' value={'Nutella'}  onClick={() => recheio3 ('Nutella')}/>
      <input type="button" id=' camada_3' name='Mel' value={'Mel'} onClick={() => recheio3 ('Mel')} /> 
      <input type="button" id=' camada_3' name='Doce de Leite' value={'Doce de Leite'}  onClick={() => recheio3 ('Doce de Leite')}/>
      <input type="button" id=' camada_3' name='Leite em Pó' value={'Leite em Pó'}  onClick={() => recheio3 ('Leite em Pó')}/>
<br />
      <label htmlFor="fruta_1"> escolha uma fruta</label>
      <input type="button"id='fruta_1' name='Morango' value={'Morango'} onClick={() => fruta1('morango')} />
      <input type="button"id='fruta_1' name='Banana' value={'Banana'}  onClick={() => fruta1('Banana')}/>
      <input type="button"id='fruta_1' name='Kiwi' value={'Kiwi'}  onClick={() => fruta1('Kiwi')}/>
      <input type="button"id='fruta_1' name='Manga' value={'Manga'}  onClick={() => fruta1('Manga')}/>
      <input type="button"id='fruta_1' name='Abacaxi' value={'Abacaxi'}  onClick={() => fruta1('Abacaxi')}/>
      <input type="button"id='fruta_1' name='Uva' value={'Uva'}  onClick={() => fruta1('morango')}/>
      <input type="button"id='fruta_1' name='Blueberry' value={'Blueberry'}  onClick={() => fruta1('Uva')}/>
      <input type="button"id='fruta_1' name='Maracujá' value={'Maracujá'}  onClick={() => fruta1('Maracujá')}/>
      <input type="button"id='fruta_1' name='Melancia' value={'Melancia'}  onClick={() => fruta1('Melancia')}/>
      <input type="button"id='fruta_1' name='Acerola' value={'Acerola'}  onClick={() => fruta1('Acerola')}/>
<br />
    <label htmlFor="fruta_2"> escolha uma fruta</label>
      <input type="button"id='fruta_2' name='Morango' value={'Morango'} onClick={() => fruta2('morango')} />
      <input type="button"id='fruta_2' name='Banana' value={'Banana'}  onClick={() => fruta2('Banana')}/>
      <input type="button"id='fruta_2' name='Kiwi' value={'Kiwi'}  onClick={() => fruta2('Kiwi')}/>
      <input type="button"id='fruta_2' name='Manga' value={'Manga'}  onClick={() => fruta2('Manga')}/>
      <input type="button"id='fruta_2' name='Abacaxi' value={'Abacaxi'}  onClick={() => fruta2('Abacaxi')}/>
      <input type="button"id='fruta_2' name='Uva' value={'Uva'}  onClick={() => fruta2('morango')}/>
      <input type="button"id='fruta_2' name='Blueberry' value={'Blueberry'}  onClick={() => fruta2('Uva')}/>
      <input type="button"id='fruta_2' name='Maracujá' value={'Maracujá'}  onClick={() => fruta2('Maracujá')}/>
      <input type="button"id='fruta_2' name='Melancia' value={'Melancia'}  onClick={() => fruta2('Melancia')}/>
      <input type="button"id='fruta_2' name='Acerola' value={'Acerola'}  onClick={() => fruta2('Acerola')}/>
<br />
      <label htmlFor="complemento_1">escolha um complemento</label>
      <input type="button" id='complemento_1' name='Castanha de Caju' value={'Castanha de Caju'} onClick={()=>{complemento1('Castanha de Caju')}} />
      <input type="button" id='complemento_1' name='Amendoim Torrado' value={'Amendoim Torrado'} onClick={()=>{complemento1('Amendoim Torrado')}}/>
      <input type="button" id='complemento_1' name='Coco Ralado' value={'Coco Ralado'} onClick={()=>{complemento1('Coco Ralado')}}/>
      <input type="button" id='complemento_1' name='Gotas de Chocolate' value={'Gotas de Chocolate'} onClick={()=>{complemento1('Gotas de Chocolate')}}/>
      <input type="button" id='complemento_1' name='Leite de Coco' value={'Leite de Coco'} onClick={()=>{complemento1('Leite de Coco')}}/>
      <input type="button" id='complemento_1' name='Tapioca' value={'Tapioca'} onClick={()=>{complemento1('Tapioca')}}/>
      <input type="button" id='complemento_1' name='Chantilly' value={'Chantilly'} onClick={()=>{complemento1('Chantilly')}}/>
      <input type="button" id='complemento_1' name='Granulado Colorido' value={'Granulado Colorido'} onClick={()=>{complemento1('Granulado Colorido')}}/>
      <input type="button" id='complemento_1' name='Cereal Matinal' value={'Cereal Matinal'} onClick={()=>{complemento1('Cereal Matinal')}}/>
      <input type="button" id='complemento_1' name='Aveia' value={'Aveia'} onClick={()=>{complemento1('Aveia')}}/>
<br />

      <label htmlFor="complemento_2">escolha um complemento</label>
      <input type="button" id='complemento_2' name='Castanha de Caju' value={'Castanha de Caju'} onClick={()=>{complemento2('Castanha de Caju')}} />
      <input type="button" id='complemento_2' name='Amendoim Torrado' value={'Amendoim Torrado'} onClick={()=>{complemento2('Amendoim Torrado')}}/>
      <input type="button" id='complemento_2' name='Coco Ralado' value={'Coco Ralado'} onClick={()=>{complemento2('Coco Ralado')}}/>
      <input type="button" id='complemento_2' name='Gotas de Chocolate' value={'Gotas de Chocolate'} onClick={()=>{complemento2('Gotas de Chocolate')}}/>
      <input type="button" id='complemento_2' name='Leite de Coco' value={'Leite de Coco'} onClick={()=>{complemento2('Leite de Coco')}}/>
      <input type="button" id='complemento_2' name='Tapioca' value={'Tapioca'} onClick={()=>{complemento2('Tapioca')}}/>
      <input type="button" id='complemento_2' name='Chantilly' value={'Chantilly'} onClick={()=>{complemento2('Chantilly')}}/>
      <input type="button" id='complemento_2' name='Granulado Colorido' value={'Granulado Colorido'} onClick={()=>{complemento2('Granulado Colorido')}}/>
      <input type="button" id='complemento_2' name='Cereal Matinal' value={'Cereal Matinal'} onClick={()=>{complemento2('Cereal Matinal')}}/>
      <input type="button" id='complemento_2' name='Aveia' value={'Aveia'} onClick={()=>{complemento2('Aveia')}}/>
<br />

      <label htmlFor="complemento_3">escolha um complemento</label>
      <input type="button" id='complemento_3' name='Castanha de Caju' value={'Castanha de Caju'} onClick={()=>{complemento3('Castanha de Caju')}} />
      <input type="button" id='complemento_3' name='Amendoim Torrado' value={'Amendoim Torrado'} onClick={()=>{complemento3('Amendoim Torrado')}}/>
      <input type="button" id='complemento_3' name='Coco Ralado' value={'Coco Ralado'} onClick={()=>{complemento3('Coco Ralado')}}/>
      <input type="button" id='complemento_3' name='Gotas de Chocolate' value={'Gotas de Chocolate'} onClick={()=>{complemento3('Gotas de Chocolate')}}/>
      <input type="button" id='complemento_3' name='Leite de Coco' value={'Leite de Coco'} onClick={()=>{complemento3('Leite de Coco')}}/>
      <input type="button" id='complemento_3' name='Tapioca' value={'Tapioca'} onClick={()=>{complemento3('Tapioca')}}/>
      <input type="button" id='complemento_3' name='Chantilly' value={'Chantilly'} onClick={()=>{complemento3('Chantilly')}}/>
      <input type="button" id='complemento_3' name='Granulado Colorido' value={'Granulado Colorido'} onClick={()=>{complemento3('Granulado Colorido')}}/>
      <input type="button" id='complemento_3' name='Cereal Matinal' value={'Cereal Matinal'} onClick={()=>{complemento3('Cereal Matinal')}}/>
      <input type="button" id='complemento_3' name='Aveia' value={'Aveia'} onClick={()=>{complemento3('Aveia')}}/>
<br />

      <label htmlFor="complemento_4">escolha um complemento</label>
      <input type="button" id='complemento_4' name='Castanha de Caju' value={'Castanha de Caju'} onClick={()=>{complemento4('Castanha de Caju')}} />
      <input type="button" id='complemento_4' name='Amendoim Torrado' value={'Amendoim Torrado'} onClick={()=>{complemento4('Amendoim Torrado')}}/>
      <input type="button" id='complemento_4' name='Coco Ralado' value={'Coco Ralado'} onClick={()=>{complemento4('Coco Ralado')}}/>
      <input type="button" id='complemento_4' name='Gotas de Chocolate' value={'Gotas de Chocolate'} onClick={()=>{complemento4('Gotas de Chocolate')}}/>
      <input type="button" id='complemento_4' name='Leite de Coco' value={'Leite de Coco'} onClick={()=>{complemento4('Leite de Coco')}}/>
      <input type="button" id='complemento_4' name='Tapioca' value={'Tapioca'} onClick={()=>{complemento4('Tapioca')}}/>
      <input type="button" id='complemento_4' name='Chantilly' value={'Chantilly'} onClick={()=>{complemento4('Chantilly')}}/>
      <input type="button" id='complemento_4' name='Granulado Colorido' value={'Granulado Colorido'} onClick={()=>{complemento4('Granulado Colorido')}}/>
      <input type="button" id='complemento_4' name='Cereal Matinal' value={'Cereal Matinal'} onClick={()=>{complemento4('Cereal Matinal')}}/>
      <input type="button" id='complemento_4' name='Aveia' value={'Aveia'} onClick={()=>{complemento4('Aveia')}}/>
<br />
<label htmlFor="complemento_5">escolha um complemento</label>
      <input type="button" id='complemento_5' name='Castanha de Caju' value={'Castanha de Caju'} onClick={()=>{complemento5('Castanha de Caju')}} />
      <input type="button" id='complemento_5' name='Amendoim Torrado' value={'Amendoim Torrado'} onClick={()=>{complemento5('Amendoim Torrado')}}/>
      <input type="button" id='complemento_5' name='Coco Ralado' value={'Coco Ralado'} onClick={()=>{complemento5('Coco Ralado')}}/>
      <input type="button" id='complemento_5' name='Gotas de Chocolate' value={'Gotas de Chocolate'} onClick={()=>{complemento5('Gotas de Chocolate')}}/>
      <input type="button" id='complemento_5' name='Leite de Coco' value={'Leite de Coco'} onClick={()=>{complemento5('Leite de Coco')}}/>
      <input type="button" id='complemento_5' name='Tapioca' value={'Tapioca'} onClick={()=>{complemento5('Tapioca')}}/>
      <input type="button" id='complemento_5' name='Chantilly' value={'Chantilly'} onClick={()=>{complemento5('Chantilly')}}/>
      <input type="button" id='complemento_5' name='Granulado Colorido' value={'Granulado Colorido'} onClick={()=>{complemento5('Granulado Colorido')}}/>
      <input type="button" id='complemento_5' name='Cereal Matinal' value={'Cereal Matinal'} onClick={()=>{complemento5('Cereal Matinal')}}/>
      <input type="button" id='complemento_5' name='Aveia' value={'Aveia'} onClick={()=>{complemento5('Aveia')}}/>
<br />

<br /><br />
      <input type="submit" value={'enviar'} className='submit' />
    </form>

      <p>Tamanho selecionado: {tamanhoCopo}</p>
      <p>recheio1 {recheioUM}</p>
      <p>recheio2 {recheioDois}</p>
      <p>recheio3 {recheioTres}</p>
      <p>fruta1 {frutaUM}</p>
      <p>fruta2 {frutaDois}</p>
      <p>complemento1 {complementoUM}</p>
      <p>complemento2 {complementoDois}</p>
      <p>complemento3 {complementoTres}</p>
      <p>complemento4 {complementoQuatro}</p>
      <p>complemento5 {complementoCinco}</p>


    </>
  )
}

export default Cardapio





