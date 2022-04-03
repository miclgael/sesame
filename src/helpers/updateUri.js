/**
 * Convert the base of a given URI into desired output URI
 *
 * @param   {string}  uri        current URI
 * @param   {string}  domain     desired domain name
 *
 * @return  {string}             full URI with updated domain name
 */
export const updateUri = (uri, domain) => {
  // allow use of window.location methods
  uri = new URL(uri);
  return domain + uri.href.split(uri.origin)[1];
};
