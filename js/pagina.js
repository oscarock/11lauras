$(document).ready(function() {
	
	/*Carga el primer div*/	
	$('#acerca_de_mi').fadeIn(2000);
	/*Fin Carga el primer div */

	/*Efectos Menu*/
	$('#acerca').mouseover(function(){
		$('#acerca').animate({left:50, duration: 'slow',easing: 'easeOutBack'}, 200);
		$('#acerca').animate({left:0, duration: 'slow',easing: 'easeOutBack'}, 200)
	});
	$('#obras').mouseover(function(){
		$('#obras').animate({left:50, duration: 'slow',easing: 'easeOutBack'}, 200);
		$('#obras').animate({left:0, duration: 'slow',easing: 'easeOutBack'}, 200)
	});
	$('#joyas').mouseover(function(){
		$('#joyas').animate({left:50, duration: 'slow',easing: 'easeOutBack'}, 200);
		$('#joyas').animate({left:0, duration: 'slow',easing: 'easeOutBack'}, 200)
	});
	$('#hemeroteca').mouseover(function(){
		$('#hemeroteca').animate({left:50, duration: 'slow',easing: 'easeOutBack'}, 200);
		$('#hemeroteca').animate({left:0, duration: 'slow',easing: 'easeOutBack'}, 200)
	});
	/*Fin Efectos Menu*/

	/*Efecto Ver Mas*/
	$('#ver_mas').click(function(){
		$('#ver_mas_texto').fadeIn(1000);
		$('#ver_mas').css('display','none');
		$('#ver_menos').css('display','block');
	});
	$('#ver_menos').click(function(){
		$('#ver_mas_texto').fadeOut(1000);
		$('#ver_mas').css('display','block');
		$('#ver_menos').css('display','none');
	});
	$('#ver_mas_2').click(function(){
		$('#ver_mas_obras').fadeIn(1000);
		$('#ver_mas_2').css('display','none');
		$('#ver_menos_2').css('display','block');
	});
	$('#ver_menos_2').click(function(){
		$('#ver_mas_obras').fadeOut(1000);
		$('#ver_mas_2').css('display','block');
		$('#ver_menos_2').css('display','none');
	});
	/*Fin Efecto Ver Mas*/

	/*Acciones Menu*/
	$('#acerca').click(function(){
		$('#acerca_de_mi').fadeIn(2000);
		$('#obras_realizadas').fadeOut('fast');
	});
	$('#obras').click(function(){
		$('#acerca_de_mi').fadeOut('fast');
		$('#obras_realizadas').fadeIn(2000);
	});
	/*Fin Acciones Menu*/
});