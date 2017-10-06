
const togglePanelAccordion = (id) => {
    const icon = document.getElementById(`icon-${id}`);
    const panel = document.getElementById(`panel-${id}`);
    const accordionButton = document.getElementById(`accordion-button-${id}`);
    const tabButton = document.getElementById(`tab-button-${id}`);

    // toggle classes
    $(panel).toggleClass('active')
    $(icon).toggleClass("active")
    $(accordionButton).toggleClass("active")
}

const togglePanelTab = (id) => {
    const icon = document.getElementById(`icon-${id}`);
    const panel = document.getElementById(`panel-${id}`);
    const accordionButton = document.getElementById(`accordion-button-${id}`);
    const tabButton = document.getElementById(`tab-button-${id}`);

    // remove classes
    $('.accordion-button').removeClass('active')
    $('.panel').removeClass('active')
    $('.tab-button').removeClass('active')
    $('.icon').removeClass('active')

    // add classes
    $(icon).addClass('active')
    $(panel).addClass('active')
    $(tabButton).addClass("active")
    $(accordionButton).addClass("active")
}