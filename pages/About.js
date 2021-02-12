import Link from 'next/link'

function About() {

  return(
    <div>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
      </ul>
      <hr/>
      <p class="sublinhado">Pagina About</p>
      <p>Uma simples pagina para utilizar rotas</p>
    </div>
  )
}

export default About
