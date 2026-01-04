import { FiHeart } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="bg-wedding-olive text-white py-8 mt-auto" style={{borderTop: '1px solid #59592B'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <FiHeart className="text-wedding-rose text-xl" />
            <span className="text-lg" style={{ fontFamily: "'Parisienne', cursive" }}>Carolina & Alexandre</span>
            <FiHeart className="text-wedding-rose text-xl" />
          </div>
          
          <p className="text-sm text-center opacity-90">
            Celebrando o amor e a união
          </p>
          
          <p className="text-xs opacity-75">
            © {currentYear} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
