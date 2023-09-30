import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Login from './components/Login';
import Instruction from './components/Instruction';
import Main from './components/Main';
import Signup from './components/Signup';
import Device from './components/Device';
import Photo from './components/Photo';
import Documents from './components/Documents';
import Exam from './components/Exam';

function App() {
  return (
    <div class="container py-3">
      <header>
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-dark text-decoration-none"
          >
            <span class="fs-4 logo">Doctor+</span>
          </a>

          <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link to="/signup" class="me-3 py-2 text-dark text-decoration-none">
              Регистрация
            </Link>
            <Link
              to="/account"
              class="me-3 py-2 text-dark text-decoration-none"
            >
              Личный кабинет
            </Link>
            <Link
              to="/instruction"
              class="me-3 py-2 text-dark text-decoration-none"
            >
              Инструкция
            </Link>
            <Link to="/device" class="me-3 py-2 text-dark text-decoration-none">
              Оборудование
            </Link>
            <Link to="/photo" class="me-3 py-2 text-dark text-decoration-none">
              Сделать фото
            </Link>
            <Link
              to="/documents"
              class="me-3 py-2 text-dark text-decoration-none"
            >
              Документы
            </Link>
            <Link to="/exam" class="me-3 py-2 text-dark text-decoration-none">
              Экзамен
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/device" element={<Device />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
      </main>
      <footer class="footer mt-4">
        <div class="container">
          <div class="footer-logo">
            <span class="fs-4 logo">Doctor+</span>
          </div>
          <div class="footer-menu">
            <ul>
              <Link to="/signup" class="me-3 py-2">
                Регистрация
              </Link>
              <Link to="/account" class="me-3 py-2">
                Личный кабинет
              </Link>
              <Link to="/instruction" class="me-3 py-2">
                Инструкция
              </Link>
              <Link to="/device" class="me-3 py-2">
                Оборудование
              </Link>
              <Link to="/photo" class="me-3 py-2">
                Сделать фото
              </Link>
              <Link to="/documents" class="me-3 py-2">
                Документы
              </Link>
              <Link to="/exam" class="me-3 py-2">
                Экзамен
              </Link>
            </ul>
          </div>
          <div class="footer-social">
            <ul>
              <Link to="#">
                <img src="./facebook.svg" alt="Facebook" />
              </Link>
              <Link to="#">
                <img src="./instagram.svg" alt="Instagram" />
              </Link>
              <Link to="#">
                <img src="./twitter.svg" alt="Twitter" />
              </Link>
              <Link to="#">
                <img src="./linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link to="#">
                <img src="./youtube.svg" alt="YouTube" />
              </Link>
            </ul>
          </div>
          <div class="footer-copy">&copy; 2023 Все права защищены</div>
          <div class="footer-phone">Телефон: +7 (356) 5555 5555</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
