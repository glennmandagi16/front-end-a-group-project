const Footer = () => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f1f1f1', textAlign: 'center', padding: '10px 0' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li>© 2024 My Website</li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
        </footer>
    );
}

export default Footer;

