const _mediaTypes = {}

export const getMediaTypes = function (types?: string[]) {
  if (!types || types.length === 0) return _mediaTypes
  const ret = {}
  for (const key of types) {
    ret[key] = _mediaTypes[key] || null
  }
  return ret
}

export const getMediaType = (type: string) => {
  return _mediaTypes[type]
}

export type MediaType = {
  name: string
  meta: any
}

export const registerMediaType = function (mediaType: MediaType) {
  _mediaTypes[mediaType.name] = mediaType.meta
}

export const getCacheImage = async (
  type: string,
  meta: { source: string; attachInfo?: string }
) => {
  if (!_mediaTypes[type]) {
    throw new Error('Media type not found.')
  }
  const { source, attachInfo } = meta
  const res = await _mediaTypes[type].cacheImageFunc(source, attachInfo)
  return res
}

export const render = async (
  type: string,
  meta: { source: string; dom: HTMLDivElement; config?: any }
) => {
  if (!_mediaTypes[type]) {
    throw new Error('Media type not found.')
  }
  const { source, dom, config } = meta
  const res = await _mediaTypes[type].renderFunc(source, dom, config)
  return res
}
