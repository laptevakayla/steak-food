;

window.onload = () => {
    const SHOW = 'show';

    /**
     * Closes curtains.
     */
    document.querySelectorAll('.curtain').forEach(curtain => curtain.classList.add('curtain--closed'));

    /**
     * Show STEAK image.
     */
    document.querySelector('.header__image').classList.add(SHOW);

    /**
     * Show STEAK leaf image.
     */
    document.querySelector('.header__leaf').classList.add(SHOW);

    /**
     * Show header text.
     */
    document.querySelector('.header__text').classList.add(SHOW);

    /**
     * Show header button border.
     */
    document.querySelector('.header__button').classList.add(SHOW);

    /**
     * Show PEPPER image.
     */
    document.querySelector('.pepper').classList.add(SHOW);

    /**
     * Show FOOD image.
     */
    document.querySelector('.food').classList.add(SHOW);

    window.addEventListener('keydown', function(event) {
        if (event.code == 'KeyJ' && event.metaKey) {
            if (document.body.style.background === '' || document.body.style.background === 'url("Concept.png") 100% 0px / contain no-repeat') {
                // document.body.style.background = 'linear-gradient(105deg, rgba(62,62,62,1) 0%, rgba(12,12,12,1) 70%)';
                document.body.style.background = '';
            } else {
                document.body.style.background = 'url("Concept.png")';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundPosition = '100% 0';
                document.body.style.backgroundSize = 'contain';
            }
        }
    });

    console.log(performance.now());
};