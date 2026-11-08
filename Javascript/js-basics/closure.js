function eternalGuest(guest) {
    const guestName = guest;
    let count = 0;
    function zamato()
    {
        if (count === 1) return;
        console.log(`${guestName} this is our zamoto guest`);
        count++;
    }
    function blinkit()
    {
        if (count == 1) return;
        console.log(`${guestName} this is blinkit guest`);
        count++;
    }
    return { zamato, blinkit };
}

const himanshu = eternalGuest("Himanshu");
const mayank = eternalGuest("Mayank");

// yaha kebal ek bar chalege kyu ki same lexical environment ki bajay se count dono ke liye same hoga

//Core concept: Closure ka matlab ye nahi ki har nested function ko apni copy of variables milti hai. Closure mein function outer lexical environment ke bindings ko remember karta hai.
himanshu.zamato()
himanshu.blinkit()
himanshu.zamato();
himanshu.blinkit();

mayank.blinkit();
mayank.zamato();