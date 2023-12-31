import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Xin chào {username}!</h1>

            <p><Link to="/dash/notes">Note</Link></p>

            <p><Link to="/dash/notes/new">Thêm ghi chú</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">Nhân viên</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Thêm nhân viên</Link></p>}

        </section>
    )

    return content
}
export default Welcome