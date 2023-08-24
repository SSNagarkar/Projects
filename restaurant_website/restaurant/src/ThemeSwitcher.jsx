import './ThemeSwitcher.css';
import './gg-menu-themeswitcher.css';


function ThemeSwitcher({className, theme, toggleTheme}){
    const switchIcon = theme === 'light' ? "gg-moon" : "gg-sun";
    return(
        <span className={`themeswitcher ${className}`}>
            <button 
            type='button'
            className='themeswitcher-toggle'
            onClick={toggleTheme}>
                <span className='themeswitcher--switcher'/>
                <span className={switchIcon}/>
                
            </button>
        </span>
    );
}

export default ThemeSwitcher;