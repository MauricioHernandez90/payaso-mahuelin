import React from 'react'

  const WHATSAPP = "https://wa.me/527223352454?text=Hola%20Payaso%20Mahuelin!%20%F0%9F%8E%89%20Quiero%20cotizar%20un%20show";
  
  const images = {
    payasoWhite: "./payasoWhite.webp",
    heroDouble: "./heroDouble.webp",
    heroBubble: "./heroBubble.webp",
    heroFull: "./heroFull.webp",
    payasoClose: "./payasoClose.webp",
    logo: "./logo.webp",
  };


  const BUBBLES = [
    ['purple',90,4,16,0],['cyan',62,11,20,2],['pink',110,19,18,1],['yellow',72,27,15,3],
    ['orange',48,35,22,0.5],['purple',125,43,24,2.5],['cyan',58,51,19,1.5],['pink',82,59,21,4],
    ['yellow',100,67,20,0.8],['orange',66,75,23,3.5],['purple',52,83,18,1],['cyan',96,91,25,2],
    ['yellow',54,6,11,0],['purple',76,16,14,1.2],['orange',46,28,10,0.4],['cyan',70,41,13,2.2],
    ['pink',60,56,12,3.5],['yellow',84,71,15,1],['purple',48,86,9,4],['cyan',94,92,17,2.8],
  ];

  function SunIcon(){return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>)}
  function MoonIcon(){return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>)}

  function App(){
    const [isDark, setIsDark] = React.useState(false);
    
    React.useEffect(()=>{
      const saved = localStorage.getItem('mahuelin-theme');
      if(saved){ setIsDark(saved==='dark'); }
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        setIsDark(true);
      }
    },[]);
    React.useEffect(()=>{ localStorage.setItem('mahuelin-theme', isDark?'dark':'light'); },[isDark]);

    const bgStyle = isDark 
      ? {background:'radial-gradient(1200px 800px at 20% 10%, #1E1A4D 0%, #0F1030 35%, #0A0A1F 100%)', backgroundColor:'#0A0A1F', color:'#E9E6FF'}
      : {background:'linear-gradient(180deg, #6EC6FF 0%, #8EC8FF 15%, #A8C6FF 30%, #C5B8FF 55%, #D9C7FF 75%, #E9D9FF 100%)', color:'#2A1850'};

    return (
      <div style={bgStyle} className="min-h-screen relative transition-all duration-700">
        <div className="bubbles-layer" aria-hidden="true">
          {BUBBLES.map(([color,size,left,dur,delay],i)=>(
            <span key={i} className={`bubble bubble-${color}${i>=8?' bubble-extra':''}`} style={{'--size':size+'px',left:left+'%',animationDuration:dur+'s',animationDelay:delay+'s'}}/>
          ))}
        </div>

        <div className="relative z-10">
          <header className="sticky top-4 z-50 w-full px-4 md:px-6">
            <div className="mx-auto max-w-[1200px] flex items-center justify-between gap-3">
              <div className={`${isDark?'glass-strong-dark':'glass-strong'} rounded-full pl-2 pr-5 md:pr-6 py-2 flex items-center gap-3`}>
                <div className="w-[52px] md:w-[58px] h-[52px] md:h-[58px] rounded-full bg-white shadow flex items-center justify-center overflow-hidden p-1">
                  <img src={images.logo} alt="Logo completo" className="w-full h-full object-contain" />
                </div>
                <span className={`font-fredoka font-bold text-[15px] md:text-[18px] tracking-wide ${isDark?'text-white':'text-[#1E0A4A]'}`}>PAYASO MAHUELIN</span>
              </div>

              <div className="flex items-center gap-3">
                {/* TOGGLE SOL/LUNA */}
                <button
                  onClick={()=>setIsDark(!isDark)}
                  aria-label="Cambiar tema"
                  className={`${isDark?'glass-dark':'glass'} rounded-full p-1.5 flex items-center w-[78px] h-[42px] relative transition-all duration-300`}
                  title={isDark?'Cambiar a modo claro':'Cambiar a modo oscuro'}
                >
                  <span className={`absolute left-2 text-[14px] transition-opacity ${isDark?'opacity-40':'opacity-100'}`}><SunIcon/></span>
                  <span className={`absolute right-2 text-[14px] transition-opacity ${isDark?'opacity-100':'opacity-40'}`}><MoonIcon/></span>
                  <div className={`w-[32px] h-[32px] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center transition-all duration-300 transform ${isDark?'translate-x-[36px] bg-[#2A2550] text-[#FFD54F]':'translate-x-0 bg-white text-[#FF8A00]'}`}>
                    {isDark ? <MoonIcon/> : <SunIcon/>}
                  </div>
                </button>

                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-cta rounded-full px-4 md:px-7 py-2.5 md:py-3 text-[13px] md:text-[15px] inline-flex items-center gap-2">
                  <span className="hidden md:inline">Cotizar</span> WhatsApp
                </a>
              </div>
            </div>
          </header>

          <section className="w-full px-4 md:px-6 pt-12 md:pt-20 pb-10">
            <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-6">
                <div className={`${isDark?'glass-dark text-[#B388FF]':'glass text-[#5A2EBF]'} rounded-full px-5 py-2 w-fit flex items-center gap-2 text-[13px] font-semibold`}>
                  <span className="w-2 h-2 bg-[#FF8A00] rounded-full animate-pulse"></span>
                  ¡Agenda Abierta 2026 • Toluca y alrededores!
                </div>
                <h1 className="font-fredoka font-bold leading-[0.9]">
                  <span className={`block text-4xl md:text-6xl lg:text-[78px] ${isDark?'text-[#B388FF]':'text-[#6A35D6]'}`}>PAYASO</span>
                  <span className={`block text-5xl md:text-7xl lg:text-[92px] mt-1 ${isDark?'text-white':'text-[#121212] drop-shadow-[0_2px_0_#fff]'}`}>Mahuelin</span>
                </h1>
                <p className={`text-[18px] md:text-[20px] leading-7 max-w-[520px] font-medium ${isDark?'text-[#CFC8FF]':'text-[#2A2A40]'}`}>
                  Show 100% interactivo con <span className={`font-bold ${isDark?'text-[#FFD54F]':'text-[#5A2EBF]'}`}>burbujas gigantes, magia, juegos</span> y risas garantizadas.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href={WHATSAPP} target="_blank" className="btn-cta rounded-full px-8 py-4 text-[18px] inline-flex items-center gap-2">🎉 Reservar mi fecha</a>
                  <div className={`${isDark?'glass-dark text-white':'glass text-[#2A1850]'} rounded-full px-5 py-3 text-[13px] font-semibold`}>+500 fiestas felices</div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className={`relative w-[320px] md:w-[520px] ${isDark?'glass-strong-dark':'glass-strong'} rounded-[2.5rem] p-4`}>
                  <img src={images.payasoWhite} alt="Payaso" className={`w-full rounded-[2rem] ${isDark?'bg-[#15153A]':'bg-gradient-to-b from-[#6EC6FF] to-[#A0D8FF]'}`} />
                  <div className={`absolute top-6 right-6 ${isDark?'glass-dark text-[#00E5FF]':'glass text-[#5A2EBF]'} rounded-full px-4 py-2 text-[12px] font-bold flex items-center gap-2`}>
                    Disponible hoy
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-6 py-12">
            <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                {icon:"🫧",title:"Burbujas Gigantes",desc:"Show de burbujas que flotan por todo el salón."},
                {icon:"🎯",title:"Juegos Interactivos",desc:"Concursos y dinámicas para todos."},
                {icon:"🎩",title:"Magia & Comedia",desc:"Rutina blanca y muy divertida."},
                {icon:"🎂",title:"Fiesta a tu Medida",desc:"Cumpleaños, escuelas, empresas."},
              ].map((b,i)=>(
                <div key={i} className={`${isDark?'glass-dark':'glass'} rounded-[2rem] p-7 flex flex-col gap-3`}>
                  <div className="text-[28px]">{b.icon}</div>
                  <h3 className={`font-fredoka font-bold text-[20px] ${isDark?'text-white':'text-[#2A1850]'}`}>{b.title}</h3>
                  <p className={`text-[14px] ${isDark?'text-[#A9A3C8]':'text-[#4A3A6E]'}`}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 md:px-6 py-10">
            <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[360px]">
              <div className={`${isDark?'glass-strong-dark':'glass-strong'} rounded-[2rem] p-3 overflow-hidden md:col-span-7`}><img src={images.heroDouble} className="w-full h-full object-cover rounded-[1.6rem]" /></div>
              <div className={`${isDark?'glass-strong-dark':'glass-strong'} rounded-[2rem] p-3 overflow-hidden md:col-span-5`}><img src={images.heroBubble} className="w-full h-full object-cover rounded-[1.6rem]" /></div>
            </div>
          </section>

          <section className="px-4 md:px-6 py-16">
            <div className={`mx-auto max-w-[1000px] ${isDark?'glass-strong-dark':'glass-strong'} rounded-[3rem] px-10 py-16 text-center`}>
              <h2 className={`font-fredoka font-bold text-4xl md:text-6xl ${isDark?'text-white':'text-[#2A1850]'}`}>¿Listo para la <span className="text-[#FF8A00]">fiesta más feliz?</span></h2>
              <a href={WHATSAPP} target="_blank" className="btn-cta rounded-full px-10 py-5 text-[20px] mt-8 inline-flex">Cotizar por WhatsApp</a>
              
            </div>
          </section>

          <footer className="w-full px-4 md:px-6 pb-8">
            <div className={`mx-auto max-w-[1200px] ${isDark?'glass-dark':'glass'} rounded-[2rem] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4`}>
              <div className="flex items-center gap-3">
                <img src={images.logo} className="w-12 h-12 rounded-full bg-white p-1 object-contain" />
                <div><p className={`font-fredoka font-bold ${isDark?'text-white':'text-[#2A1850]'}`}>Payaso Mahuelin</p><p className={`text-[11px] ${isDark?'text-[#A9A3C8]':'text-[#6A5A8C]'}`}>Show infantil • Magia • Burbujas</p></div>
              </div>
              <p className={`text-[12px] ${isDark?'text-[#8A84A8]':'text-[#6A5A8C]'}`}>© 2026 • 722 335 2454 • Toluca</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  

export default App
