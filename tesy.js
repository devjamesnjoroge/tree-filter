// let array = [
//     [{cy: 'ke', id: 1, curr: "jamai"}, {cy: 'ke', id: 2, curr: "mtu"}, {cy: 'ke', id: 3, curr: "hope"}],
//     [{id: 'unique1', curr: "jamai", cy: 'ke'}, {id: 'unique1b', curr: "mtu", cy : 'ke'}, {id: 'unique1c', curr: "hope", cy : 'ke'}],
//     [{id: 'unique2', curr: "jamai", cy: 'ke'}, {id: 'unique2b', curr: "mtu", cy : 'ke'}, {id: 'unique2c', curr: "hope", cy : 'ke'}],
// ]

// global = []

// array.forEach((element) => {
//     let first = {}
//     let obj = {}
//     element.forEach((item) => {
//         first['currency'] = item.cy
//         obj[item.id] = item.curr
//         obj2 = _.merge 
//         (first, obj)
//     })
//     global.push(obj2)
// })


// console.log(global)

currencies = [
    {id: 1, currency:"USD – United States Dollar"},
    {id: 2, currency:"GBP – Great Britain Pound"},
    {id: 3, currency:"CAD – Canadian Dollar"},
    {id: 4, currency:"EUR – Euro"},
    {id: 5, currency:"INR – Indian Rupee"},
    {id: 6, currency:"SGD – Singapore Dollar"},
  ]

  exchange_rate = [
    {currency: currencies[0].currency, year: 2020, rate: 1.001},
    {currency: currencies[0].currency, year: 2021, rate: 1.101},
    {currency: currencies[0].currency, year: 2022, rate: 1.101},
    {currency: currencies[1].currency, year: 2020, rate: 1.001},
    {currency: currencies[1].currency, year: 2021, rate: 1.101},
    {currency: currencies[1].currency, year: 2022, rate: 1.101},
    {currency: currencies[2].currency, year: 2020, rate: 1.001},
    {currency: currencies[2].currency, year: 2021, rate: 1.101},
    {currency: currencies[2].currency, year: 2022, rate: 1.101},
    {currency: currencies[3].currency, year: 2020, rate: 1.001},
    {currency: currencies[3].currency, year: 2021, rate: 1.101},
    {currency: currencies[3].currency, year: 2022, rate: 1.101},
    {currency: currencies[4].currency, year: 2020, rate: 1.001},
    {currency: currencies[4].currency, year: 2021, rate: 1.101},
    {year: 2092, rate: 1000, currency: currencies[4].currency},
    {currency: currencies[5].currency, year: 2020, rate: 1.001},
    {currency: currencies[5].currency, year: 2021, rate: 1.101},
    {currency: currencies[5].currency, year: 2022, rate: 1.101},
  ]

  exchange_rate_has = []

  currencies.forEach((element) => {
    exchange_rate_has.push(exchange_rate.filter((item) => (item.currency === element.currency)))
  });

  console.log(exchange_rate_has)