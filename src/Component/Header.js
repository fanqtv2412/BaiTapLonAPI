import "./Header.css"
const Header=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact</a>
                    </li>
                    <button >Logout</button>
                </ul>
            </div>
        </nav>
    )
}
export default Header;