const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
}

function get(obj, path, defaultValue = null) {
  let tmpObjectValue = obj
  const pathSteps = path.split('.')

  for (let i = 0; i < pathSteps.length; i++) {
    if (pathSteps[i] in tmpObjectValue) {
      tmpObjectValue = tmpObjectValue[pathSteps[i]]
    } else {
      return defaultValue ?? undefined
    }
  }

  return tmpObjectValue
}

get(obj, 'a.b')   // { c : 'd' }
get(obj, 'a.b.c') // 'd'
get(obj, 'a.e')   // 'f'
get(obj, 'x.x.e') // undefined
get(obj, 'a.x.e', true) // true
get(obj, 'a.x.e', 'My default value') // My default value
