/* ==========================================================================
   PARTICLES.JS INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 40,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#0ea5e9" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.2,
                    "random": true,
                    "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0ea5e9",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": false },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.3 } }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize Scroll Reveal
    initScrollReveal();

    // Initialize Quoter UI
    if (document.getElementById('step-1')) {
        updateQuoterUI();
    }
});

/* ==========================================================================
   SCROLL EFFECTS (Navbar & Progress Bar)
   ========================================================================== */
window.addEventListener('scroll', () => {
    // Navbar transparency logic
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll progress bar logic
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

/* ==========================================================================
   CUSTOM CURSOR GLOW EFFECT
   ========================================================================== */
document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        // Use requestAnimationFrame for smooth performance
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }
});

function toggleMobileMenu() {
    const mobileOverlay = document.getElementById('mobile-overlay');
    if (mobileOverlay) {
        mobileOverlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (mobileOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            // Add slight delay based on data attribute for staggered animations
            const delay = entry.target.getAttribute('data-delay');
            if (delay) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
            } else {
                entry.target.classList.add('active');
            }

            observer.unobserve(entry.target);
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Manual Smooth Scroll for internal links (fixes mobile issues)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navbar = document.getElementById('navbar');
            const navHeight = (navbar ? navbar.offsetHeight : 0) || 80;
            const targetPosition = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileOverlay = document.getElementById('mobile-overlay');
            if (mobileOverlay && mobileOverlay.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

/* ==========================================================================
   ANIMATED CODE TYPING EFFECT DYNAMIC LANGUAGES
   ========================================================================== */
const codeSnippets = {
    python: {
        filename: "main.py - H&M IA Engine",
        code: `
<span class="keyword">import</span> <span class="class-name">hm_ai_core</span> <span class="keyword">as</span> <span class="variable">ai</span>
<span class="keyword">from</span> <span class="class-name">fastapi</span> <span class="keyword">import</span> <span class="class-name">FastAPI</span>, <span class="class-name">BackgroundTasks</span>

<span class="comment"># Inicializar motor de IA Enterprise H&M</span>
<span class="variable">app</span> <span class="punctuation">=</span> <span class="class-name">FastAPI</span><span class="punctuation">(</span>title<span class="punctuation">=</span><span class="string">"H&M AI Engine"</span><span class="punctuation">)</span>
<span class="variable">agent</span> <span class="punctuation">=</span> <span class="variable">ai</span>.<span class="function">MultiAgentCluster</span><span class="punctuation">(</span>scale<span class="punctuation">=</span><span class="string">"enterprise"</span><span class="punctuation">)</span>

<span class="keyword">@app</span>.<span class="property">post</span><span class="punctuation">(</span><span class="string">"/api/v1/automate"</span><span class="punctuation">)</span>
<span class="keyword">async def</span> <span class="function">trigger_workflow</span><span class="punctuation">(</span><span class="variable">data</span>: <span class="class-name">dict</span>, <span class="variable">bg_tasks</span>: <span class="class-name">BackgroundTasks</span><span class="punctuation">):</span>
    <span class="comment">"""Despliega agentes autónomos para procesar tareas."""</span>
    <span class="variable">success_rate</span> <span class="punctuation">=</span> <span class="keyword">await</span> <span class="variable">agent</span>.<span class="function">analyze_and_execute</span><span class="punctuation">(</span>
        <span class="variable">payload</span><span class="punctuation">=</span><span class="variable">data</span>,
        <span class="variable">parallel_execution</span><span class="punctuation">=</span><span class="boolean">True</span>
    <span class="punctuation">)</span>
    
    <span class="keyword">return</span> <span class="punctuation">{</span>
        <span class="string">"status"</span>: <span class="string">"optimizing"</span>, 
        <span class="string">"efficiency"</span>: <span class="string">"99.9%"</span>
    <span class="punctuation">}</span>
`
    },
    react: {
        filename: "App.tsx - Frontend UI",
        code: `
<span class="keyword">import</span> <span class="class-name">React</span>, <span class="punctuation">{</span> <span class="variable">useState</span>, <span class="variable">useEffect</span> <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'react'</span><span class="punctuation">;</span>
<span class="keyword">import</span> <span class="punctuation">{</span> <span class="class-name">HMGlassCard</span>, <span class="class-name">DataGrid</span> <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">'@hm-grupo/ui-system'</span><span class="punctuation">;</span>

<span class="keyword">export const</span> <span class="function">AIPortal</span> <span class="punctuation">=</span> <span class="punctuation">() =&gt; {</span>
  <span class="keyword">const</span> <span class="punctuation">[</span><span class="variable">data</span>, <span class="variable">setData</span><span class="punctuation">] =</span> <span class="function">useState</span><span class="punctuation">([]);</span>

  <span class="comment">// Renderizado React de alto rendimiento</span>
  <span class="keyword">return</span> <span class="punctuation">(</span>
    &lt;<span class="class-name">HMGlassCard</span> <span class="variable">blur</span><span class="punctuation">={</span><span class="string">"12px"</span><span class="punctuation">}</span> <span class="variable">glow</span><span class="punctuation">={</span><span class="boolean">true</span><span class="punctuation">}</span>&gt;
      &lt;<span class="class-name">h1</span>&gt;<span class="string">Panel de Control Inteligente</span>&lt;/<span class="class-name">h1</span>&gt;
      
      &lt;<span class="class-name">DataGrid</span> 
         <span class="variable">ai_auto_format</span><span class="punctuation">={</span><span class="boolean">true</span><span class="punctuation">}</span>
         <span class="variable">streamData</span><span class="punctuation">={</span><span class="variable">data</span><span class="punctuation">}</span>
      /&gt;
    &lt;/<span class="class-name">HMGlassCard</span>&gt;
  <span class="punctuation">);</span>
<span class="punctuation">}</span>
`
    },
    node: {
        filename: "server.js - Microservices",
        code: `
<span class="keyword">const</span> <span class="class-name">express</span> <span class="punctuation">=</span> <span class="function">require</span><span class="punctuation">(</span><span class="string">'express'</span><span class="punctuation">);</span>
<span class="keyword">const</span> <span class="punctuation">{</span> <span class="class-name">RedisBroker</span> <span class="punctuation">}</span> <span class="punctuation">=</span> <span class="function">require</span><span class="punctuation">(</span><span class="string">'@hm-grupo/event-bus'</span><span class="punctuation">);</span>

<span class="keyword">const</span> <span class="variable">app</span> <span class="punctuation">=</span> <span class="function">express</span><span class="punctuation">();</span>
<span class="keyword">const</span> <span class="variable">pubsub</span> <span class="punctuation">=</span> <span class="keyword">new</span> <span class="class-name">RedisBroker</span><span class="punctuation">({</span>
    <span class="variable">host</span>: <span class="variable">process</span>.<span class="property">env</span>.<span class="property">REDIS_URL</span>,
    <span class="variable">cluster_mode</span>: <span class="boolean">true</span>
<span class="punctuation">});</span>

<span class="comment">// API Gateway Handler</span>
<span class="variable">app</span>.<span class="function">post</span><span class="punctuation">(</span><span class="string">'/v1/ingest'</span>, <span class="keyword">async</span> <span class="punctuation">(</span><span class="variable">req</span>, <span class="variable">res</span><span class="punctuation">) =&gt; {</span>
    <span class="keyword">const</span> <span class="variable">payload</span> <span class="punctuation">=</span> <span class="variable">req</span>.<span class="property">body</span><span class="punctuation">;</span>
    <span class="keyword">await</span> <span class="variable">pubsub</span>.<span class="function">publish</span><span class="punctuation">(</span><span class="string">'data_lake_topic'</span>, <span class="variable">payload</span><span class="punctuation">);</span>
    
    <span class="keyword">return</span> <span class="variable">res</span>.<span class="function">status</span><span class="punctuation">(</span><span class="boolean">202</span><span class="punctuation">).</span><span class="function">json</span><span class="punctuation">({</span>
        <span class="string">"queued"</span>: <span class="boolean">true</span>,
        <span class="string">"workers_assigned"</span>: <span class="boolean">12</span>
    <span class="punctuation">});</span>
<span class="punctuation">});</span>
`
    },
    aws: {
        filename: "infrastructure.yaml - Cloud",
        code: `
<span class="class-name">AWSTemplateFormatVersion</span>: <span class="string">'2010-09-09'</span>
<span class="class-name">Description</span>: <span class="string">'H&M Enterprise Serverless Architecture'</span>

<span class="class-name">Resources</span>:
  <span class="class-name">AIEngineLambda</span>:
    <span class="class-name">Type</span>: <span class="string">'AWS::Serverless::Function'</span>
    <span class="class-name">Properties</span>:
      <span class="variable">Handler</span>: <span class="string">main.handler</span>
      <span class="variable">Runtime</span>: <span class="string">python3.11</span>
      <span class="variable">MemorySize</span>: <span class="boolean">10240</span> # GPU accelerated
      <span class="variable">Timeout</span>: <span class="boolean">900</span>
      <span class="variable">Environment</span>:
        <span class="class-name">Variables</span>:
          <span class="class-name">MODEL_PATH</span>: <span class="string">"s3://hm-models/v4"</span>

  <span class="class-name">VPCCluster</span>:
    <span class="class-name">Type</span>: <span class="string">'AWS::EC2::VPC'</span>
    <span class="class-name">Properties</span>:
      <span class="variable">CidrBlock</span>: <span class="string">'10.0.0.0/16'</span>
`
    },
    docker: {
        filename: "docker-compose.yml - DevOps",
        code: `
<span class="class-name">version</span>: <span class="string">'3.9'</span>

<span class="class-name">services</span>:
  <span class="class-name">hm-core-api</span>:
    <span class="variable">build</span>: 
      <span class="variable">context</span>: <span class="string">./api</span>
      <span class="variable">dockerfile</span>: <span class="string">Dockerfile.prod</span>
    <span class="variable">image</span>: <span class="string">hm-grupo/core-api:latest</span>
    <span class="variable">deploy</span>:
      <span class="variable">replicas</span>: <span class="boolean">5</span>
      <span class="variable">resources</span>:
        <span class="variable">reservations</span>:
          <span class="variable">devices</span>:
            <span class="punctuation">-</span> <span class="variable">driver</span>: <span class="string">nvidia</span>
              <span class="variable">count</span>: <span class="string">all</span>
              <span class="variable">capabilities</span>: <span class="punctuation">[</span><span class="string">gpu</span><span class="punctuation">]</span>

  <span class="class-name">redis-cache</span>:
    <span class="variable">image</span>: <span class="string">redis:7-alpine</span>
    <span class="variable">ports</span>:
      <span class="punctuation">-</span> <span class="string">"6379:6379"</span>
`
    }
};

let typingTimeout;
let isTyping = false;
let currentLanguage = 'python';

function changeCodeLanguage(langKey) {
    if (langKey === currentLanguage) return;

    // Update active icon visual
    document.querySelectorAll('.tech-stack-icons i').forEach(icon => {
        icon.classList.remove('active-icon');
    });
    document.getElementById(`icon-${langKey}`).classList.add('active-icon');

    currentLanguage = langKey;
    if (typingTimeout) clearTimeout(typingTimeout);

    // Change filename
    document.getElementById('code-filename').innerText = codeSnippets[langKey].filename;

    // Restart animation
    isTyping = false;
    startCodeTyping(codeSnippets[langKey].code);
}

function startCodeTyping(codeToType = codeSnippets.python.code) {
    if (isTyping) return;
    isTyping = true;

    const codeElement = document.getElementById('animated-code');
    const parts = codeToType.trim().split(/(<[^>]+>)/g); // Split by HTML tags
    let currentHtml = '';
    let partIndex = 0;
    let charIndex = 0;

    codeElement.innerHTML = '';

    function typeNextChar() {
        if (!isTyping) return; // allows stopping mid-type

        if (partIndex >= parts.length) {
            isTyping = false;
            return;
        }

        const part = parts[partIndex];

        if (part.startsWith('<')) {
            // It's an HTML tag, append directly
            currentHtml += part;
            codeElement.innerHTML = currentHtml;
            partIndex++;
            typingTimeout = setTimeout(typeNextChar, 0); // instantly
        } else {
            // It's text content, animate character by character
            if (charIndex < part.length) {
                currentHtml += part[charIndex];
                codeElement.innerHTML = currentHtml;
                charIndex++;

                // Random typing speed for realism
                const speed = Math.random() * 20 + 5; // Faster typing for switching
                typingTimeout = setTimeout(typeNextChar, speed);
            } else {
                partIndex++;
                charIndex = 0;
                typingTimeout = setTimeout(typeNextChar, 0);
            }
        }
    }

    // Slight delay before starting
    typingTimeout = setTimeout(typeNextChar, 150);
}

// Set up intersection observer just for the code block
const codeObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        // Set initial filename
        document.getElementById('code-filename').innerText = codeSnippets.python.filename;
        // Set initial active icon
        document.getElementById('icon-python').classList.add('active-icon');
        startCodeTyping();
        codeObserver.disconnect();
    }
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    // Other initializations...
    const codeWindow = document.querySelector('.code-window');
    if (codeWindow) {
        codeObserver.observe(codeWindow);
    }
});


