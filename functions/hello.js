const items = [
  {id: 1, name: "Dally"},
  {id: 2, name: "Jacob"},
  {id: 3, name: "Diaba"},
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello world",
  };
};
