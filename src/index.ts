const _mediaTypes = {}

const getMediaTypes = function (types?:string[]) {
  if (!types || types.length === 0) return _mediaTypes
  const ret = {}
  for (const key of types) {
    ret[key] = _mediaTypes[key] || null
  }
  return ret
}

export type MediaType = {
  name: string
  meta: any
}

const registerMediaType = function (mediaType: MediaType) {
  _mediaTypes[mediaType.name] = mediaType.meta
}

export { getMediaTypes, registerMediaType }
export default _mediaTypes