/* ==========================================================================
   PREMIUM QUOTER ENGINE (WIZARD)
   ========================================================================== */
let currentQuoterStep = 1;
const totalQuoterSteps = 3;

const quoterStepData = {
    1: { title: "¿Qué quieres construir?", desc: "Selecciona el tipo de plataforma para tu proyecto." },
    2: { title: "Nivel de Complejidad", desc: "Elige el alcance técnico que mejor se adapte a tu necesidad." },
    3: { title: "¡Tu Estimado está Listo!", desc: "Basado en tu selección, aquí tienes una inversión referencial." }
};

const projectPricing = {
    web: {
        basic: 120,     // Web / Landing MVP
        standard: 250,  // Web Corporativa / Plataforma
        advanced: 450   // E-commerce / Portal Gran Escala
    },
    app: {
        basic: 250,     // App Móvil MVP
        standard: 450,  // App Móvil Empresarial
        advanced: 750   // App Gran Escala
    },
    ia: {
        basic: 150,     // Chatbot / Automatización Básica
        standard: 300,  // Agente IA de Ventas & CRM
        advanced: 550   // Sistema Multi-Agente Avanzado
    }
};

function getCalculatedPrice(type, complexity) {
    if (projectPricing[type] && projectPricing[type][complexity]) {
        return projectPricing[type][complexity];
    }
    return 150;
}


