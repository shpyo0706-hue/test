new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,

    navigation: true,   //페이지버튼 
    navigationTooltips: ['HOME', 'ABOUT ME', 'SKILLS', 'PORTFOLIO', 'PHOTO GALLERY', 'CONTACT'],
    navigationPosition:'left',

     slidesNavigation: true,  //슬라이드의 페이지버튼
     slidesNavPosition: 'bottom', // Default
     controlArrows:false,   //슬라이더 양옆 화살표

    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000', 'red'],   각 섹션의 배경 설정

    //scrollBar:true, //스크롤 바가 생김
    fitToSection:true,
    fitToSectionDelay:600,

    scrollingSpeed:1000,  // default - 700 

    menu: '.menu',
    anchors:['home', 'aboutme', 'skills','portfolio', 'photogallery','contact'],  // 각섹션으로 가는 링크

    responsiveWidth: 800,   //너비 800 이하일땐 일반 스크롤바, 페이지버튼 없어짐
});