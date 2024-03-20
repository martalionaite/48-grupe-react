import style from './Footer.module.css';

function Footer() {
    return (
    <footer className={style['main-footer']}>
        <a className={style.link} href="/">Terms of service</a>
        <p className={style.copyright}>Copyright &copy; 2024. RB + 48group</p>
    </footer>
    );
};

export { Footer };