function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    tabContent[0].classList.add('ativo'); //Deixar o primeiro item ativo sempre para não ficar vazio quando abrir a página

    if(tabMenu.length && tabContent.length) {
        //Aqui foi criado o loop para adicionar a classe quando o valor for selecionado (ele só funciona em uma classe por vez)
        
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        
        //Faz a mesma coisa que a função acima só que com o evento click - dentro da função anonima estamos acionando a função activeTab
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
        
        //Criamos animação no css e mudamos o cursor para pointer
        
    }
}

initTabNav();

function initAccordion () {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'

    if(accordionList.length) {
        accordionList[0].classList.add('activeClass');
        accordionList[0].nextElementSibling.classList.add('activeClass');

        function activeAccordion() {
            this.classList.toggle('activeClass');
            this.nextElementSibling.classList.toggle('activeClass');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();


function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');   

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
        
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScroll();

function initAnimacaoScroll() {

    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const metadeTela = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - metadeTela) < 0;
                if(isSectionVisible) {
                    section.classList.add('ativo');
                }else {
                    section.classList.remove('ativo');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();