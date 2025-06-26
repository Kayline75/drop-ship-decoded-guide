
const Index = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', backgroundColor: '#FFFFFF', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        background: '#FAFAFA', 
        padding: '15px' 
      }}>
        <a href="#" style={{ textDecoration: 'none', color: '#111', fontWeight: 'bold', margin: '0 15px' }}>Accueil</a>
        <a href="#portfolio" style={{ textDecoration: 'none', color: '#111', fontWeight: 'bold', margin: '0 15px' }}>Portfolio</a>
        <a href="#formation" style={{ textDecoration: 'none', color: '#111', fontWeight: 'bold', margin: '0 15px' }}>Formation</a>
        <a href="#form" style={{ textDecoration: 'none', color: '#111', fontWeight: 'bold', margin: '0 15px' }}>Contact</a>
      </nav>

      <div style={{ maxWidth: '900px', margin: 'auto', padding: '30px' }}>
        {/* HERO */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>
            Créatrice de visuels publicitaires percutants pour vos produits e‑commerce
          </h1>
          <p style={{ fontSize: '16px', color: '#555' }}>
            Spécialiste du dropshipping, des petites marques et des entrepreneurs du digital.<br/>
            Je conçois des visuels adaptés à vos campagnes, pensés pour convertir vos prospects en clients.
          </p>
          <a 
            href="#form" 
            style={{ 
              display: 'inline-block', 
              padding: '12px 20px', 
              backgroundColor: '#FF6600', 
              color: '#fff', 
              fontWeight: 'bold', 
              borderRadius: '5px', 
              textDecoration: 'none',
              marginBottom: '10px'
            }}
          >
            Travaillons ensemble
          </a><br/>
          <p><a href="#form" style={{ color: '#555' }}>Parlez‑moi de votre produit</a></p>
        </section>

        {/* SERVICES */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Ce que je vous propose</h2>
          <ul>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Visuels publicitaires fixes (Instagram, Facebook, TikTok, Pinterest)</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Variations A/B pour identifier vos visuels les plus performants</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Designs pensés pour booster vos taux de clics et vos ventes</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Livraison rapide (24–72h) selon le nombre de creatives + retouches incluses</li>
          </ul>
        </section>

        {/* EXAMPLES / PORTFOLIO */}
        <section id="portfolio" style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Quelques réalisations</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>(Ajoutez ici une galerie de visuels e‑commerce colorés.)</p>
        </section>

        {/* OFFERS */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Mes offres</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f9f9f9' }}>Offre</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f9f9f9' }}>Contenu</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f9f9f9' }}>Tarif</th>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Starter</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 visuels fixes + retouches limitées</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>200€</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Business</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 visuels fixes + 2 variations A/B</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>350€</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Premium</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>15 visuels fixes + variations A/B + suivi détaillé</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>500€</td>
            </tr>
          </table>
          <p style={{ marginTop: '20px' }}>
            <a 
              href="#form" 
              style={{ 
                display: 'inline-block', 
                padding: '12px 20px', 
                backgroundColor: '#FF6600', 
                color: '#fff', 
                fontWeight: 'bold', 
                borderRadius: '5px', 
                textDecoration: 'none' 
              }}
            >
              Obtenir mes visuels avant la prochaine campagne ads
            </a>
          </p>
        </section>

        {/* WHY ME */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Pourquoi me choisir ?</h2>
          <ul>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Visuels pensés pour convertir vos visiteurs en acheteurs</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Expertise e‑commerce & dropshipping</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Délai de création rapide (24–72h) selon le nombre de creatives</li>
            <li style={{ fontSize: '16px', color: '#555' }}>✅ Service à taille humaine & à l'écoute</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Comment ça marche ?</h2>
          <ol>
            <li style={{ fontSize: '16px', color: '#555' }}>Tu précises ton produit + ta cible</li>
            <li style={{ fontSize: '16px', color: '#555' }}>Je te livre des visuels adaptés en 24–72h</li>
            <li style={{ fontSize: '16px', color: '#555' }}>Tu testes en campagnes ads</li>
            <li style={{ fontSize: '16px', color: '#555' }}>Je reste à dispo pour retouches & nouvelles variations</li>
          </ol>
          <a 
            href="#form" 
            style={{ 
              display: 'inline-block', 
              padding: '12px 20px', 
              backgroundColor: '#FF6600', 
              color: '#fff', 
              fontWeight: 'bold', 
              borderRadius: '5px', 
              textDecoration: 'none' 
            }}
          >
            Générer plus de ventes dès aujourd'hui
          </a>
        </section>

        {/* FORM */}
        <section style={{ padding: '40px 0', borderBottom: '1px solid #eee' }} id="form">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}>Dis‑moi de quoi tu as besoin</h2>
          <form onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="text" 
                placeholder="Prénom" 
                required 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input 
                type="url" 
                placeholder="Lien du site (optionnel)" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <textarea 
                placeholder="Message détaillé" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  border: '1px solid #ddd', 
                  borderRadius: '4px',
                  fontSize: '16px',
                  minHeight: '100px',
                  resize: 'vertical'
                }} 
              />
            </div>
            <div>
              <button 
                type="submit" 
                style={{ 
                  display: 'inline-block', 
                  padding: '12px 20px', 
                  backgroundColor: '#FF6600', 
                  color: '#fff', 
                  fontWeight: 'bold', 
                  borderRadius: '5px', 
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Travaillons ensemble
              </button>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#555' }}>© 2025 — Création de visuels publicitaires percutants</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