function updateQuoterUI() {
    // Update Title & Description with fade effect
    const title = document.getElementById('quoter-step-title');
    const desc = document.getElementById('quoter-step-desc');
    
    title.style.opacity = 0;
    desc.style.opacity = 0;
    
    setTimeout(() => {
        title.innerText = quoterStepData[currentQuoterStep].title;
        desc.innerText = quoterStepData[currentQuoterStep].desc;
        title.style.opacity = 1;
        desc.style.opacity = 1;
    }, 200);

    // Update Progress Step Indicators
    document.querySelectorAll('.step-indicator').forEach(indicator => {
        const step = parseInt(indicator.getAttribute('data-step'));
        indicator.classList.remove('active');
        if (step <= currentQuoterStep) indicator.classList.add('active');
    });

    // Update Progress Bar
    const fill = document.getElementById('quoter-progress-fill');
    fill.style.width = ((currentQuoterStep / totalQuoterSteps) * 100) + '%';

    // Toggle Step Visibility
    document.querySelectorAll('.quoter-step').forEach(stepDiv => {
        stepDiv.classList.remove('active');
    });
    document.getElementById(`step-${currentQuoterStep}`).classList.add('active');

    // Update Navigation Buttons
    document.getElementById('quoter-prev').style.display = currentQuoterStep > 1 ? 'flex' : 'none';
    
    if (currentQuoterStep === totalQuoterSteps) {
        document.getElementById('quoter-next').style.display = 'none';
        document.getElementById('quoter-finish').style.display = 'flex';
        calculatePremiumEstimate();
    } else {
        document.getElementById('quoter-next').style.display = 'flex';
        document.getElementById('quoter-finish').style.display = 'none';
    }
}

