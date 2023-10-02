window.onload = function(){chgDailyTxt();}
function chgDailyTxt()
{

var textarray = new Array();
textarray[11] = "Hispanic Heritage Month Word of the Day begins September 15!";
textarray[12] = "Hispanic Heritage Month Word of the Day begins September 15!";
textarray[13] = "Hispanic Heritage Month Word of the Day begins September 15!";
textarray[14] = "Hispanic Heritage Month Word of the Day begins September 15!";
textarray[15] = "¡Hola! — Hello!";
textarray[16] = "Buenos días = Good morning <br>Buenas tardes = Good afternoon<br> Buenas noches = Good evening";
textarray[17] = "¡Bienvenidos! / ¡Bienvenidas! - Welcome!";
textarray[18] = "¡Gracias! — Thank you! <br> ¡Muchas gracias! — Thank you very much!";
textarray[19] = "Por favor — Please (generally used at the end of a sentence)";
textarray[20] = "¡De nada! — You're welcome!";
textarray[21] = "¡Perdona! — Excuse me!<br>¡Disculpe! / ¡Discúlpeme!— Excuse me! (used to apologize in advance for being a bit of a bother)";
textarray[22] = "¡Lo siento! — Sorry! (In case you make a mistake)";
textarray[23] = "Salud = Bless you (after someone sneezes) or Cheers!";
textarray[24] = "Hola, me llamo Juan = Hello, my name is John<br>Me llamo… = My name is…<br>¿Cómo te llamas? = What's your name?";
textarray[25] = "Mucho gusto = Nice to meet you";
textarray[26] = "¿Cómo estás? = How are you?<br>Estoy bien, gracias = I'm well thank you";
textarray[27] = "¿Qué…? — What…?<br>¿Quién…? — Who…<br>?¿Cuándo…? — When…?<br>¿Cuál…? — Which…?<br>¿Cómo…? — How…?<br>Dónde…? — Where…?<br>¿Por qué…? — Why…?";
textarray[28] = "Sí — Yes.<br>?No — No.<br>?Tal vez — Maybe.<br>?Nunca = Never<br>?A veces = Sometimes<br>?Claro = Of course<br>?¡Sin problema! — No problem!. Spanish people usually add “claro” at the end.<br>?No lo sé — I don’t know!";
textarray[29] = "Disculpa. ¿Dónde está el baño? = Excuse me. Where is the bathroom?";
textarray[30] = "¿Qué hora es? Or ¿Qué hora tienes? - What time is it?= What time is it?";
textarray[31] = "¿Cómo se dice 'concert' en español? = How do you say 'concert' in Spanish?";
textarray[2] = "¿Qué es esto? - What is this?";
textarray[3] = "¿Dónde puedo comprar…? - Where can I buy…?";
textarray[4] = "Estoy perdido/a = I am lost";
textarray[5] = "Yo no comprendo = I do not understand <br> No entiendo. ¿Puedes repetirlo por favor? = I don't understand! Could you please repeat it?";
textarray[6] = "Por favor, habla más despacio = Would you speak slower, please";
textarray[7] = "No Me Acuerdo = I don't remember";
textarray[8] = "¿Qué significa? = What does… mean?";
textarray[9] = "¿De dónde viene? = Where are you from? <br> Soy de Nueva York = I'm from New York";
textarray[10] = "No hablo español — I don't speak Spanish <br>Mi español no es bueno — My Spanish isn't very good.";
textarray[11] = "¿Tienes hermanos o hermanas? - Do you have brothers or sisters? <br> No, soy hijo único - No, I am an only child<br>	Sí, tengo dos hermanas mayores - Yes, I have two older sisters <br> Sí, tengo un hermano menor - Yes, I have one younger brother";
textarray[12] = "¡Feliz Cumpleaños! - Happy Birthday!";
textarray[13] = "Te extraño = I miss you";
textarray[14] = "= Te quiero = I love you";
textarray[15] = "Saying goodbye in Spanish <br> Adiós - Goodbye <br> ¡Buenas noches! - Goodnight! <br> ¡Hasta luego! - See you later! <br> ¡Hasta pronto! - See you soon! <br> ¡Hasta mañana! - See you tomorrow! <br> Nos vemos - See you";



var d = new Date(); /*** create a date object for use ***/
var i = d.getDate(); /*** use the date object to get the day of the week - this will be a number from 0 to 6 - sunday=0, saturday=6 -it's the way counting works in javascript it starts at 0 like in the arrays ***/
document.getElementById("dailyTxt").innerHTML = textarray[i];
}


