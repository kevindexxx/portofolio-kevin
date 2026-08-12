const projectsData = [
            {
                title: "Katsu Express App",
                category: "UI/UX Design",
                role: "UI/UX Designer",
                tools: ["Figma"],
                description: "Merancang antarmuka dan pengalaman pengguna dalam rangka mengikuti kompetisi tingkat nasional. Memvalidasi ide, wireframe, design system, hingga high-fidelity prototype.",
                themeColor: "bg-tertiary" 
            },
            {
                title: "Website Undangan Digital",
                category: "Web Development",
                role: "Front-End Developer",
                tools: ["HTML", "CSS", "Bootstrap", "JS", "VS Code"],
                description: "Merancang situs undangan digital dengan elemen visual elegan. Fitur navigasi mulus, galeri foto, dan tata letak responsif menyesuaikan perangkat.",
                themeColor: "bg-tertiary"
            },
            {
                title: "CRUD SIM Kampus",
                category: "Web App",
                role: "Fullstack Developer",
                tools: ["HTML/CSS", "Bootstrap", "PHP Native", "MySQL", "Laragon"],
                description: "Mengembangkan sistem informasi berbasis web untuk mengelola data dinamis dilengkapi fungsionalitas CRUD yang terintegrasi dengan basis data.",
                themeColor: "bg-tertiary"
            },
            {
                title: "Connect Event App",
                category: "UI/UX Design",
                role: "UI/UX Designer",
                tools: ["Figma"],
                description: "Merancang (prototype) aplikasi untuk memudahkan pengguna menemukan, mendaftar, dan berjejaring dalam berbagai acara dengan seamless user flow.",
                themeColor: "bg-tertiary"
            }
        ];

const container = document.getElementById('dynamic-projects-container');
document.getElementById('project-count').innerText = projectsData.length;

projectsData.forEach((project, index)=>{
    const toolsHtml = project.tools.map(tool =>
         `<span class="border-2 border-primary bg-primary text-tertiary px-2 py-1 text-xs uppercase">${tool}</span>`
    ).join(' ');
     const cardHtml = `
                <article class="${project.themeColor} reveal-target border-4 border-primary shadow-brutal hover:-translate-y-2 hover:shadow-brutalSolid transition-all flex flex-col h-full duration-300 interactive-el cursor-pointer" onclick="openModal('${project.title}', '${project.description}')">
                    <div class="border-b-4 border-primary p-4 bg-primary text-secondary flex justify-between items-center font-mono font-bold group">
                        <span class="text-sm uppercase">> Proyek_0${index + 1}</span>
                        <span class="text-xs border border-secondary px-2 py-1">${project.category}</span>
                    </div>
                    <div class="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 class="text-2xl lg:text-3xl font-sans font-black uppercase mb-4 text-primary leading-tight">${project.title}</h3>
                        <div class="font-mono text-sm font-bold bg-white border-2 border-primary p-2 mb-6 inline-block w-fit">
                            ROLE: <span class="text-primary">${project.role}</span>
                        </div>
                        <p class="font-mono text-neutral font-bold mb-8 flex-grow leading-relaxed">${project.description}</p>
                        <div class="border-t-4 border-primary pt-4 mt-auto">
                            <p class="font-mono font-bold text-xs mb-2 uppercase text-primary">Tools:</p>
                            <div class="flex flex-wrap gap-2">${toolsHtml}</div>
                        </div>
                    </div>
                </article>
            `;
            container.innerHTML += cardHtml;
});

const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hidden')

    if(!isHidden){
        btn.innerText = 'Tutup';
        btn.classList.replace('bg-primary', 'bg-secondary');
        btn.classList.replace('text-secondary', 'text-primary')
    }else{
        btn.innerText = 'Menu';
        btn.classList.replace('bg-secondary', 'bg-primary');
        btn.classList.replace('text-primary', 'text-secondary')
    }
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.innerText = 'Menu';
        btn.classList.replace('bg-primary', 'bg-secondary');
        btn.classList.replace('text-secondary', 'text-primary ')
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
        }
    });

},{threshold: 0.1, rootMargin: "0px 0px -50px 0px"});

document.querySelectorAll('.reveal-target').forEach(el => observer.observe(el));

const customCursor = document.getElementById('brutal-cursor');
    if(window.matchMedia("(pointer: fine)").matches){
        document.addEventListener('mousemove',(e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px'
        });

        document.querySelectorAll('.interactive-el, a, button').forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'))
            el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'))
        });
    }

const modal = document.getElementById('custom-modal');
const modalBox = document.getElementById('modal-content-box');

window.openModal = function(title, message){
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-message').innerText = message;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-90');
    modalBox.classList.add('scale-100');
}

window.closeModal = function(){
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-100');
    modalBox.classList.add('scale-90')
}
            