function nextQuoterStep() {
    if (currentQuoterStep < totalQuoterSteps) {
        currentQuoterStep++;
        updateQuoterUI();
    }
}

function prevQuoterStep() {
    if (currentQuoterStep > 1) {
        currentQuoterStep--;
        updateQuoterUI();
    }
}

function calculatePremiumEstimate() {
    // Get Project Type
    const projectRadios = document.getElementsByName('projectTypePremium');
    let selectedType = 'web';
    for (const radio of projectRadios) {
        if (radio.checked) { selectedType = radio.value; break; }
    }

    // Get Complexity
    const complexityRadios = document.getElementsByName('complexityPremium');
    let selectedComp = 'standard';
    for (const radio of complexityRadios) {
        if (radio.checked) { selectedComp = radio.value; break; }
    }

    const price = getCalculatedPrice(selectedType, selectedComp);
    
    // Animate Price
    animatePremiumPrice(price);

    // Update hidden fields for contact form
    const typeMap = { web: 'Web / Plataforma', app: 'App Móvil', ia: 'Sistema IA & Automatización' };
    const compMap = { basic: 'Básico (MVP)', standard: 'Empresarial Estándar', advanced: 'Gran Escala' };
    
    document.getElementById('hidden-quote-price').value = '$' + price.toLocaleString() + ' USD';
    document.getElementById('hidden-quote-type').value = typeMap[selectedType];
    document.getElementById('hidden-quote-complexity').value = compMap[selectedComp];
}

