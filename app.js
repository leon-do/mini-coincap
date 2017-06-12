var socket = io.connect('https://socket.coincap.io');

socket.on('trades', function (tradeMsg) {
	const myCoinArray = ['ETH', 'DASH', 'ETC', 'REP', 'LTC', 'ICN', 'GNT', 'GNO', 'DGD', 'BCAP']

    let coin = tradeMsg.message.coin
    let price = tradeMsg.message.msg.price
    let cap24hrChange = tradeMsg.message.msg.cap24hrChange

    if (myCoinArray.indexOf(coin) >= 0){
    	$(`#${coin}_price`).text(price)
    	$(`#${coin}_24h`).text(cap24hrChange)    	
    }

})


