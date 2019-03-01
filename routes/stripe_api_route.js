const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireAuth = require('../middlewares/requireAuth');

module.exports = app => {
  app.get('/api/SUBSCRIPTIONS_DATA', requireAuth, async (req, res) => {
    const request = await stripe.subscriptions.list();
    // const customers = await stripe.customers.list();
    // const customer = await stripe.customers.retrieve(customers.data[0].id);
    res.send(request);
  });
};
