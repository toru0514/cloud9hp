export const Link = ({ children, to, external }) => {
  const externalProps = external ? {
    target: '_blank',
    rel: 'noreferrer'
  } : {}

  return (
    <a href={to} {...externalProps}>{children}</a>
  )
}