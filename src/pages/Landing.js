import main from '../assets/images/main.png';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Employment <span>Progress</span>
          </h1>
          <p>
             Стеж за прогресом пошуку твоєї роботи разом з нами! 
          </p>
          <Link to='/register' className='btn btn-hero'>
            Вхід / Реєстрація
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
