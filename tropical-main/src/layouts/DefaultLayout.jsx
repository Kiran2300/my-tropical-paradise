import { Title, Meta, Link } from 'react-head';
import { useFela } from 'react-fela';
import favicon from './favicon.png';
import { Navigation } from '../components/Navigation.jsx';  // Import the Navigation component

export function DefaultLayout({ meta, children }) {
  const { css } = useFela();
  return (
    <div role='main'>
      {meta.title ? <Title>{meta.title}</Title> : null}
      {meta.description ? <Meta name='description' content={meta.description} /> : null}
      <Link rel='icon' type='image/png' href={favicon} />
      
      <div className={css({ margin: '0 auto', maxWidth: '44rem' })}>
        {/* Add Navigation here */}
        <Navigation />
        {children}
      </div>
    </div>
  );
}
