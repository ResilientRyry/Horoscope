//User enters birthday
//user receives astrologic sign
//user is given horoscope

//event listener for button
document.getElementsByTagName('button')[0].onclick = sign

function sign(){
  var month = document.getElementsByTagName('select')[0].value
  var day = document.getElementsByTagName('select')[1].value
  //functiom for birthday
  //document.getElementByTagName('input')[0].value
    //determining horoscope
    if ( (month == 4) && (day <=19) || (month == 3) && (day >=21) ) {
      displayCompleteMessage("Aries")
      document.getElementsByTagName("p")[0].innerHTML = "You may feel like you're walking on burning coals today, Aries. Someone has tossed you the ball and you need to figure out what to do with it. Use your fancy footwork to keep your feet from searing as you exercise your mind to figure out your next move. Try not to be too stubborn or you'll get nowhere. The key is to stay flexible and go with the flow when unexpected events occur."
    }
    else if ( (month == 5) && (day <=20) || (month == 4) && (day >=20 ) ){
      displayCompleteMessage("Taurus")
      document.getElementsByTagName("p")[0].innerHTML = "Your emotions will feel stable today, Taurus, although there may be an unexpected element trying to sneak into the equation. Be aware that people will be a bit more volatile today. Although the situation may be calm and cool one minute, it has the potential to be explosive the next. Try to stay centered all day so you don't get thrown off course by other people's erratic emotions."
    }
    else if ( (month == 6) && (day <=20) || (month == 5) && (day >= 21) ){
      displayCompleteMessage("Gemini")
      document.getElementsByTagName("p")[0].innerHTML = "Explore deeply your innovative, irrational side today, Gemini. Your emotions may run counter to this principle, but instead of letting this put a damper on your progress, use the energy to spur you to action. Take advantage of the new gadgets and technology available to you. Incredible resources lie at your fingertips. Don't be afraid to harness their power to your advantage."
    }
    else if ( (month == 7) && (day <=22) || (month == 6) && (day >= 21) ){
      displayCompleteMessage("Cancer")
      document.getElementsByTagName("p")[0].innerHTML = "You might want to stay in and not speak to anyone today, Cancer. If you decide to venture out, you're apt to run into opposition almost everywhere you turn. Don't see this as negative. Use it as incentive to work harder toward your goals. There are strong forces egging you on, so act confidently. Make sure you get your emotions out. Otherwise, they'll fester and do more harm than good."
    }
    else if ( (month == 8) && (day <= 22) || (month == 7) && (day >= 23) ){
      displayCompleteMessage("Leo")
      document.getElementsByTagName("p")[0].innerHTML = "You may not feel like you're exactly clicking with anything today, Leo. Adjustments will need to be made either by you or the people you're dealing with for any resolution to come about. Your emotions may feel tied to the ground, yet your mind may want to take off into the stratosphere. Dilemmas between whether to take action or stay passive could leave you paralyzed. Just go with the flow."
    }
    else if ( (month == 9) && (day <= 22) || (month == 8) && (day >= 23) ){
      displayCompleteMessage("Virgo")
      document.getElementsByTagName("p")[0].innerHTML = "Examine your emotions, Virgo, and trust your instincts. Unexpected forces may try to disrupt the flow of things. Keep in mind that you should have no problem keeping the situation under control as long as you stay solid and focused. The actions you take today will have long-lasting effects, so be conscious of how you use your energy. Incorporate the old as well as the new in your game plan."
    }
    else if ( (month == 10) && (day <= 22) || (month == 9) && (day >= 23) ){
      displayCompleteMessage("Libra")
      document.getElementsByTagName("p")[0].innerHTML = "This is one of those days in which you might not be fully appreciated for the wonderful breath of fresh air you bring to the group, Libra. Revenge of the stale and old may be coming into the fold today. Don't give in to negative forces trying to keep you from fully expressing yourself. Have confidence that you have what it takes to be successful in whatever path you decide to follow."
    }
    else if ( (month == 11) && (day <= 21) || (month == 10) && (day >= 23) ){
    dipalCompleteMessage("Scorpio")
    document.getElementByTagName("p")[0].innerHTML = "Don't be surprised if things don't go exactly according to plan today, Scorpio. Unexpected events are likely to pop up and disturb the course of action. Realize that these disruptions have a place in your life and that they're occurring for a reason. You might not understand exactly how or why, but that's OK. You don't need to know. Welcome these new energies into your life."
  }
    else if ( (month == 12) && (day <= 21) || (month == 11) && (day >= 22) ){
      displayCompleteMessage("Sagittarius")
      document.getElementsByTagName("p")[0].innerHTML = "Your emotions could be a bit vulnerable today, Sagittarius, and it may be hard to find shelter from the storm. Your umbrella is a bit too drafty and water seems to be leaking in from the top. Comfort yourself by centering and enjoying a quiet evening at home. Don't let other people's unsolved problems infect your space. Differentiate between issues that concern you and those that are out of your control."
    }
    else if ( (month == 1) && (day <=19) || (month == 12) && (day >= 22) ){
      displayCompleteMessage("Capricorn")
      document.getElementsByTagName("p")[0].innerHTML = "Unexpected events may crop up and nudge you in the side, Capricorn. You could get the feeling that there are thorns poking out of nowhere whose sole purpose is to annoy you. Try to maintain a stable attitude and think about incorporating unconventional aspects into your daily routine. The crazy whirlwind of activity today could disrupt your emotions a bit. Don't get frustrated by things you can't control."
    }
    else if ( (month == 2) && (day <= 18) || (month == 1) && (day >= 20) ){
      displayCompleteMessage("Aquariius")
      document.getElementsByTagName("p")[0].innerHTML = "Today you have the ability to make an important breakthrough in whatever project you work on, Aquarius. Try not to get bogged down by emotions, which may leave you feeling heavy and stale. Infuse the day with a blast of unconventional thinking. Try to adopt a new, fresh attitude toward whatever it is you want to accomplish. A new perspective is all you need to make this day productive"
    }
    else if ( (month == 3) && (day <= 20) || (month == 2) && (day >= 19) ){
    dipalCompleteMessage("Pisces")
    document.getElementByTagName("p")[0].innerHTML = "You may get the feeling that you're rubbing against sandpaper today, Pisces. More than likely, this is a result of issues deep inside you. Some of these emotions concern the constant tension between old and new energies clashing within your world. This is one of those days in which things come to a head. Pieces of your inner being are hitting you square in the face."
  }
    else {
      displayCompleteMessage("Please enter correct date or leave cause Im a strong independent code and I dont need no user")
    }
    // (4/20 5/20 == Taurus) ||
    // (5/21 6/20 == Gemini) ||
    // (6/21 7/22 == Cancer) ||
    // (7/23 8/22 == Leo) ||
    // (8/23 9/22 == Virgo) ||
    // (9/ 23 10/22 == Libra) ||
    // (11/22 12/21 == Sagittarius) ||
    // (12/22 1/19 == Capricorn) ||
    // (1/20 2/18 == Aquarius)

          //display horoscope


}

function displayCompleteMessage(msg){
    document.getElementsByTagName("h1")[0].innerHTML=msg;
}
