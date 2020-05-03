const parseJsonToBot = jsonArray => {
  return jsonArray.reduce((acuml, propertyObj) => {
    return `${acuml}+\n${propertyObj}\n`;
  }, '');
};

const parseObjectToBot = jsonObject => {
  let message = '';

  for (const prop in jsonObject) {
    if (prop === 'id') {
      message += '\n\nMeu ID B-Tex:' + `${jsonObject[prop]}` + '\n\n';
    } else {
      message += `${jsonObject[prop]}` + '\n';
    }
  }

  return message;
};

const wrapperResponseToBot = json => {
  const jsonIsArray = Array.isArray(json);

  if (jsonIsArray) {
    return parseJsonToBot(json);
  }
  return parseObjectToBot(json);
};

export default wrapperResponseToBot;
