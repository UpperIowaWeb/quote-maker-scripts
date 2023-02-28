window.onload = function(){chgDailyTxt();}
function chgDailyTxt()
{

var textarray = new Array();
textarray[1]="\"Every person has a responsibility to be a participant in this society and make it a better place for everybody, in whatever capacity they can.\" – Megan Rapinoe";
textarray[2]="\"When the whole world is silent, even one voice becomes powerful.\" – Malala Yousafzai";
textarray[3]="\"To love ourselves and support each other in the process of becoming real is perhaps the greatest single act of daring greatly.\" -Brene Brown";
textarray[4]="\“At the end of the day, we can endure much more than we think we can.\”— Frida Kahlo";
textarray[5]="\"Fight for the things that you care about, but do it in a way that will lead others to join you.\" – Ruth Bader Ginsburg";
textarray[6]="\"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.\" – Harriet Tubman";
textarray[7]="\“The silencing of one woman is the silencing of all women. The awakening of women is the awakening of the whole world.\”— Dr. Tererai Trent";
textarray[8]="\“Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.\”— Maya Angelou";
textarray[9]="\“Nothing is impossible, the word itself says ‘I’m possible’!\” — Audrey Hepburn";
textarray[10]="\"The most common way people give up their power is by thinking they don't have any.\" -Alice Walker";
textarray[11]="\“The future belongs to those who believe in the beauty of their dreams.\” — Eleanor Roosevelt ";
textarray[12]="\“If you were born with the weakness to fall, you were born with the strength to rise.\” — Rupi Kaur";
textarray[13]="\“Friends. Sisters. Mothers. Professors. When women affirm women, it unlocks our power. It gives us permission to shine brighter.\”— Elaine Welteroth";
textarray[14]="\“If you’re comfortable with yourself and know yourself, you’re going to shine and radiate and other people are going to be drawn to you.\” — Dolly Parton";
textarray[15]="\"Never be limited by other people's limited imaginations.\" – Dr. Mae Jemison";
textarray[16]="\“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.\” — J.K. Rowling";
textarray[17]="\“You must never be fearful about what you are doing when it is right.\”— Rosa Parks";
textarray[18]="\“Never doubt that you are valuable and powerful and deserving of every chance in the world to pursue your dreams.\”— Hillary Clinton";
textarray[19]="\“The older I get, the greater power I seem to have to help the world; I am like a snowball – the further I am rolled the more I gain.\” — Susan B. Anthony";
textarray[20]="\“Know what sparks the light in you so that you, in your own way, can illuminate the world.\” — Oprah Winfrey";
textarray[21]="\“When women lose themselves, the world loses its way. We do not need more selfless women. What we need right now is more women who have detoxed themselves so completely from the world's expectations that they are full of nothing but themselves. What we need are women who are full of themselves. A woman who is full of herself knows and trusts herself enough to say and do what must be done. She lets the rest burn.\”— Glennon Doyle";
textarray[22]="\“No country can ever truly flourish if it stifles the potential of its women and deprives itself of the contributions of half of its citizens.” — Michelle Obama";
textarray[23]="\“Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.\” — Lucille Ball";
textarray[24]="\“If you don’t see a clear path for what you want, sometimes you have to make it yourself.\”— Mindy Kaling";
textarray[25]="\“Above all, be the heroine of your life, not the victim.\”— Nora Ephron";
textarray[26]="\“If you truly pour your heart into what you believe in, even if it makes you vulnerable, amazing things can and will happen.\” — Emma Watson";
textarray[27]="\“Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.\” — Helen Keller";
textarray[28]="\“All of us are put in boxes by our family, by our religion, by our society, our moment in history, even our own bodies. Some people have the courage to break free.\” -Geena Rocero";
textarray[29]="\“I really think a champion is defined not by their wins but by how they can recover when they fall.\” — Serena Williams";
textarray[30]="\“The most difficult thing is the decision to act; the rest is merely tenacity.\” — Amelia Earhart";
textarray[31]="\"If you don't risk anything, you risk even more.\" - Erica Jong";

var d = new Date(); /*** create a date object for use ***/
var i = d.getDate(); /*** use the date object to get the day of the week - this will be a number from 0 to 6 - sunday=0, saturday=6 -it's the way counting works in javascript it starts at 0 like in the arrays ***/
document.getElementById("dailyTxt").innerHTML = textarray[i];
}