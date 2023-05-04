import TrollFaceLogo from '../images/troll-face-logo.png';


export default function Header() {
    return (
        <header className="header">
            <img src={TrollFaceLogo} alt='Troll Face Logo' className="logo-image" />
            <h3>Meme Generator</h3>
        </header>
    )
}