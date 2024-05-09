interface DashboardProps {
  children: React.ReactNode
}

const DashBoardComponent: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="flex align-center w-full h-full min-h-screen">
      {children}
    </div>
  )
}

export default DashBoardComponent