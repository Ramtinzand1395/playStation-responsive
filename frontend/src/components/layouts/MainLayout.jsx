import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Navbar /> 
        </nav>
      </header>

      {children}
      
    </div>
  );
};

export default MainLayout;
