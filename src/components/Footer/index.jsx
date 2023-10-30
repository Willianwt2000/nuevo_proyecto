import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://app.aluracursos.com/user/willianmetelien' target="_blank" rel="noreferrer nofolllow">
                <img src="/img/alura.svg" alt='Alura perfil' />
            </a>
            <a href='https://www.linkedin.com/in/willian-casta%C3%B1o-m-bb373724b/' target="_blank" rel="noreferrer nofolllow">
                <img src="/img/linkedin.svg" alt='LinkedIn' />
            </a>
            <a href='https://github.com/Willianwt2000'target="_blank" rel="noreferrer nofolllow" >
                <img src="/img/github-light.svg" alt='Github' />
            </a>
            <a href='https://discord.com/channels/1006833315321495592'target="_blank" rel="noreferrer nofolllow" >
                <img src="/img/discord-icon-svgrepo-com (1).svg" alt='Discord' />
            </a>
        </div>
        <img className="logo-footer" src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Willian Metelien</strong>
    </footer>
}

export default Footer