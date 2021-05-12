// Only run your custom code once KiteConnect has fully initialised.
// Use KiteConnect.ready() to achieve this.
KiteConnect.ready(function() {
    // Initialize a new Kite instance.
    // You can initialize multiple instances if you need.
    var kite = new KiteConnect("7qokmn33puoesfm4");

    // Add a stock to the basket
    kite.add({
        "exchange": "NFO",
        "tradingsymbol": "NIFTY2151214800PE",
        "quantity": 75,
		"order_type": "SL-M",
        "transaction_type": "BUY",
		"trigger_price": 81.95,
        "product": "MIS"
    });

    <!-- kite.add({ -->
        <!-- "exchange": "NFO", -->
        <!-- "tradingsymbol": "BANKNIFTY21MAY31000CE", -->
        <!-- "quantity": 25, -->
		<!-- "order_type": "SL-M", -->
        <!-- "transaction_type": "BUY", -->
		<!-- "trigger_price": 600, -->
        <!-- "product": "MIS" -->
    <!-- }); -->

    // Register an (optional) callback.
    kite.finished(function(status, request_token) {
        alert("Finished. Status is " + status);
    });

    // Render the in-built button inside a given target
    kite.renderButton("#default-button");

    // OR, link the basket to any existing element you want
    kite.link("#custom-button");
});
