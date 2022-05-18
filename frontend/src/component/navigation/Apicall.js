export const Apicall = async (url, method, headers, data) => {
  const baseUrl = `http://127.0.0.1:8000/api/blog/`
  // const header = headers !== null ? new Headers(headers) : new Headers()
  // if (headers === null) {
  //   header.append('Content-Type', 'application/json')
  // }
  // const requestOptions = {
  //   method: method,
  //   headers: header,
  //   body: data,
  // }
  // return await fetch(baseUrl + url, requestOptions)
  //   .then((res) => {
  //     return res
  //   })
  //   .catch((error) => {
  //     console.warn(error)
  //   })
  return baseUrl;
}
