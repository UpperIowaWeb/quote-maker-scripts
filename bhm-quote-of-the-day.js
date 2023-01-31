window.onload = function(){chgDailyTxt();}
function chgDailyTxt()
{

var textarray = new Array();
textarray[31] = "Black History Month Quote of the Day begins February 1!";
textarray[1]="\"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.\" –Harriet Tubman";
textarray[2]="\"I can accept failure. Everyone fails at something. But I can't accept not trying.\" —Michael Jordan";
textarray[3]="\"Every time you state what you want or believe, you're the first to hear it. It's a message to both you and others about what you think is possible. Don't put a ceiling on yourself.\" –Oprah Winfrey";
textarray[4]="\"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.\" –Barack Obama";
textarray[5]="\"Whatever we believe about ourselves and our ability comes true for us.\" –Susan L. Taylor";
textarray[6]="\"The cost of liberty is less than the price of repression.\" –W.E.B. Du Bois";
textarray[7]="\"Never be limited by other people's limited imaginations.\" –Dr. Mae Jemison";
textarray[8]="\"The time is always right to do what is right.\" –Martin Luther King, Jr.";
textarray[9]="\"I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.\" –Rosa Parks";
textarray[10]="\"Those who say it can’t be done are usually interrupted by others doing it.\" – James Baldwin";
textarray[11]="\"I am lucky that whatever fear I have inside me, my desire to win is always stronger.\" – Serena Williams";
textarray[12]="\"Character is power.\" –Booker T. Washington";
textarray[13]="\"The most common way people give up their power is by thinking they don’t have any.\" – Alice Walker";
textarray[14]="\"If there is no struggle, there is no progress.\" –Frederick Douglass";
textarray[15]="\"Diversity is not about how we differ. Diversity is about embracing one another’s uniqueness.\" – Ola Joseph";
textarray[16]="\"Have a vision. Be demanding.\" –Colin Powell";
textarray[17]="\"History has shown us that courage can be contagious, and hope can take on a life of its own.\"–Michelle Obama";
textarray[18]="\"You can't separate peace from freedom because no one can be at peace unless he has his freedom.\" –Malcolm X";
textarray[19]="\"Hate is too great a burden to bear. It injures the hater more than it injures the hated.\"– Coretta Scott King";
textarray[20]="\"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.\" –Langston Hughes";
textarray[21]="\"If you’re going to hold someone down you’re going to have to hold on by the other end of the chain. You are confined by your own repression.\"– Toni Morrison";
textarray[22]="\"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.\" –Booker T. Washington";
textarray[23]="\"Nothing can stop the power of a committed and determined people to make a difference in our society. Why? Because human beings are the most dynamic link to the divine on this planet.\" -John Lewis";
textarray[24]="\"We will not march back to what was. We move to what shall be, a country that is bruised, but whole. Benevolent, but bold. Fierce and free.\" -Amanda Gorman";
textarray[25]="\"We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.\" -Jesse Owens";
textarray[26]="\"Whatever we believe about ourselves and our ability comes true for us.\" –Susan L. Taylor";
textarray[27]="\"In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.\" –Thurgood Marshall ";
textarray[28]="\"Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.\"—Muhammad Ali";

var d = new Date(); /*** create a date object for use ***/
var i = d.getDate(); /*** use the date object to get the day of the week - this will be a number from 0 to 6 - sunday=0, saturday=6 -it's the way counting works in javascript it starts at 0 like in the arrays ***/
document.getElementById("dailyTxt").innerHTML = textarray[i];
}

