import { useFela } from 'react-fela';

export const Navigation = () => {
  const { css } = useFela(); // Fela hook to generate styles

  const navStyles = css({
    backgroundColor: '#333',
    padding: '10px',
  });

  const listStyles = css({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  });

  const itemStyles = css({
    marginRight: '20px',
  });

  const linkStyles = css({
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    padding: '8px 16px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#555',
      borderRadius: '5px',
    },
  });

  return (
    <nav className={navStyles}>
      <ul className={listStyles}>
        <li className={itemStyles}><a href="/" className={linkStyles}>Home</a></li>
        <li className={itemStyles}><a href="/about" className={linkStyles}>About</a></li>
        <li className={itemStyles}><a href="/portfolio" className={linkStyles}>Portfolio</a></li>
        <li className={itemStyles}><a href="/blog" className={linkStyles}>Blog</a></li>
        <li className={itemStyles}><a href="/contact" className={linkStyles}>Contact</a></li>
      </ul>
    </nav>
  );
};