function animatePremiumPrice(target) {
    const priceDisplay = document.getElementById('premium-price-display');
    const currentPriceText = priceDisplay.innerText.replace(/[^0-9]/g, '');
    let currentPrice = parseInt(currentPriceText) || 0;

    const increment = Math.ceil(Math.abs(target - currentPrice) / 30);
    const isIncreasing = target > currentPrice;

    const timer = setInterval(() => {
        if (isIncreasing) {
            currentPrice += increment;
            if (currentPrice >= target) { currentPrice = target; clearInterval(timer); }
        } else {
            currentPrice -= increment;
            if (currentPrice <= target) { currentPrice = target; clearInterval(timer); }
        }
        priceDisplay.innerText = '$' + currentPrice.toLocaleString();
    }, 15);
}

// Logic to open quoter (scrolling to section)
window.openQuoterModal = function() {
    scrollToQuoter();
};

function toggleQuoterModal() {
    scrollToQuoter();
}

function scrollToQuoter() {
    const quoterSection = document.getElementById('cotizador');
    if (quoterSection) {
        const navbar = document.getElementById('navbar');
        const navHeight = (navbar ? navbar.offsetHeight : 0) || 80;
        const targetPosition = quoterSection.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Send Quote to WhatsApp with prefilled message
function sendQuoterWhatsApp() {
    const projectRadios = document.getElementsByName('projectTypePremium');
    let selectedType = 'web';
    for (const radio of projectRadios) {
        if (radio.checked) { selectedType = radio.value; break; }
    }

    const complexityRadios = document.getElementsByName('complexityPremium');
    let selectedComp = 'standard';
    for (const radio of complexityRadios) {
        if (radio.checked) { selectedComp = radio.value; break; }
    }

    const price = getCalculatedPrice(selectedType, selectedComp);
    const typeMap = { web: 'Web / Plataforma', app: 'App Móvil', ia: 'Sistema IA & Automatización' };
    const compMap = { basic: 'Básico (MVP)', standard: 'Empresarial Estándar', advanced: 'Gran Escala' };

    const text = `Hola R&J Solutions, acabo de cotizar un proyecto en su web:\n\n📌 *Tipo de Proyecto:* ${typeMap[selectedType]}\n⚙️ *Complejidad:* ${compMap[selectedComp]}\n💰 *Inversión Estimada:* $${price.toLocaleString()} USD\n\n¿Podemos agendar una llamada o revisar detalles de mi proyecto?`;
    const url = `https://wa.me/584121085553?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// FAQ Accordion Toggle
function toggleFaq(button) {
    const faqItem = button.closest('.faq-item');
    const wasActive = faqItem.classList.contains('active');
    
    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle clicked item
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Contact Modal Handling
function toggleContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('active');
}


/* ==========================================================================
   CHATBOT LOGIC
   ========================================================================== */
let isChatbotOpen = false;
let isFirstOpen = true;

function toggleChatbot() {
    const chatWindow = document.getElementById('chat-window');
    isChatbotOpen = !isChatbotOpen;

    if (isChatbotOpen) {
        chatWindow.classList.add('active');
        if (isFirstOpen) {
            simulateBotTyping();
            isFirstOpen = false;
        }
    } else {
        chatWindow.classList.remove('active');
    }
}

function simulateBotTyping() {
    const chatBody = document.getElementById('chat-body');

    // Clear initial content if any
    if (chatBody.children.length === 0) {
        // Add typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatBody.appendChild(typingDiv);

        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Remove typing and show message after delay
        setTimeout(() => {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();

            appendMessage('bot', 'Hola, soy el agente de GRUPO H&M. ¿Buscas desarrollo o automatización hoy?');
        }, 1500);
    }
}

function appendMessage(sender, text) {
    const chatBody = document.getElementById('chat-body');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerText = text;

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function sendChatMessage() {
    const input = document.getElementById('chat-inputInput');
    let text = input.value.trim();

    if (text === '') return;

    // Add User message
    appendMessage('user', text);
    input.value = '';

    // Simulate bot thinking then replying
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;

    const chatBody = document.getElementById('chat-body');
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Enhanced NLP / Keyword Matching Logic for the Demo Bot
    let botResponse = 'Comprendo. Para darte la mejor respuesta sobre ese requerimiento técnico, sería ideal que un ingeniero de nuestro equipo analice tu caso. ¿Te gustaría agendar una demo o dejar tus datos en el Formulario de Contacto?';
    
    // Normalize text: remove accents and convert to lowercase
    const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Knowledge Base rules with expanded variations
    if (normalizedText.match(/(precio|costo|cotizar|cuanto|presupuesto|valor)/)) {
        botResponse = 'Para estimaciones de costos, te invito a utilizar nuestro Simulador en la sección "Cotizador IA". Los proyectos web básicos parten desde ~$150 USD y los sistemas de IA desde ~$500 USD, siempre ofreciendo la mejor relación calidad-precio.';
    } else if (normalizedText.match(/(servicio|hacen|ofrecen|dedican|venden|que es)/)) {
        botResponse = 'En GRUPO H&M somos expertos en: \n1. Asistentes Multi-Agente (IA)\n2. Desarrollo Web y Apps Móviles\n3. Automatización de Flujos (n8n, Python)\n4. Sistemas ERP/CRM a medida.\n\n¿Cuál de estas áreas te interesa explorar?';
    } else if (normalizedText.match(/(hola|buenos|buenas|saludos|que tal|como estas)/)) {
        const greetings = [
            '¡Hola! Qué gusto saludarte. Soy la IA de GRUPO H&M. ¿Cómo te ayudo hoy con tu proyecto?',
            '¡Bienvenido a GRUPO H&M! ¿En qué puedo asesorarte hoy?',
            '¡Hola! Estoy aquí para responder tus dudas sobre desarrollo de software e inteligencia artificial. ¿Qué tienes en mente?'
        ];
        botResponse = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (normalizedText.match(/(tecnologia|lenguaje|stack|programan|codigo|herramientas|framework)/)) {
        botResponse = 'Utilizamos un stack tecnológico de alto rendimiento:\n- Backend/IA: Python, FastAPI\n- Frontend: React, Next.js\n- Cloud/DevOps: AWS, Docker, Kubernetes\n- Automatización: n8n, Zapier.\n¡Construimos arquitecturas preparadas para escalar!';
    } else if (normalizedText.match(/(contacto|hablar|reunion|demo|whatsapp|correo|llamar|numero)/)) {
        botResponse = '¡Claro! Puedes agendar usando el botón "Agendar Demo" arriba, escribirnos directamente por el botón flotante de WhatsApp a la izquierda, o pedir un presupuesto formal en el Cotizador.';
    } else if (normalizedText.match(/(metodologia|proceso|como trabajan|tiempo|demoran|plazos)/)) {
        botResponse = 'Trabajamos con metodologías ágiles divididas en 4 fases:\n1. Descubrimiento & Arquitectura\n2. Desarrollo & Entrenamiento IA\n3. Testing Automatizado\n4. Despliegue.\nEl tiempo depende de la escala, desde 4 semanas para un MVP hasta varios meses para sistemas Enterprise.';
    } else if (normalizedText.match(/(gracias|vale|entendido|ok|perfecto)/)) {
        botResponse = '¡A tu orden! Estoy aquí si tienes cualquier otra consulta. Recuerda que también puedes enviarnos un correo desde el "Cotizador". ¡Que tengas un gran día!';
    }

    // Dynamic typing delay based on response length for realism
    const typingDelay = Math.min(Math.max(botResponse.length * 15, 1000), 3000);

    setTimeout(() => {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();

        appendMessage('bot', botResponse);
    }, typingDelay);
}

document.getElementById('send-btn').addEventListener('click', sendChatMessage);

document.getElementById('chat-inputInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});


/* ==========================================================================
   LOGIN MODAL LOGIC
   ========================================================================== */
function toggleLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.toggle('active');
}

// Close modal when clicking outside
document.getElementById('login-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        toggleLoginModal();
    }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Mock Login action
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Conectando...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        btn.innerText = '¡Ingreso Exitoso!';
        btn.style.background = '#10b981';

        setTimeout(() => {
            toggleLoginModal();
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.opacity = '1';
        }, 1000);
    }, 1500);
});

// Initialize first quote calculation on load
window.addEventListener('load', () => {
    if (typeof calculateEstimate === 'function') calculateEstimate(); 
    init3DTilt(); // Initialize 3D tilt effect for cards
});

/* ==========================================================================
   3D TILT EFFECT FOR SERVICE CARDS
   ========================================================================== */
function init3DTilt() {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// Agendar Demo abre el modal de contacto
window.agendarDemo = function () { toggleContactModal(); };

// iOS-compatible smooth scroll (behavior:'smooth' fails in iOS Safari <15.4)
function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const diff = targetY - startY;
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + diff * ease);
        if (elapsed < duration) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// Scroll directo al cotizador (compatible iOS Safari)
window.scrollToCotizador = function () {
    const cotizador = document.getElementById('cotizador');
    if (cotizador) {
        const navbar = document.getElementById('navbar');
        const navHeight = navbar ? navbar.offsetHeight : 80;
        const top = cotizador.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navHeight;
        smoothScrollTo(top, 700);
    }
};
/* ==========================================================================
   PROJECT MODAL & CAROUSEL LOGIC
   ========================================================================== */
const projectsData = {
    project1: {
        tag: "IA & Automatización",
        title: "Sistema OmniChannel IA",
        description: "Una solución integral multi-agente que centraliza la atención al cliente de múltiples canales (WhatsApp, Instagram, Web) en una sola interfaz inteligente. Capaz de resolver el 85% de las dudas frecuentes sin intervención humana.",
        features: [
            "Integración con GPT-4 para respuestas contextuales",
            "Clasificación automática de leads por intención",
            "Dashboard de analítica en tiempo real",
            "Escalamiento automático a humanos según criticidad"
        ],
        tech: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
        images: ["images/project1.png", "images/project1_1.png", "images/project1_2.png"],
        link: "https://wa.me/584121085553"
    },
    project2: {
        tag: "Desarrollo Web",
        title: "Portal Fintech Pro",
        description: "Plataforma financiera diseñada para la gestión de activos digitales y transacciones en tiempo real. Enfocada en la seguridad del usuario y una experiencia de interfaz fluida y moderna.",
        features: [
            "Arquitectura de microservicios escalable",
            "Autenticación biométrica y 2FA integrados",
            "Gráficos dinámicos con WebGL para alto rendimiento",
            "API Gateway con límites de tasa tipo enterprise"
        ],
        tech: ["Node.js", "TypeScript", "AWS", "Socket.io", "PostgreSQL"],
        images: ["images/project2.png", "images/project2_1.png", "images/project2_2.png"],
        link: "#"
    },
    project3: {
        tag: "E-commerce IA",
        title: "Smart Retail Engine",
        description: "Motor de comercio electrónico que utiliza aprendizaje profundo para predecir las preferencias de compra. Optimiza el inventario y personaliza la tienda para cada visitante de forma dinámica.",
        features: [
            "Recomendador dinámico basado en comportamiento",
            "Búsqueda visual por imágenes integrada",
            "Logística predictiva para optimización de stock",
            " Checkout ultra-rápido optimizado para móviles"
        ],
        tech: ["Next.js", "PyTorch", "MongoDB", "TailwindCSS", "Edge Functions"],
        images: ["images/project3.png", "images/project3_1.png", "images/project3_2.png"],
        link: "#"
    }
};

let currentSlideIndex = 0;
let currentProjectImages = [];

window.openProjectModal = function(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    currentProjectImages = project.images;
    currentSlideIndex = 0;

    // Fill Content
    document.getElementById('modal-project-tag').innerText = project.tag;
    document.getElementById('modal-project-title').innerText = project.title;
    document.getElementById('modal-project-desc').innerText = project.description;
    
    // Fill Features
    const featuresList = document.getElementById('modal-project-features');
    featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

    // Fill Tech
    const techContainer = document.getElementById('modal-project-tech');
    techContainer.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    // Set Link
    const demoLink = document.getElementById('modal-project-link');
    if (project.link === '#') {
        demoLink.style.display = 'none';
    } else {
        demoLink.style.display = 'inline-flex';
        demoLink.href = project.link;
    }

    // Build Carousel
    const track = document.getElementById('carousel-track');
    track.innerHTML = project.images.map(img => `
        <div class="carousel-slide">
            <img src="${img}" alt="Slide">
        </div>
    `).join('');

    // Build Dots
    const dotsContainer = document.getElementById('carousel-dots');
    dotsContainer.innerHTML = project.images.map((_, i) => `
        <span class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></span>
    `).join('');

    // Show Modal
    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateCarousel();
    initSwipeGestures();
};

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

window.moveCarousel = function(step) {
    currentSlideIndex += step;
    if (currentSlideIndex >= currentProjectImages.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = currentProjectImages.length - 1;
    updateCarousel();
};

window.goToSlide = function(index) {
    currentSlideIndex = index;
    updateCarousel();
};

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update Dots
    document.querySelectorAll('.carousel-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function initSwipeGestures() {
    const carousel = document.getElementById('project-carousel');
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) moveCarousel(1);
        if (touchEndX > touchStartX + 50) moveCarousel(-1);
    }
}
