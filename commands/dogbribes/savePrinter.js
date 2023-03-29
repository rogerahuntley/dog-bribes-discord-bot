import version2 from './version2.js'

const formats = {
  2: version2
}

const getVersionedFormatter = (version) => {
  return Object.entries(formats).reduce((acc, [key, value]) => {
    if (key <= version) {
      return value
    } else {
      return acc
    }
  }, () => { return "no version found" })
}

const formatSave = (data) => {
  // get highest verison that is or is under the save version
  const versionedFormatter = getVersionedFormatter(data.version)

  return versionedFormatter(data.data)
} 

export { formatSave }