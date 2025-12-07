
    const btn = document.getElementById('goTop');
    const showAfter = 200;
    const onScroll = () => {
        if (window.scrollY > showAfter) {
            btn.classList.remove('opacity-0', 'pointer-events-none');
            btn.classList.add('opacity-100');
        } else {
            btn.classList.add('opacity-0', 'pointer-events-none');
            btn.classList.remove('opacity-100');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // état initial
    onScroll();
