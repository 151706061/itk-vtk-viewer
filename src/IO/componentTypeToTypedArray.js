import IntTypes from 'itk/IntTypes'
import FloatTypes from 'itk/FloatTypes'

const componentTypeToTypedArray = new Map([
  [IntTypes.Int8, Int8Array],
  [IntTypes.UInt8, Uint8Array],
  [IntTypes.Int16, Int16Array],
  [IntTypes.UInt16, Uint16Array],
  [IntTypes.Int32, Int32Array],
  [IntTypes.Uint32, Uint32Array],

  [FloatTypes.Float32, Float32Array],
  [FloatTypes.Float64, Float64Array],
])

export default componentTypeToTypedArray
