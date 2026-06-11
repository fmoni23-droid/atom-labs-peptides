module.exports = async function handler(req, res) {
  res.status(410).json({
    error: "Hosted checkout has been replaced with Zelle order requests.",
    paymentMethod: "Zelle",
    zelleRecipient: "atomlabsresearch@gmail.com"
  });
};
