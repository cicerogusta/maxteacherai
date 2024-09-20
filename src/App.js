import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('en');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleCountryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCountry(selectedOption);
    console.log(`Selected Country: ${selectedOption}`);
  };

  const handleBillingChange = (event) => {
    const selectedOption = event.target.value;
    setBillingCycle(selectedOption);
    console.log(`Selected Billing Cycle: ${selectedOption}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const pricing = {
    monthly: {
      beginner: 'R$ 49,90/mês',
      professional: 'R$ 99,90/mês',
      enterprise: 'R$ 199,90/mês',
    },
    yearly: {
      beginner: 'R$ 499,00/ano',
      professional: 'R$ 999,00/ano',
      enterprise: 'R$ 1999,00/ano',
    },
  };

  return (
    <div className="App" style={{ overflowY: 'scroll', height: '100vh' }}>
      {/* Navbar com logo e seleção de país */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="nav-right">
          <div className="country-selector">
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="en">🇺🇸 English (US)</option>
              <option value="pt-BR">🇧🇷 Português (BR)</option>
              <option value="es">🇪🇸 Español (ES)</option>
              <option value="fr">🇫🇷 Français (FR)</option>
            </select>
          </div>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Cadastro</button>
          </div>
        </div>
      </nav>

      {/* Carousel de imagens */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-slide">
            <img src="image1.jpg" alt="Imagem 1" className="carousel-image" />
            <div className="efficiency-box">
              <p>90% de eficiência</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="image2.jpg" alt="Imagem 2" className="carousel-image" />
            <div className="efficiency-box">
              <p>90% de eficiência</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="image3.jpg" alt="Imagem 3" className="carousel-image" />
            <div className="efficiency-box">
              <p>90% de eficiência</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* Seção Nossos Produtos */}
      <section className="products-section">
        <h2>Nossos Produtos</h2>
        <p>Explore nossa linha de produtos inovadores e de alta qualidade.</p>
      </section>

      {/* Seção Tenha Acesso */}
      <section className="access-section">
        <h3> Tenha acesso a <br /> todas as funcionalidades </h3>
      </section>

      {/* Seção de Cards de Produtos */}
      <section className="product-cards-section">
        <div className="product-cards-grid">
          <div className="product-card">
            <div className="product-icon">
              <img src="icon1.png" alt="Produto 1" />
            </div>
            <p className="product-description">Descrição rápida do produto 1.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <img src="icon2.png" alt="Produto 2" />
            </div>
            <p className="product-description">Descrição rápida do produto 2.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <img src="icon3.png" alt="Produto 3" />
            </div>
            <p className="product-description">Descrição rápida do produto 3.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <img src="icon4.png" alt="Produto 4" />
            </div>
            <p className="product-description">Descrição rápida do produto 4.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <img src="icon5.png" alt="Produto 5" />
            </div>
            <p className="product-description">Descrição rápida do produto 5.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <img src="icon6.png" alt="Produto 6" />
            </div>
            <p className="product-description">Descrição rápida do produto 6.</p>
            <button className="product-btn">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* Seção de Apresentação da Empresa */}
      <section className="company-section">
        <div className="company-content">
          <div className="company-text">
            <h2>A Empresa</h2>
            <p>
              A <strong>Max Teacher AI</strong> é uma empresa inovadora que oferece soluções de inteligência artificial para ajudar professores a otimizar suas tarefas diárias. Nosso produto utiliza IA avançada para automatizar correções, gerar relatórios personalizados e fornecer insights valiosos sobre o desempenho dos alunos, permitindo que os professores se concentrem no que realmente importa: ensinar.
            </p>
          </div>
          <div className="company-image">
            <img src="max-teacher-ai.jpg" alt="Max Teacher AI" />
          </div>
        </div>
        <div className="company-btn-container">
          <button className="company-btn">Saiba Mais</button>
        </div>
      </section>

      {/* Seção de Planos */}
      <section className="pricing-section">
        <h2>Escolha seu Plano</h2>
        <p>Selecione o plano que melhor se adapta às suas necessidades. Todos os planos incluem 1 mês de teste gratuito.</p>
        <div className="pricing-toggle">
          <label className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}>
            <input
              type="radio"
              name="billing"
              value="monthly"
              checked={billingCycle === 'monthly'}
              onChange={handleBillingChange}
            />{' '}
            Mensal
          </label>
          <label className={`toggle-option ${billingCycle === 'yearly' ? 'active' : ''}`}>
            <input
              type="radio"
              name="billing"
              value="yearly"
              checked={billingCycle === 'yearly'}
              onChange={handleBillingChange}
            />{' '}
            Anual
          </label>
        </div>
        <div className="pricing-cards-grid">
          {/* Plano Iniciante */}
          <div className="pricing-card">
            <h3>Iniciante</h3>
            <p className="price">{pricing[billingCycle].beginner}</p>
            <ul className="features-list">
              <li>Até 10 correções automáticas por mês</li>
              <li>Relatórios básicos de desempenho</li>
              <li>Suporte via e-mail</li>
            </ul>
            <button className="pricing-btn">Iniciar 1 Mês de Testes</button>
          </div>
          {/* Plano Profissional */}
          <div className="pricing-card">
            <h3>Profissional</h3>
            <p className="price">{pricing[billingCycle].professional}</p>
            <ul className="features-list">
              <li>Até 50 correções automáticas por mês</li>
              <li>Relatórios avançados de desempenho</li>
              <li>Suporte via e-mail e chat</li>
            </ul>
            <button className="pricing-btn">Iniciar 1 Mês de Testes</button>
          </div>
          {/* Plano Empresa */}
          <div className="pricing-card">
            <h3>Empresa</h3>
            <p className="price">{pricing[billingCycle].enterprise}</p>
            <ul className="features-list">
              <li>Correções automáticas ilimitadas</li>
              <li>Relatórios personalizados e avançados</li>
              <li>Suporte prioritário 24/7</li>
            </ul>
            <button className="pricing-btn">Iniciar 1 Mês de Testes</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;