import { useFela } from 'react-fela';

export function DefaultLayout({ meta, children }) {
  const { css } = useFela();

  return (
    <div className={css({ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' })}>
      {meta.title ? <Title>{meta.title}</Title> : null}
      {meta.description ? <Meta name="description" content={meta.description} /> : null}

      <div className={css({ margin: '0 auto', maxWidth: '44rem' })}>
        {children}
      </div>
    </div>
  );
}
