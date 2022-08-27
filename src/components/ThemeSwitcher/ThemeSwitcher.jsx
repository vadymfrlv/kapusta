import { useTheme } from '../../hooks/useTheme';
import s from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={s.toggleBtn} id="toggle">
      <input
        type="checkbox"
        checked={theme === 'night'}
        onChange={() => {
          if (theme === 'day') {
            setTheme('night');
          } else {
            setTheme('day');
          }
        }}
      />
      <span>&nbsp;</span>
    </div>
  );
}
