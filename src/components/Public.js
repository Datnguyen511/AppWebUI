import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1><span className="nowrap">Tech Note Nga Cafe</span></h1>
            </header>
            <main className="public__main">
                <p>Note quản lí nhân viên</p>
                <address className="public__addr">
                    Nga Cafe<br />
                    55 Cửu Long<br />
                    <a href="">0938766109</a><br />
                    <a href="">Group 2</a>
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Đăng nhập</Link>
            </footer>
        </section>

    )
    return content
}
export default Public