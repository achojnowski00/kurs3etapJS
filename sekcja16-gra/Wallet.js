class Wallet {
  constructor(money) {
    let _money = money

    //pobieranie wartości portfela
    this.getWalletValue = () => _money; //return _money

    //sprawdzanie czy user ma odpowiednią ilość środków
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      else return false;
    }


    this.changeWallet = (value, type = '+') => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return _money += value
        } else if (type == '-') {
          return _money -= value;
        } else {
          throw new Error('nieprrawidłowy typ działania');
        }
      } else {
        console.log(typeof value);
        throw new Error('nieprawidłowa liczba');
      }
    }
  }
}

const wallet = new Wallet(290)