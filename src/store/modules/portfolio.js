const state = {
  funds:10000,
  stocks:[]     //stocks here refer to stocks of our portfolio, not to all the stocks available
};

const mutations = {
  'BUY_STOCK'(state,{stockId, stockPrice, quantity}){
    const record = state.stocks.find(element => element.id == stockId);
    if(record){
      //record.quantity += quantity;
      record.quantity = Number(record.quantity) + Number(quantity)
    } else {
      state.stocks.push({
        id: stockId,
        quantity:quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
   'SELL_STOCK' (state,{stockId, quantity, stockPrice}) {
      const record = state.stocks.find(element => element.id == stockId);
      //case where you have more than what you want to sell
      if(record.quantity > quantity) {
        //record.quantity -= quantity;
        record.quantity = Number(record.quantity) - Number(quantity)
      } else {
        // case where you want to sell more than what you have or
        // exactly the amount you have
        //remove the item from the array
        state.stocks.splice(state.stocks.indexOf(record),1);
      }
      state.funds += stockPrice * quantity;
   },
   'SET_PORTFOLIO' (state,portfolio) {
     state.funds = portfolio.funds;
     state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
   }
}

const actions = {
  sellStock({commit},order) {
    commit('SELL_STOCK',order)
  }
}

const getters = {
  //to access global getters, you inject getters in parameters
  stockPortfolio (state, getters){
    return state.stocks.map(stock => {
      //access the getters by name you have specified when creating them
      const record = getters.stocks.find(element => element.id == stock.id)
      return {
        id : stock.id,
        quantity : stock.quantity,
        name : record.name,
        price : record.price
      }
    })
  },
  funds (state) {
    return state.funds;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
