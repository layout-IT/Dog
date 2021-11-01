  let swiper = new Swiper(".mySwiper", {
        effect: "cube",
		loop:true,
        grabCursor: true,
        cubeEffect: {
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
	
      });

	function replacement(){
	let bigBlock = document.querySelector('.gallery__img-big');
	let bigBlockImg = document.querySelector('.gallery__img-big').getElementsByTagName("picture");
	let column = document.getElementsByClassName('gallery__column');
		for ( let index = 0; index < column.length; index++){
			column[index].addEventListener('click', function(e){
				let where =  column[index].querySelector('.gallery__item')
				let lastchild = column[index].querySelector("picture");
				bigBlock.insertAdjacentElement('beforeend',lastchild);
				where.insertAdjacentElement('beforeend',bigBlockImg[0]);
			});
		};
};
replacement()
