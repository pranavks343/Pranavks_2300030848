const Orders = require('../Models/Orders');



exports.createOrders = async (req, res) => {
  try {
    const order = new Orders(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateOrders = async (req, res) => {
  try {
    const order = await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteOrders = async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};