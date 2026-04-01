const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 StaffDesk</p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center' as const,
  },
}

export default Footer