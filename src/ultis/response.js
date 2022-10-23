const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

const failCode = (res, data, message) => {
  res.status(400).json({
    message,
    content: data,
  });
};

const errorCode = (res, message) => {
  res.status(500).send(message);
};

module.exports = { successCode, failCode, errorCode };

//kiểm tra xem có user_id, food_id không
//kiểm tra xem cặp primary có trùng không
