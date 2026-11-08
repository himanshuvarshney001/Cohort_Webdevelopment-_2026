function mereDukan(ownner, firmname)
{
    return {
        OwnerName: ownner,
        firmname: firmname,
        sell:[],
        order(oil, khar)
        {
            this.sell.push({ oil, khar });
        }
    }
}

const shop1 = mereDukan("Ramkumar", "Ramu seth ki dukan");
shop1.order(20, 40);
console.log(shop1.sell);