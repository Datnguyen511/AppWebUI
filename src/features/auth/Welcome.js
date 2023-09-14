import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Xin chao {username}!</h1>

            <p><Link to="/dash/notes">Note</Link></p>

            <p><Link to="/dash/notes/new">Them note</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Nhan vien</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Them nhan vien</Link></p>}

        </section>
    )

    return content
}
export default Welcome