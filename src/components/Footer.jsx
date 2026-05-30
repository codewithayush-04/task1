export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} Alex Morgan. Built with React &amp; CSS.</p>
    </footer>
  )
}
