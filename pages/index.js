import Link from 'next/link'

function HomePage() {
  return(
     
    <div>
      <ul>
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul>    
      <hr/>
      
      <p class="sublinhado">Pagina Home</p>
      <p> Componente Simples utilizando next js para o projeto de ssr! </p>
    </div>
  )
}

export default HomePage
