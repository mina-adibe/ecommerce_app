//first function
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

//second function
//pass the request on the interceptor
//isHandlerEnabled : to pass the request on the interceptor or no ???
export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    //set loader
    //passing request headers
  }
  return request;
};

//third function
export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    //remove loader
  }
  return response;
};

//fourth function
export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    //remove loader
  }
  return Promise.reject({ ...error });
};
